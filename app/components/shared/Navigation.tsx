import React from "react";
import Link from "next/link";
import { Grid2 } from "@mui/material";

const Navigation: React.FC = () => {

    const GridLink = ({ href }: { href: string }) => {
        return (
            <Grid2 style={{ padding: '10px', fontWeight: '600' }}>
                <Link className="nav-link" href={`/${href}`}>
                    {href}
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
            <GridLink href="resume" />
        </Grid2>
    )
}

export default Navigation;
