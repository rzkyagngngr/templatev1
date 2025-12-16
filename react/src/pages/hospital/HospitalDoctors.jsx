
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HospitalDoctors = () => {
    const navigate = useNavigate();

    const handleProfileClick = (e) => {
        e.preventDefault();
        navigate('/apps/hospital/doctor-profile');
    };

    return (
        <div className="page-content-tab">
            <div className="container-fluid">
                {/* Page-Title */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="float-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Metrica</a></li>
                                    <li className="breadcrumb-item"><a href="#">Hospital</a></li>
                                    <li className="breadcrumb-item active">All Doctors</li>
                                </ol>
                            </div>
                            <h4 className="page-title">All Doctors</h4>
                        </div>
                    </div>
                </div>
                {/* end page title end breadcrumb */}

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-2.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Wendy Keen</h5>
                                <p className="text-muted mb-1">MD Orthopedic</p>
                                <p className="text-center font-14">4 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-4.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Helen White</h5>
                                <p className="text-muted mb-1">MS Cardiology</p>
                                <p className="text-center font-14">3 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-5.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Thomas Fant</h5>
                                <p className="text-muted mb-1">MD Neurology</p>
                                <p className="text-center font-14">10 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-6.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Justin Williams</h5>
                                <p className="text-muted mb-1">MS Psychology</p>
                                <p className="text-center font-14">4 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-6.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Wendy Keen</h5>
                                <p className="text-muted mb-1">MD Orthopedic</p>
                                <p className="text-center font-14">4 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-1.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Helen White</h5>
                                <p className="text-muted mb-1">MS Cardiology</p>
                                <p className="text-center font-14">3 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-2.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Thomas Fant</h5>
                                <p className="text-muted mb-1">MD Neurology</p>
                                <p className="text-center font-14">10 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-5.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Justin Williams</h5>
                                <p className="text-muted mb-1">MS Psychology</p>
                                <p className="text-center font-14">4 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="text-end">
                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                </div>
                                <img src="/assets/images/users/dr-2.jpg" alt="user" height="100" className="rounded-circle mt-n3" />
                                <h5 className="mb-1">Dr.Wendy Keen</h5>
                                <p className="text-muted mb-1">MD Orthopedic</p>
                                <p className="text-center font-14">4 years experience in Apollo Hospital</p>
                                <button type="button" className="btn btn-sm btn-de-primary" onClick={handleProfileClick}>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalDoctors;
