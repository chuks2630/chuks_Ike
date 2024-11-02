const About = ()=>{

    return(
        <>
            <div className="row justify-content-around">
                <h1 className="text-center my-4" style={{ color: "white" }}>
                    About
                </h1>
                <div className=" col-md-5 mt-5">
                    <div>
                    <p className="about">
                        Hi there!, I'm Chuks Ike, a passionate <em>full-stack developer</em> with a focus
                        on building efficient and scalable web applications.<br/> I love turning
                        complex challenges into simple, intuitive solutions, whether it's
                        creating seamless user interfaces or building robust backend systems.
                        <br />
                        <br />
                        I thrive on problem-solving and enjoy optimizing both frontend and
                        backend processes to deliver high-quality, performant web applications.
                        Always curious and eager to learn, I keep myself updated with the latest
                        industry trends and enjoy experimenting with new tools and technologies.
                        <br />
                        <br />
                        When I'm not coding, I'm probably watching a Football Match,
                        My hobbies are Litsening to Music, Litsening to a Podcast
                        and work on personal development. Let's collaborate and
                        bring creative ideas to life!
                    </p>
                    </div>
                </div>
                <div className=" col-md-5 mt-5">
                    <img src="/images/chuks_copy.png" className="img-fluid" />
                </div>
            </div>

        </>
    )
}

export default About;