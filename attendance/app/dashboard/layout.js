
import Footer from "./studentpanel/_components/footer";
import Header from "./studentpanel/_components/header";
import SideBar from "./studentpanel/_components/sidebar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body >
                <div className="flex min-h-screen bg-gray-100">
                    <SideBar />
                    <div className="flex flex-col flex-1">
                        <Header />
                        <main className="flex-1 p-6">{children}</main>
                        <Footer />
                    </div>
                </div>

            </body>
        </html>
    );
}
