function SingleEmpView() {

    return (
        <div className="">
            <div className="body ">
                <nav className="p-2">
                    <div className="d-flex justify-content-between align-items-center container">
                        <div>
                            <img
                                src="https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000"
                                style={{ width: 70, height: 70, zIndex: 1 }}
                                alt=""
                            />
                            <span className="fs-3 text-center fw-bold  text-white  p-2">UMS</span>
                        </div>
                        <div>
                            <span className="px-4">
                                <a className=" text-decoration-none text-white fs-6" href="">
                                    Home
                                </a>
                            </span>
                            <span className="px-4">
                                <a className=" text-decoration-none text-white fs-6" href="">
                                    File
                                </a>
                            </span>
                            <span className="px-4">
                                <a className=" text-decoration-none text-white fs-6" href="">
                                    About
                                </a>
                            </span>
                            <span className="px-4">
                                <a className=" text-decoration-none text-white fs-6" href="">
                                    Contact
                                </a>
                            </span>
                            <button className="bttn2">SIGIN IN</button>
                            <a
                                className="btn "
                                data-bs-toggle="offcanvas"
                                href="#offcanvasExample"
                                role="button"
                                aria-controls="offcanvasExample"
                            >
                                <i className="fa fa-bars" style={{ fontSize: 26 }} />
                            </a>
                            <div
                                className="offcanvas offcanvas-start"
                                tabIndex={-1}
                                id="offcanvasExample"
                                aria-labelledby="offcanvasExampleLabel"
                            >
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                                        {" "}
                                        <div className="">
                                            <img
                                                src="https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000"
                                                style={{ width: 70, height: 70, zIndex: 1 }}
                                                alt=""
                                            />
                                            <span
                                                className="fs-3 text-center fw-bold   p-2 "
                                                style={{ color: "black" }}
                                            >
                                                UMS
                                            </span>
                                        </div>
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close text-reset"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="offcanvas-body">
                                    <div id="resetbttn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="position-absolute top-0 start-50 translate-middle-x  icon">
                    <i
                        className="far fa-user-circle  shadow p-3 mb-5 bg-body rounded "
                        style={{ fontSize: 200 }}
                    />
                </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle icon">
                <div
                    className="fs-1 fw-bold text-dark pt-5 text-center"
                    id="singleViewData"
                />
            </div>
        </div>

    )

}
export default SingleEmpView