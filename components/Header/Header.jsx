import Link from "next/link"

const Header = () => {

    return (
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/assets/mejd.jpeg" className="img-fluid" alt="me" style={{ borderRadius: 25, border: "1px solid black" }} />
                        </div>
                        <div className="col-md-8">
                            <h2>Juan Diego MCA</h2>
                            <h5>Software Developer</h5>
                            <p>I study to build solutions that help other people as well as myself. I enjoy learning new languages and
                                frameworks. Interested in the data, how to present it, transmit it and its respective security. I want people
                                to become financially empowered. </p>
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-body">
                                    <h5>Contact </h5>
                                    
                                    <p className="card-text">Email: <a href="mailto:juandiarts@gmail.com" style={{ color: "white", }}>juandiarts@gmail.com</a></p>
                                    <p className="card-text">Tel: <a href="tel:+5493764410695" style={{ color: "white", }}>+54 9 3764 41 0695</a>   | Posadas, Misiones, Argentina.</p>
                                    <p className="card-text"><a href="https://www.linkedin.com/in/juandimca" target="_blank" style={{ color: "white", }}>linkedin.com/in/juandimca</a> | <a href="https://github.com/intelligentdnb" style={{ color: "white", }}>github.com/intelligentdnb</a></p>
                                    <b>Languagues:</b> <p>English advanced <a href="https://www.efset.org/cert/UhnwFb" style={{ color: "white", }} target="_blank">C1 certificate.</a> | Spanish native.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;