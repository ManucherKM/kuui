import {
	useState,
	type DragEvent,
	type FC,
	type InputHTMLAttributes,
} from 'react'
import classes from './DragAndDrop.module.scss'
import clsx from 'clsx'
import { Popup } from '@/components/Popup/Popup'

export interface IDragAndDrop
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	onClose: () => void
	onChangeFiles?: (files: FileList) => void
}

export const DragAndDrop: FC<IDragAndDrop> = ({
	onClose,
	className,
	onChangeFiles = () => {},
	...props
}) => {
	const [isActive, setIsActive] = useState<boolean>(false)

	function dragOverHandler(e: DragEvent<HTMLLabelElement>) {
		e.preventDefault()
		setIsActive(true)
	}

	function dragLeaveHandler(e: DragEvent<HTMLLabelElement>) {
		setIsActive(false)
	}

	function dropHandler(e: DragEvent<HTMLLabelElement>) {
		e.preventDefault()
		const files = e.dataTransfer.files
		onChangeFiles(files)
		setIsActive(false)
	}

	const styles = clsx([classes.wrapper, isActive && classes.active, className])
	return (
		<Popup clear onClose={onClose}>
			<label
				className={styles}
				onDragOver={dragOverHandler}
				onDragLeave={dragLeaveHandler}
				onDrop={dropHandler}
			>
				<svg
					className={classes.icon}
					width="50"
					height="50"
					viewBox="0,0,256,256"
				>
					<g
						fillRule="nonzero"
						stroke="none"
						strokeWidth="1"
						strokeLinecap="butt"
						strokeLinejoin="miter"
						strokeMiterlimit="10"
					>
						<g transform="scale(5.12,5.12)">
							<path d="M30.39844,2h-23.39844v46h36v-33.39844zM30,15v-10.60156l10.60156,10.60156z"></path>
						</g>
					</g>
				</svg>
				<span className={classes.description}>
					Transfer files to this area.
				</span>
				<input className={classes.input} type="file" {...props} />
			</label>
		</Popup>
	)
}
