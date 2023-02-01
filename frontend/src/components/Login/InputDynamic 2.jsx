import React from 'react'

export default function InputDynamic({type, name, id, placeholder, value, onChange}) {
  return (
    <input
    className="Login-form-input"
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
  )
}
