import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Portfolio from "../components/Portfolio/Portfolio";
import Experience from "../components/SecondSection/Experience";
import Skills from "../components/SecondSection/Skills";

const Index = () => (
    <Layout>
        <Header />
        <div className="row py-2">
            <Skills />
            <Experience />
        </div>
        {/**Portfolioo */}
        <Portfolio/>
        <Footer/>
    </Layout>
)

export default Index;