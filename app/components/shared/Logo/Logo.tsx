'use client';

import React from "react";
import Link from "next/link";
import styles from "./Logo.module.scss"; // Importing SCSS module for styles

const Logo: React.FC = () => {
    return (

            <Link href="/" className={styles.logo} data-replace="alex ivy-townley">
                <span>ltda.studio</span>
            </Link>
    );
};

export default Logo;
