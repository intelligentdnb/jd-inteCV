import Link from "next/link"

const Header = () => {

    return (
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/assets/mejd.jpeg" className="img-fluid" alt="me"/>
                        </div>
                        <div className="col-md-8">
                            <h3>Juan Diego MCA</h3>
                            <h5>Developer</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Doloribus quae deserunt neque qui eaque fuga soluta nemo vero aliquam harum ad, pariatur quidem quos 
                                unde placeat animi alias nam! Fugiat! </p>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;