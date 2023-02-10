import "bootswatch/dist/cosmo/bootstrap.min.css";
import Head from 'next/head';
import "../global.css"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>JDMCA CV</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
};

export default MyApp;