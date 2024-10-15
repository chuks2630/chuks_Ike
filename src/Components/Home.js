import { ReactTyped } from "react-typed";
const Home = ()=>{

    return(
        <>
            <div className="row mt-5 justify-content-center">
                <div className="col-md-5 mt-5">
                    <div className="text-center mt-5 intro">
                    <h1>
                        Hi!<span className="wave">👋</span>  I'm Chuks Ike</h1>
                    <h1>
                        I'm a<b>{" "}
                        <ReactTyped
                        strings={["Full-Stack Developer", "Software Developer", "Freelancer" ]}
                        typeSpeed={120}
                        loop
                        backSpeed={30}
                        cursorChar="|"
                        showCursor={true}
                        />
                        </b>
                    </h1>
                    <div className="mt-5">
                        <a href="" className="icon">
                        <img
                            src="/images/github_3291695.png"
                            alt=""
                            width={50}
                            style={{ borderRadius: "50%", background: "white" }}
                            className="me-2 p-1"
                        />
                        </a>
                        <a href="" className="icon">
                        <img
                            src="/images/linkedin-original.svg"
                            alt=""
                            width={50}
                            className="me-2 p-1"
                        />
                        </a>
                        <a href="" className="icon">
                        <img
                            src="/images/instagram.svg"
                            alt="instagram icon"
                            width={40}
                            className="me-2"
                        />
                        </a>
                        <a href="" className="icon">
                        <img
                            src="/images/gmail.svg"
                            alt=""
                            width={50}
                            style={{ borderRadius: "50%", background: "white" }}
                            className="me-2"
                        />
                        </a>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
} 

export default Home;