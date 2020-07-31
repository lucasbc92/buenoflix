import React from 'react';

const FormField = ({label, type, value, name, onChange}) => {
    return (
        <label>
        {label}
        <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
        />
        </label>
    )
}

export default FormField;