import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {

    return(
        <>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/resume">RESUME</Link>
        </>
    )
}

export default Navigation;