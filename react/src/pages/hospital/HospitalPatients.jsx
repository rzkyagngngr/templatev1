
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HospitalPatients = () => {
    const navigate = useNavigate();

    const handleProfileClick = (e) => {
        e.preventDefault();
        navigate('/apps/hospital/patient-profile');
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
                                    <li className="breadcrumb-item active">Patients</li>
                                </ol>
                            </div>
                            <h4 className="page-title">All Patients</h4>
                        </div>
                    </div>
                </div>
                {/* end page title end breadcrumb */}

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Patient Name</th>
                                                <th>Age</th>
                                                <th>ID</th>
                                                <th>Address</th>
                                                <th>Mobile No</th>
                                                <th>Last Visit</th>
                                                <th>Status</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><a href="#" onClick={handleProfileClick}><img src="/assets/images/users/user-10.jpg" alt="" className="thumb-sm rounded-circle me-2" />Donald Gardner</a></td>
                                                <td>36</td>
                                                <td>#1236</td>
                                                <td>B28 University Street US</td>
                                                <td>+123456789</td>
                                                <td>18/07/2019</td>
                                                <td><span className="badge badge-soft-success">Approved</span></td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" onClick={handleProfileClick}><img src="/assets/images/users/user-9.jpg" alt="" className="thumb-sm rounded-circle me-2" />Keith Jacobson</a></td>
                                                <td>48</td>
                                                <td>#1236</td>
                                                <td>B28 University Street US</td>
                                                <td>+123456789</td>
                                                <td>18/07/2019</td>
                                                <td><span className="badge badge-soft-success">Approved</span></td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" onClick={handleProfileClick}><img src="/assets/images/users/user-9.jpg" alt="" className="thumb-sm rounded-circle me-2" />Greg Crosby</a></td>
                                                <td>27</td>
                                                <td>#1236</td>
                                                <td>B28 University Street US</td>
                                                <td>+123456789</td>
                                                <td>18/07/2019</td>
                                                <td><span className="badge badge-soft-success">Approved</span></td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" onClick={handleProfileClick}><img src="/assets/images/users/user-8.jpg" alt="" className="thumb-sm rounded-circle me-2" />Fred Godina</a></td>
                                                <td>22</td>
                                                <td>#1236</td>
                                                <td>B28 University Street US</td>
                                                <td>+123456789</td>
                                                <td>18/07/2019</td>
                                                <td><span className="badge badge-soft-success">Approved</span></td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" onClick={handleProfileClick}><img src="/assets/images/users/user-7.jpg" alt="" className="thumb-sm rounded-circle me-2" />Peggy Doe</a></td>
                                                <td>51</td>
                                                <td>#7851</td>
                                                <td>B28 University Street US</td>
                                                <td>+123456789</td>
                                                <td>20/07/2019</td>
                                                <td><span className="badge badge-soft-warning">Panding</span></td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" onClick={handleProfileClick}><img src="/assets/images/users/user-8.jpg" alt="" className="thumb-sm rounded-circle me-2" />Jennifer Doss</a></td>
                                                <td>18</td>
                                                <td>#3654</td>
                                                <td>B28 University Street US</td>
                                                <td>+123456789</td>
                                                <td>19/07/2019</td>
                                                <td><span className="badge badge-soft-warning">Panding</span></td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-16"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-16"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-outline-light btn-sm px-4 " onClick={() => navigate('/apps/hospital/add-patient')}>+ Add New</button>
                                    </div>
                                    <div className="col-auto">
                                        <nav aria-label="...">
                                            <ul className="pagination pagination-sm mb-0">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                                </li>
                                                <li className="page-item"><a class="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalPatients;
