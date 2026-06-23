
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { Cinzel, Tenor_Sans } from "next/font/google";
import {ToastContainer} from "react-toastify";

export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/home',
            permanentRedirect: false
        }
    }
}


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
            <ToastContainer />

            <Component {...pageProps} />
        </main>
    );
}

