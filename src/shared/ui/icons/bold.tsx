import type { ComponentPropsWithRef, ReactNode } from 'react'
import cn from 'clsx'

export function Bold(props: ComponentPropsWithRef<'svg'>): ReactNode {
    const { className, ...rest } = props

    return (
        <svg
            className={cn('fill-current', className)}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            {...rest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 3C5.94772 3 5.5 3.44772 5.5 4V20C5.5 20.5523 5.94772 21 6.5 21H15.5C16.8261 21 18.0979 20.4732 19.0355 19.5355C19.9732 18.5979 20.5 17.3261 20.5 16C20.5 14.6739 19.9732 13.4021 19.0355 12.4645C18.706 12.1349 18.3352 11.8561 17.9352 11.6331C17.9691 11.6011 18.0025 11.5686 18.0355 11.5355C18.9732 10.5979 19.5 9.32608 19.5 8C19.5 6.67392 18.9732 5.40215 18.0355 4.46447C17.0979 3.52678 15.8261 3 14.5 3H6.5ZM14.5 11C15.2956 11 16.0587 10.6839 16.6213 10.1213C17.1839 9.55871 17.5 8.79565 17.5 8C17.5 7.20435 17.1839 6.44129 16.6213 5.87868C16.0587 5.31607 15.2956 5 14.5 5H7.5V11H14.5ZM7.5 13V19H15.5C16.2956 19 17.0587 18.6839 17.6213 18.1213C18.1839 17.5587 18.5 16.7956 18.5 16C18.5 15.2044 18.1839 14.4413 17.6213 13.8787C17.0587 13.3161 16.2956 13 15.5 13H7.5Z"
                fill=""
            />
        </svg>
    )
}
