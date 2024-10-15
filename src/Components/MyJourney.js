
const MyJourney = ()=>{

    return(
        <>
            <div className="row">
                <h3 className="text-center my-4">MY JOURNEY</h3>
                <div className="col-md-5">
                    <div>
                    <img src="images/web-developer.svg" alt="" />
                    </div>
                </div>
                <div
                    className="col-md-5"
                    style={{ minHeight: 500, borderLeft: "1px solid rgba(255, 255, 255, 0.2)" }}
                >
                    <div className="row p-2" style={{ minHeight: 200 }}>
                    <h5 style={{ color: "crimson" }}>Experience</h5>
                    <ul>
                        <li>
                        2024-Present Freelancer
                        <ul>
                            <li>Working On a Real-time Messaging Application</li>
                            <li>
                            Created a Responsive Web Application Using Laravel Framework.
                            </li>
                            <li>Created a Responsive Web Application implementing PHP OOP. </li>
                        </ul>
                        </li>
                        <li>
                        Internship
                        <ul>
                            <li>Built 3 Web Applications From end to end.</li>
                            <li>Collaborated in 2 projects.</li>
                            <li>
                            Learned Object-oriented Programming(OOP) And Model View
                            Controller(MVC) Methodologies.
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <div
                    className="row p-2"
                    style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                        minHeight: 200
                    }}
                    >
                    <h5 style={{ color: "crimson" }}>Education</h5>
                    <ul>
                        <li>
                        2022 - 2024
                        <ul>
                            <li>
                            Full-stack web Application Bootcamp at Moat Academy Ikeja, Lagos,
                            Nigeria.
                            </li>
                            <li>
                            Full-stack web Development Online Course Certification from
                            Codecademy
                            </li>
                        </ul>
                        </li>
                        <li>
                        2017 - 2022
                        <p>
                            B.Eng (Civil Engineering)
                            <br />
                            Anambra State University, Nigeria.
                        </p>
                        </li>
                        <li>
                        2011 - 2017
                        <p>High School</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MyJourney;