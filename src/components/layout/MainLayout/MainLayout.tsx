import { ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";

type Props = {
    children: ReactNode;
};

export function MainLayout({ children }: Props) {
    return (
    <>
        <Navbar />

        <main>{children}</main>
    </>
    );
}