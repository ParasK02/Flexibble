import { MouseEventHandler } from "react";
import Image from "next/image";

type Props = {
    title: string;
    leftIcon?: string | null;
    rightIcon?: string | null;
    handleClick?: MouseEventHandler;
    isSubmitting?: boolean;
    type?: 'button' | 'submit';
    bgColour?: string;
    textColour?: string;
}

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, bgColour, textColour }: Props) => {
    return (
        <button
            type={type || 'button'}
            disabled={isSubmitting}
            className={`flexCenter gap-3 px-4 py-3 
            ${isSubmitting ? 'bg-black/50' : bgColour || 'bg-primary-purple'} rounded-xl text-sm font-medium max-md:w-full 
            ${textColour || 'text-white'}
            `}
            onClick={handleClick}
        >
            {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left" />}
            {title}
            {rightIcon && <Image src={rightIcon} width={14} height={14} alt="right" />}

        </button>
    )
}

export default Button