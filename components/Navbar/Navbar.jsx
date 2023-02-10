import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" href="/">JD MCA</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="/portfolioPage">
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://github.com/intelligentdnb" target="_blank">GitHub</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://www.linkedin.com/in/juandimca/" target="_blank">Linkedin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
