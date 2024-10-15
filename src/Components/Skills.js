import { useEffect } from "react";
const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };
const Skills= ()=>{
    useEffect(() => {
        // Preload your images here
        preloadImage('/images/file-type-html.svg');
        preloadImage('/images/file-type-css.svg');
        preloadImage('/images/javascript-js.svg');
        preloadImage('/images/php.svg');
        preloadImage('/images/sql-database-generic.svg');
        preloadImage('/images/bootstrap-plain-wordmark.svg');
        preloadImage('/images/jquery-plain-wordmark.svg');
        preloadImage('/images/react.svg');
        preloadImage('/images/laravel.svg');
        preloadImage('/images/api.svg');
        preloadImage('/images/mysql-original-wordmark.svg');
        preloadImage('/images/mongodb-original-wordmark.svg');
        preloadImage('/images/postman.svg');
        preloadImage('/images/vs-code.svg');
        preloadImage('/images/github.svg');
        preloadImage('/images/slack-icon.svg');
        preloadImage('/images/trello.svg');
      }, []);
    return(
        <>
            <div className="row mt-4">
                <div className="col">
                    <h3 className="text-center">SKILLS</h3>
                    <div className="row mt-4 justify-content-center">
                    <div className="col-8 offset-md-1">
                        <div className="row p-2 text-center">
                        <div className="col-md-2">
                            <img src="/images/file-type-html.svg" width={50} alt="html icon" />
                            <br />
                            <small>HTML</small>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/file-type-css.svg" width={50} alt="css icon" />
                            <br />
                            <small>CSS</small>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/javascript-js.svg" width={50} alt="Js icon" />
                            <br />
                            <small>JAVASCRIPT</small>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/php.svg" width={50} alt="Php icon" />
                            <br />
                            <small>PHP</small>
                        </div>
                        <div className="col-md-2">
                            <img
                            src="/images/sql-database-generic.svg"
                            width={40}
                            alt="Sql icon"
                            />
                            <br />
                            <small>SQL</small>
                        </div>
                        </div>
                        <div className="row p-2 text-center my-3">
                        <div className="col-md-2">
                            <img
                            src="/images/bootstrap-plain-wordmark.svg"
                            width={50}
                            alt="bootstrap icon"
                            />
                            <br />
                            <small>BOOTSTRAP</small>
                        </div>
                        <div className="col-md-2">
                            <img
                            src="/images/jquery-plain-wordmark.svg"
                            width={50}
                            alt="jquery icon"
                            />
                            <br />
                            <small>JQUERY</small>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/react.svg" width={60} alt="react icon" />
                            <br />
                            <small>REACT</small>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/laravel.svg" width={50} alt="laravel icon" />
                            <br />
                            <small>LARAVEL</small>
                        </div>
                        <div className="col-md-2">
                            <img
                            src="/images/api.svg"
                            width={50}
                            alt="Api icon"
                            className="bg-light"
                            />
                            <br />
                            <small>API</small>
                        </div>
                        </div>
                        <div className="row p-2 text-center my-2">
                        <div className="col-md-2">
                            <img
                            src="/images/mysql-original-wordmark.svg"
                            width={50}
                            alt="mysql icon"
                            />
                            <br />
                            <small>MYSQL</small>
                        </div>
                        <div className="col-md-2">
                            <img
                            src="/images/mongodb-original-wordmark.svg"
                            width={50}
                            alt="MongoDB icon"
                            />
                            <br />
                            <small>MongoDB</small>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/postman.svg" width={50} alt="postman icon" />
                            <br />
                            <small>MongoDB</small>
                        </div>
                        <div className="col-md-2">
                            <img
                            src="/images/mysqlworkbench.svg"
                            width={50}
                            alt="sql workbench icon"
                            />
                            <br />
                            <small>MYSQL WORKBENCH</small>
                        </div>
                        <div className="col-md-2">
                            <img src="/images/vs-code.svg" width={50} alt="vs-code icon" />
                            <br />
                            <small>VS CODE</small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2 mt-3">
                            <img
                            src="/images/github.svg"
                            width={50}
                            alt="github icon"
                            className="bg-light"
                            style={{ borderRadius: "20%" }}
                            />
                            <br />
                            <small>GIT</small>
                        </div>
                        <div className="col-md-2 mt-3">
                            <img src="/images/slack-icon.svg" width={50} alt="slack icon" />
                            <br />
                            <small>SLACK</small>
                        </div>
                        <div className="col-md-2 mt-3">
                            <img src="/images/trello.svg" width={50} alt="trello icon" />
                            <br />
                            <small>TRELLO</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Skills;