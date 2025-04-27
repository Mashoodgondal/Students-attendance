import SideBar from "./studentpanel/_components/sidebar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body

            >
                <SideBar />
                {children}
            </body>
        </html>
    );
}
