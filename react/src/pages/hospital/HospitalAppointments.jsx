
import React from 'react';

const HospitalAppointments = () => {
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
                                    <li className="breadcrumb-item active">Appointments</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Appointments</h4>
                        </div>
                    </div>
                </div>
                {/* end page title end breadcrumb */}

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body mb-n3">
                                <button type="button" className="btn btn-de-primary btn-sm px-4 mt-0 mb-3" data-bs-toggle="modal" data-animation="bounce" data-bs-target=".bs-example-modal-lg">Add New Appointment</button>
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Patient Name</th>
                                                <th>Age</th>
                                                <th>Department</th>
                                                <th>Doctor Name</th>
                                                <th>Appo. Date</th>
                                                <th>Appo. Time</th>
                                                <th>Mobile No</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Donald Gardner</td>
                                                <td>36</td>
                                                <td>Orthopedic</td>
                                                <td><img src="/assets/images/users/user-1.jpg" alt="" className="thumb-sm rounded-circle me-2" />Dr.Thomas Fant</td>
                                                <td>18/07/2019</td>
                                                <td>10:15 am</td>
                                                <td>+123456789</td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-18"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-18"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Keith Jacobson</td>
                                                <td>48</td>
                                                <td>Neurology</td>
                                                <td><img src="/assets/images/users/user-4.jpg" alt="" className="thumb-sm rounded-circle me-2" />Dr.Helen White</td>
                                                <td>18/07/2019</td>
                                                <td>11:30 am</td>
                                                <td>+123456789</td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-18"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-18"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Greg Crosby</td>
                                                <td>27</td>
                                                <td>Cardiology</td>
                                                <td><img src="/assets/images/users/user-6.jpg" alt="" className="thumb-sm rounded-circle me-2" />Dr.Aretha Garland</td>
                                                <td>19/07/2019</td>
                                                <td>12:30 pm</td>
                                                <td>+123456789</td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-18"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-18"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Fred Godina</td>
                                                <td>22</td>
                                                <td>Fizioterapie</td>
                                                <td><img src="/assets/images/users/user-7.jpg" alt="" className="thumb-sm rounded-circle me-2" />Dr.Justin Williams</td>
                                                <td>19/07/2019</td>
                                                <td>02:15 pm</td>
                                                <td>+123456789</td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-18"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-18"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Peggy Doe</td>
                                                <td>51</td>
                                                <td>Psychology</td>
                                                <td><img src="/assets/images/users/user-8.jpg" alt="" className="thumb-sm rounded-circle me-2" />Dr.William Gonzalez</td>
                                                <td>20/07/2019</td>
                                                <td>10:45 am</td>
                                                <td>+123456789</td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-18"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-18"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jennifer Doss</td>
                                                <td>18</td>
                                                <td>Gynaecology</td>
                                                <td><img src="/assets/images/users/user-10.jpg" alt="" className="thumb-sm rounded-circle me-2" />Dr.Lea Sanchez</td>
                                                <td>20/07/2019</td>
                                                <td>03:30 pm</td>
                                                <td>+123456789</td>
                                                <td>
                                                    <a href="#"><i className="las la-pen text-secondary font-18"></i></a>
                                                    <a href="#"><i className="las la-trash-alt text-secondary font-18"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal content */}
                <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title mt-0" id="myLargeModalLabel">Add New Appointment</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="PatientName">Patient Name</label>
                                                <input type="text" className="form-control" id="PatientName" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="DoctorName_select" className="form-label">Doctor Name</label>
                                                <select className="form-select" id="DoctorName_select">
                                                    <option selected="">-- Select --</option>
                                                    <option value="1">Dr.Thomas Fant</option>
                                                    <option value="2">Dr.Justin Williams</option>
                                                    <option value="3">Dr.Aretha Garland</option>
                                                    <option value="4">Dr.Lea Sanchez</option>
                                                    <option value="5">Dr.Helen White</option>
                                                    <option value="6">Dr.William Gonzalez</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="Department_select" className="form-label">Department</label>
                                                <select className="form-select" id="Department_select">
                                                    <option selected="">-- Select --</option>
                                                    <option value="1">Orthopedic</option>
                                                    <option value="2">Fizioterapie</option>
                                                    <option value="3">Cardiology</option>
                                                    <option value="4">Gynaecology</option>
                                                    <option value="5">Neurology</option>
                                                    <option value="6">Psychology</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label className="form-label my-2" htmlFor="Age">Age</label>
                                                <input type="text" className="form-control" id="Age" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label className="form-label my-2" htmlFor="AppoDate">Date</label>
                                                <input type="text" className="form-control" id="AppoDate" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label className="form-label my-2" htmlFor="AppoTime">Time</label>
                                                <input type="text" className="form-control" id="AppoTime" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label className="form-label my-2" htmlFor="PhoneNo">Phone No</label>
                                                <input type="text" className="form-control" id="PhoneNo" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-de-primary">Save</button>
                                    <button type="button" className="btn btn-sm btn-de-danger">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalAppointments;
