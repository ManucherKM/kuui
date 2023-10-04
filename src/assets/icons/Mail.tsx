// Types
import type { FC, SVGProps } from 'react'

/** Allowable Mail icon types. */
export type TMail = Omit<SVGProps<SVGSVGElement>, 'viewBox'>

/** Mail component interface. */
export interface IMail extends TMail {}

/** The Mail component is an svg mail icon. */
export const Mail: FC<IMail> = props => {
	return (
		<svg viewBox="0 0 60 48" {...props}>
			<path
				d="M54 0H6C2.7 0 0.03 2.7 0.03 6L0 42C0 45.3 2.7 48 6 48H54C57.3 48 60 45.3 60 42V6C60 2.7 57.3 0 54 0ZM54 12L30 27L6 12V6L30 21L54 6V12Z"
				fill="currentColor"
			/>
		</svg>
	)
}
