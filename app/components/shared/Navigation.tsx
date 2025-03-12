import React from "react";
import Link from "next/link";
import { Grid2 } from "@mui/material";

const Navigation: React.FC = () => {

    const GridLink = ({ href, title }: { href: string, title?: string }) => {
        return (
            <Grid2 style={{ padding: '10px', fontWeight: '600' }}>
                <Link target={title && '_blank'} className="nav-link" href={`/${href}`}>
                    {title ?? href}
                </Link>
            </Grid2>
        )
    }

    return (
        <Grid2 container>
            <GridLink href="" />
            <GridLink href="about" />
            <GridLink href="contact" />
            <GridLink href="blog" />
            <GridLink href="projects" />
            <GridLink title="resume" href="alex-ivy-townley-full-stack-engineer-resume.pdf" />
        </Grid2>
    )
}

export default Navigation;
