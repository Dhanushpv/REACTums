import { useState } from "react";

function Admin() {
    return (
        <>
            <nav className="p-3">
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
                        <span className="px-4">
                            <img
                                src="https://img.icons8.com/?size=100&id=STOBCZbtLToI&format=png&color=000000"
                                style={{ width: 50, height: 50 }}
                                alt=""
                            />
                        </span>
                    </div>
                </div>
            </nav>
            <div className="d-flex ">
                <div className="blanck">
                    <div className=" text-center pt-5">
                        <img
                            src="https://img.icons8.com/?size=100&id=492ILERveW8G&format=png&color=000000"
                            style={{ width: 60, height: 60 }}
                            alt=""
                        />
                    </div>
                    <div className=" text-center pt-5">
                        <img
                            onclick="add()"
                            src="https://img.icons8.com/?size=100&id=44535&format=png&color=000000"
                            style={{ width: 60, height: 60 }}
                            alt=""
                        />
                        <br />
                    </div>
                    <div className=" text-center pt-5">
                        <img
                            src="https://img.icons8.com/?size=100&id=21103&format=png&color=000000"
                            style={{ width: 60, height: 60 }}
                            alt=""
                        />
                    </div>
                    <div className=" text-center pt-5">
                        <img
                            onclick="logout()"
                            src="https://img.icons8.com/?size=100&id=vcvBMGD6n6ZL&format=png&color=FFFFFF"
                            style={{ width: 60, height: 60 }}
                            alt=""
                        />
                    </div>
                </div>
                <div className=" user">
                    <table className="bg-white">
                        <thead>
                            <tr className="table-head">
                                <th>Photos</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>phoneno</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            <tr></tr>
                        </thead>
                        <tbody id="userTable"></tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default Admin