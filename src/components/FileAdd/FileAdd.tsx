import { FC } from 'react'
import { Area, IArea } from './Variant/Area/Area'
import { DragAndDrop, IDragAndDrop } from './Variant/DragAndDrop/DragAndDrop'

export enum EFileAddVariant {
	area = 'area',
	dragAndDrop = 'dragAndDrop',
}

export type TFileAdd = IArea & IDragAndDrop

export interface IFileAdd extends TFileAdd {
	variant: `${EFileAddVariant}`
}

export const FileAdd: FC<IFileAdd> = ({ variant, ...props }) => {
	return (
		<>
			{variant === EFileAddVariant.area && <Area {...props} />}
			{variant === EFileAddVariant.dragAndDrop && <DragAndDrop {...props} />}
		</>
	)
}
