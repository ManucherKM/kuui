// Types
import type { FC, FormHTMLAttributes } from 'react'

/** Form component interface. */
export interface IForm extends FormHTMLAttributes<HTMLFormElement> {}

/**
 * It is a classic HTML "form" tag. Below you can see an example of its use.
 *
 * @example
 * 	;<Form>
 * 		<Input />
 * 	</Form>
 */
export const Form: FC<IForm> = ({ children, ...props }) => {
	return <form {...props}>{children}</form>
}
