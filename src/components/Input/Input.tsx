import React from 'react'; 

interface InputProps {
    isLarge?: boolean; 
    type?: string; 
    placeholder: string; 
    className?: string;
}

const Input: React.FC<InputProps> = ({
    isLarge, 
    type, 
    placeholder, 
    className
}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} />
  )
}

export default Input