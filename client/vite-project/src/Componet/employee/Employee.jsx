import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Employee() {
    return (
        <>

        <div className='employee_body'>
            <nav className="p-2 employee_nav">
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
                        <button className="em_bttn2">SIGIN IN</button>
                        <span className="px-4">
                            <img
                                onclick="main_view()"
                                src="https://img.icons8.com/?size=100&id=GKa451kLBjuW&format=png&color=000000"
                                alt=""
                                style={{ width: 40 }}
                            />
                        </span>
                        <span className="">
                            <img
                                onclick="singleViewsignout()"
                                src="https://cdn-icons-png.freepik.com/256/10024/10024016.png?uid=R94193599&ga=GA1.1.1087699444.1718933879&semt=ais_hybrid"
                                alt=""
                                style={{ width: 40 }}
                            />
                        </span>
                    </div>
                </div>
            </nav>
            <span className="employee_welcom position-absolute top-50 start-50 translate-middle maintext_container pb-5">
                WELLCOME TO
            </span>
            <div className="console-container welcome2 position-absolute top-50 start-50 translate-middle pt-5 fs-2 text-white fw-bold">
                <span id="text" />
            </div>
        </div>



        </>
    )
}
export default Employee