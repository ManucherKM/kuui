// Types
import type { FC, HTMLAttributes } from 'react'

// Styles
import classes from './VKAuth.module.scss'

// Utils
import clsx from 'clsx'
import { getTabIndex } from '@/utils/getTabIndex'

/** Allowable VKAuth types. */
export type TVKAuth = Omit<HTMLAttributes<HTMLDivElement>, 'tabIndex'>

/** Enumeration of possible VKAuth variants. */
export enum EVKAuth {
	small = 'small',
	large = 'large',
}

/** VKAuth component interface. */
export interface IVKAuth extends TVKAuth {
	variant?: `${EVKAuth}`
}

/**
 * The VKAuth component is the appearance of a button for authorization through
 * VKAuth.
 *
 * @example
 * 	import { useEffect } from 'react'
 *
 * 	interface IParams {
 * 		client_id: string
 * 		redirect_uri: string
 * 		display: string
 * 	}
 *
 * 	function yourComponent() {
 * 		let params = {} as IParams
 *
 * 		async function clickHandler() {
 * 			params = {
 * 				client_id: 'YOUR_CLIENT_ID',
 * 				redirect_uri: 'YOUR_REDIRECT_URI',
 * 				display: 'YOUR_DISPLAY',
 * 			}
 *
 * 			window.location.href = `https://oauth.vk.com/authorize?client_id=${params.client_id}&display=${params.display}&redirect_uri=${params.redirect_uri}&scope=email&response_type=code&v=5.131`
 * 		}
 *
 * 		useEffect(() => {
 * 			if (window.location.href.includes('?code=')) {
 * 				const result = {
 * 					...params,
 * 					client_secret: 'YOUR_SECRET',
 * 					code: window.location.href.split('=')[1],
 * 				}
 *
 * 				console.log(result)
 * 			}
 * 		}, [window.location.href])
 *
 * 		return <VKAuth onClick={clickHandler} />
 * 	}
 */
export const VKAuth: FC<IVKAuth> = ({ variant = EVKAuth.small, ...props }) => {
	const styles = clsx([classes.vkAuth, classes[variant]])

	return (
		<div className={styles} tabIndex={getTabIndex()} {...props}>
			<svg
				className={classes.vkLogo}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="none"
			>
				<rect rx="4" fill="#0077FF" />
				<path
					d="M10.7839 14.495C4.61225 14.5613 3.22886 8.99835 3.30862 6.20862H5.61885C5.65845 10.2947 7.64305 11.697 8.6304 11.8874V6.20862H10.7839V9.41226C12.632 9.101 13.6497 7.14681 13.9274 6.20862H16.0561C15.6205 8.42054 13.9879 9.85652 13.2261 10.298C15.1799 11.0265 16.2899 13.3996 16.6007 14.495H14.2162C13.5759 12.3295 11.6612 11.5784 10.7839 11.4735V14.495Z"
					fill="white"
				/>
			</svg>

			{variant === EVKAuth.large && (
				<span className={classes.title}>Continue with VK</span>
			)}
		</div>
	)
}
