import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = ()=>{

    return(
        <>
            <div className="row" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid ">
                        
                        <Link to="/" exact  className="navbar-brand">
                            <h2>CI</h2>   
                        </Link>
                       
                      
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                        >
                        <div className="navbar-nav">
                            <NavLink to="/" exact activeClassName="active" className="nav-link">
                                Home
                            </NavLink>
                            
                            <NavLink to="/about" exact activeClassName="active" className="nav-link">
                               About
                            </NavLink>
                            <NavLink to="/skills" exact activeClassName="active" className="nav-link">
                               Skills
                            </NavLink>
                            <NavLink to="/projects" exact activeClassName="active" className="nav-link">
                               Projects
                            </NavLink>
                            <NavLink to="/myjourney" exact activeClassName="active" className="nav-link">
                               My Journey
                            </NavLink>
                            <a className="nav-link" target="_blank" href="https://drive.google.com/file/d/1r2J9dMD5qsNInnALN0lpuTetXxyClE_b/view?usp=drive_link">
                            Resume
                            </a>
                        </div>
                        <div style={{ width: "10%" }} />
                        </div>
                    </div>
                    </nav>
                </div>
            </div>

        </>
    )
}
export default Navbar;