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
                        <a href="https://github.com/chuks2630" className="icon">
                        <img
                            src="/images/github_3291695.png"
                            alt="github icon"
                            width={50}
                            style={{ borderRadius: "50%", background: "white" }}
                            className="me-2 p-1"
                        />
                        </a>
                        <a href="www.linkedin.com/in/chukwuma-ike-43014227b" className="icon">
                        <img
                            src="/images/linkedin-original.svg"
                            alt="linkedin icon"
                            width={50}
                            className="me-2 p-1"
                        />
                        </a>
                        <a href="https://www.instagram.com/chuks_meyor/profilecard/?igsh=MTRtc2t1aXc2bjN6cA==" className="icon">
                        <img
                            src="/images/instagram.svg"
                            alt="instagram icon"
                            width={40}
                            className="me-2"
                        />
                        </a>
                        <a href="mailto:tstorm2630@gmail.com" className="icon">
                        <img
                            src="/images/gmail.svg"
                            alt="gmail icon"
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