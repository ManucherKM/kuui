import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'

interface IRadio extends InputHTMLAttributes<HTMLInputElement> {}

const Radio: FC<IRadio> = ({ ...props }) => {
	const styles = clsx([])

	return <input type="radio" className={styles} {...props} />
}

export default Radio
