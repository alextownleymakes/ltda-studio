'use client';

import React from "react";
import { Grid2 } from "@mui/material";
import Link from "next/link";
import styles from "./Logo.module.scss"; // Importing SCSS module for styles

const Logo: React.FC = () => {
    return (
        <Grid2
            container
            className={`${styles.logoContainer}`}
        >
            <Link href="/" className={styles.logo} data-replace="alex ivy-townley">
                <span>ltda.studio</span>
            </Link>
        </Grid2>
    );
};

export default Logo;
