import Footer from "./studentpanel/_components/footer";
import Header from "./studentpanel/_components/header";
import SideBar from "./studentpanel/_components/sidebar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body

            >
                <Header />

                <SideBar />


                {children}
                <Footer />
            </body>
        </html>
    );
}
