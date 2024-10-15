import { useEffect } from "react";
const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };
const Projects = ()=>{
    useEffect(() => {
        // Preload your images here
        preloadImage('/images/Screenshot (2).png');
        preloadImage('/images/Screenshot (4).png');
        preloadImage('/images/Screenshot (6).png');
        preloadImage('/images/Screenshot (8).png');
      }, []);
    return(
        <>
            
            <div className="row mx-5 mt-3 p-2">
                <h3 className="text-center my-3">PROJECTS</h3>
                <div className="col">
                <div className="row inner">
                    <div className="col-md-6">
                    <div className="row mt-3">
                        <div className="col-7 offset-md-2 mt-5">
                        <h5 style={{ color: "crimson" }}>FAMARKET</h5>
                        <p>
                            An Online Marketplace Web application for Farm produce and
                            By-Products.
                        </p>
                        <p>
                            Built with Html, CSS, Bootstrap, Jquery, Mysql and Laravel
                            framework.{" "}
                        </p>
                        <a
                            href="https://famarket.com.ng"
                            target="_blank"
                            className="btn btn-outline-danger me-2"
                        >
                            Live Demo
                        </a>
                        <a
                            href="https://github.com/chuks2630/famarket"
                            target="_blank"
                            className="btn btn-outline-secondary"
                        >
                            Github Repo
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-10  proj">
                        <img
                            src="/images/Screenshot (2).png"
                            alt="project pics"
                            className="img-fluid"
                        />
                        </div>
                        <div className="col-md-10  proj">
                        <img
                            src="/images/Screenshot (4).png"
                            alt="project pics"
                            className="img-fluid"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row m-5 p-2">
                <div className="col">
                <div className="row inner">
                    <div className="col-md-6">
                    <div className="row mt-3">
                        <div className="col-7 offset-md-2 mt-5">
                        <h5 style={{ color: "crimson" }}>KITCHEN COMPANION</h5>
                        <p>
                            A Recipe Collection Web application.Users and Upload and view
                            recipes.
                        </p>
                        <p>
                            Built with Html, CSS, Bootstrap, Jquery, Mysql and PHP OOP.{" "}
                        </p>
                        <a
                            href="#"
                            target="_blank"
                            className="btn btn-outline-danger me-2"
                        >
                            Live Demo
                        </a>
                        <a
                            href="https://github.com/chuks2630/kitchen-companion"
                            target="_blank"
                            className="btn btn-outline-secondary"
                        >
                            Github Repo
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-10  proj">
                        <img
                            src="/images/Screenshot (6).png"
                            alt="project pics"
                            className="img-fluid"
                        />
                        </div>
                        <div className="col-md-10  proj">
                        <img
                            src="/images/Screenshot (8).png"
                            alt="project pics"
                            className="img-fluid"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>


        </>
    )
}
export default Projects;