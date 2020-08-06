import React, { FunctionComponent, TextareaHTMLAttributes } from 'react'

import './styles.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label: string 
}

const Textarea: FunctionComponent<TextareaProps> = ({label, name, ...props }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...props} />
        </div>
    )
}



export default Textarea;