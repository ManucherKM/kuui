import type { FC, FormHTMLAttributes } from 'react'

export interface IForm extends FormHTMLAttributes<HTMLFormElement> {}

export const Form: FC<IForm> = ({ children, ...props }) => {
	return <form {...props}>{children}</form>
}
