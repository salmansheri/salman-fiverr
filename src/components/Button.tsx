'use client';

interface ButtonProps {
    label: string; 
    disabled?: boolean; 
    onClick?: () => void; 
    hasScrolled?: boolean; 
    
}

const Button: React.FC<ButtonProps>  = ({
    label,
    disabled,
    onClick, 
    hasScrolled
}) => {
    return(
        <button  className={` py-2 px-5 rounded-md border-4 boder-solid  cursor-pointer bg-transparent hover:bg-green hover:border-green disabled:cursor-not-allowed disabled:bg-neutral-900 ${hasScrolled ? 'border-black': 'border-white'}
        ${hasScrolled ? "text-black" : "text-white"}
            
        `}>{label}</button>
    )
}

export default Button; 