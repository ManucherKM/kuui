// Types
import type { ChangeEvent, DragEvent, FC, InputHTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'
import { useState } from 'react'

// Styles
import classes from './DragAndDrop.module.scss'

// Components
import { Popup } from '@/components/Popup/Popup'

// Icons
import * as icons from '@/assets/icons'

/** Allowable DragAndDrop types. */
export type TDragAndDrop = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/** DragAndDrop component interface. */
export interface IDragAndDrop extends TDragAndDrop {
	onClose: () => void
	onChangeFiles?: (files: FileList) => void
}

/**
 * Using the DragAndDrop component, you can receive files added by the user by
 * dragging the mouse. Below is an example of its use.
 *
 * @example
 * 	;<FileAdd variant="dragAndDrop" onChangeFiles={console.log} />
 */
export const DragAndDrop: FC<IDragAndDrop> = ({
	onChangeFiles,
	onChange,
	onClose,
	className,
	...props
}) => {
	// State for changing styles.
	const [isActive, setIsActive] = useState<boolean>(false)

	/** Handler function for the dragover event. */
	function dragOverHandler(e: DragEvent<HTMLLabelElement>) {
		// Preventing the default browser event.
		e.preventDefault()

		// Changing the activity state.
		setIsActive(true)
	}

	/** Handler function for the dragleave event. */
	function dragLeaveHandler(e: DragEvent<HTMLLabelElement>) {
		// Changing the activity state.
		setIsActive(false)
	}

	/** Handler function for the drop event. */
	function dropHandler(e: DragEvent<HTMLLabelElement>) {
		// Preventing the default browser event.
		e.preventDefault()

		// Files transferred by the user.
		const files = e.dataTransfer.files

		// If the user has installed a handler to catch file changes.
		if (onChangeFiles) {
			// We call it by transferring files.
			onChangeFiles(files)
		}

		// Changing the activity state.
		setIsActive(false)
	}

	/** A handler function to catch changes in the input. */
	function changeHandler(e: ChangeEvent<HTMLInputElement>) {
		// If the developer installed his own handler.
		if (onChange) {
			// Call this handler.
			onChange(e)
		}

		// If the user-selected files exist and if the developer specified a handler for changing files.
		if (e && e.target.files && onChangeFiles) {
			// Call this handler.
			onChangeFiles(e.target.files)
		}
	}

	// Put all used style classes into the "styles" variable.
	const styles = clsx([classes.root, isActive && classes.active, className])

	return (
		<Popup clear onClose={onClose}>
			<label
				className={styles}
				onDragOver={dragOverHandler}
				onDragLeave={dragLeaveHandler}
				onDrop={dropHandler}
			>
				<icons.File className={classes.icon} width="50" height="50" />
				<span className={classes.description}>
					Transfer files to this area.
				</span>
				<input
					className={classes.input}
					type="file"
					onChange={changeHandler}
					{...props}
				/>
			</label>
		</Popup>
	)
}
