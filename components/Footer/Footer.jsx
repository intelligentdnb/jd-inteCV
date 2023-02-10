import Link from "next/link";

const Footer = () => {

    return (
        <footer className="bg-dark text-light text-center">
            <div className="container p-4" style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>JD MCA Portfolio</h6>
                <Link href="/" style={{textDecoration: "none"}}>go top</Link>
                <p>2022 - {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;