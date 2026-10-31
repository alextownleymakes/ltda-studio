"use client";

import store from "@/app/store/store"
import { Container } from "@mui/material"
import { Provider } from "react-redux"
import { usePathname } from "next/navigation";
import Header from "./Header";

// Full-screen pages that bring their own layout: no header, no container.
const BARE_PAGES = ["/", "/projects"];

interface ContentProps {
    children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    const pathname = usePathname();
    if (BARE_PAGES.includes(pathname)) {
        return <Provider store={store}>{children}</Provider>;
    }
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