"use client";

import React from "react";
import { Grid2 } from "@mui/material";
import Text from "../components/shared/Text";

export default function Projects() {


  return (
    <main>
      <Grid2 container spacing={6}>
        <Grid2 size={12}>
          <Text type={'h1'}>projects</Text>
          <Text type={'p'} className="color-dark-1 dark:color-light-1">coming soon</Text>
        </Grid2>
      </Grid2>
    </main>
  );
}
