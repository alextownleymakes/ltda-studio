import React from "react";

interface TextProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({type, className = '', style, children}) => {

    const TextElement = type;

    return (
        <TextElement style={style} className={`${className} `}>{children}</TextElement>
    )
}

export default Text;
