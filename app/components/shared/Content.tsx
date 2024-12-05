"use client";

import store from "@/app/store/store"
import { Container } from "@mui/material"
import { Provider } from "react-redux"
import Header from "./Header";

interface ContentProps {
    children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <Header />
            <Container style={{ padding: '30px' }}>
                {children}
            </Container>
        </Provider>
    )
}

export default Content