import React, { FunctionComponent, SelectHTMLAttributes } from 'react'

import './styles.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string 
    options: Array<{
        value: string
        label: string
    }>
}

const Select: FunctionComponent<SelectProps> = ({label, name, options, ...props }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...props} >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}



export default Select;