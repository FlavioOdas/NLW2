import React, { FunctionComponent, InputHTMLAttributes } from 'react'

import './styles.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string 
}

const Input: FunctionComponent<InputProps> = ({label, name, ...props }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...props} />
        </div>
    )
}



export default Input;