"use client";

import React, { useEffect } from "react";

interface AccordionProps {
    title: React.ReactElement | string;
    children: React.ReactElement;
}

const Accordion: React.FC<AccordionProps> = ({
    title,
    children,
}) => {

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        console.log('Accordion open?', open);
    }, [open]);

    return (
        <div>
            <button onClick={() => setOpen(!open)}>{title}</button>
            <div className={`accordion ${open ? 'accordion-open' : ''}`}>{children}</div>
        </div>
    )
}

export default Accordion;