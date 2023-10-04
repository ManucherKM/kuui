// Types
import type { FC } from 'react'
import type { IArea } from './Variant/Area/Area'
import type { IDragAndDrop } from './Variant/DragAndDrop/DragAndDrop'

// Components
import { Area } from './Variant/Area/Area'
import { DragAndDrop } from './Variant/DragAndDrop/DragAndDrop'

/** Enumeration of possible FileAdd variants. */
export enum EFileAddVariant {
	area = 'area',
	dragAndDrop = 'dragAndDrop',
}

/** Interface for FileAdd with the "area" variant. */
export interface IFileAddArea extends IArea {
	variant: `${EFileAddVariant}`
}

/** Interface for FileAdd with the "dragAndDrop" variant. */
export interface IFileAddDragAndDrop extends IDragAndDrop {
	variant: `${EFileAddVariant}`
}

/**
 * Using the File Add component you can get files added by the user. Below is an
 * example of its use.
 *
 * @example
 * 	;<FileAdd variant="dragAndDrop" onChangeFiles={console.log} />
 */
export const FileAdd: FC<IFileAddArea | IFileAddDragAndDrop> = ({
	variant,
	...props
}) => {
	return (
		<>
			{variant === EFileAddVariant.area && <Area {...(props as IArea)} />}
			{variant === EFileAddVariant.dragAndDrop && (
				<DragAndDrop {...(props as IDragAndDrop)} />
			)}
		</>
	)
}
