import { FC } from 'react'
import { Area, IArea } from './Variant/Area/Area'
import { DragAndDrop, IDragAndDrop } from './Variant/DragAndDrop/DragAndDrop'

export enum EFileAddVariant {
	area = 'area',
	dragAndDrop = 'dragAndDrop',
}

export interface IFileAddArea extends IArea {
	variant: `${EFileAddVariant}`
}

export interface IFileAddDragAndDrop extends IDragAndDrop {
	variant: `${EFileAddVariant}`
}

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
