import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'danger'
    className?: string
    icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    icon,
    ...props
}) => {

    return (
        <button className={`w-[180px] py-[14px] px-[54px] rounded-[2px] bg-[#0061DF] flex items-center gap-[8px] text-[14px] leading-[20px] text-white ${className}`} {...props} >
            {icon}
            {children}
        </button>
    )
}

export default Button