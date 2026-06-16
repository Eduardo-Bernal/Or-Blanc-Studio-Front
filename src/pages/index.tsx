<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { Cinzel, Tenor_Sans } from "next/font/google";

const cinzel = Cinzel({
    weight: ["400", "500", "600", "700"],
    variable: "--font-cinzel",
    subsets: ["latin"],
});

const tenor = Tenor_Sans({
    weight: "400",
    variable: "--font-tenor",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${cinzel.variable} ${tenor.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}
=======
export { default } from "./home";
>>>>>>> 9f88828e091a5b0ff73a9b8df17b414af7b1af42
