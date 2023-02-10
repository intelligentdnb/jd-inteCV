import Link from "next/link"
import Layout from "../components/Layout/Layout"

const custom404 = () => {

    return (
        <Layout>
            <div className="text-center">
                <h1>404</h1>
                <p>this page in my CV does not exists. Return to
                    my  <Link href="/">webpage</Link>
                </p>
            </div>
        </Layout>
    )
}

export default custom404;