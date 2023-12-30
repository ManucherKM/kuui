// Types
import type { FC, HTMLAttributes } from 'react'

// Utils
import clsx from 'clsx'
import { useState } from 'react'

// Styles
import classes from './FileItem.module.scss'

// Icons
import {
	FileDefault,
	FileRar,
	FileTxt,
	FileWord,
	FileXlsx,
	FileZip,
} from '@/assets/icons'
import { useTabIndex } from '@/hooks'

const images = ['jpg', 'jpeg', 'png', 'apng', 'avif', 'gif', 'webp']

/** Enumerate possible file extensions for the FileItem component. */
export enum EFileItemExtension {
	word = 'word',
	xlsx = 'xlsx',
	zip = 'zip',
	rar = 'rar',
	txt = 'txt',
	file = 'file',
}

/** FileItem component interface. */
export interface IFileItem extends HTMLAttributes<HTMLDivElement> {
	/** File extension. */
	extension: string

	/** File name. */
	name: string

	/** Flag for checking file activity. */
	isActive?: boolean
}

/**
 * Using the FileItem component, you can display information about a user's
 * file. Below is an example of its use.
 *
 * @example
 * 	;<FileItem extension="word" name="Mike smith" isActive={true} />
 */
export const FileItem: FC<IFileItem> = ({
	className,
	extension,
	isActive = false,
	name,
	children,
	tabIndex = useTabIndex(),
	...props
}) => {
	// State for focus tracking.
	const [isTextFocused, setIsTextFocused] = useState<boolean>(false)

	/** Function handler for the "focus" event. */
	function textFocusHandler() {
		setIsTextFocused(true)
	}

	/** Function handler for the "blur" event. */
	function textBlurHandler() {
		setIsTextFocused(false)
	}

	// We put the wrapper styles into the "styles" variable.
	const styles = clsx([classes.root, isActive && classes.active, className])

	// Place the text styles in the "textStyles" variable.
	const textStyles = clsx([
		classes.name,
		!isTextFocused && classes.textEllipsis,
	])
	return (
		<div className={styles} {...props}>
			{(() => {
				if (extension === EFileItemExtension.word) return <FileWord />
				else if (extension === EFileItemExtension.xlsx) return <FileXlsx />
				else if (extension === EFileItemExtension.zip) return <FileZip />
				else if (extension === EFileItemExtension.rar) return <FileRar />
				else if (extension === EFileItemExtension.txt) return <FileTxt />
				else if (images.includes(extension.toLowerCase())) return children
				else return <FileDefault />
			})()}
			<span
				onFocus={textFocusHandler}
				onBlur={textBlurHandler}
				className={textStyles}
				tabIndex={tabIndex}
			>
				{name}.{extension}
			</span>
		</div>
	)
}
