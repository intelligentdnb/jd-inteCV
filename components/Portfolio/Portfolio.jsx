import { projects } from "../../profile";
import Link from "next/link";

const Portfolio = () => {

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image, link }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={image} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body bg-dark text-light" >
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href={link} className="text-light">Know more</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-">
                        <Link href="/portfolio" className="btn btn-outline-light">More Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;