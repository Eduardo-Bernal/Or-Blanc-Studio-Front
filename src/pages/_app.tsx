import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {ToastContainer} from "react-toastify";

import type { AppProps } from "next/app";
import {AuthProvider} from "@/pages/api/AuthContext";
import {useEffect} from "react";
// import('bootstrap/js/dist/js/bootstrap.bundle.min.js');

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap.bundle.js');
    })

  return (
      <AuthProvider>
          <ToastContainer />
        <Component {...pageProps} />
      </AuthProvider>
  );
}