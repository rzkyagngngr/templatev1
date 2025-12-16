
import React from 'react';

const HospitalDashboard = () => {
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
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Dashboard</h4>
                        </div>
                    </div>
                </div>
                {/* end page title end breadcrumb */}

                <div className="row">
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <span className="h4 fw-bold">42</span>
                                        <h6 className="text-uppercase text-muted mt-2 m-0 font-11">Appointments</h6>
                                    </div>
                                    <div className="col-auto">
                                        <i className="lab la-accessible-icon display-3 text-secondary position-absolute o-1 translate-middle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <span className="h4 fw-bold">18</span>
                                        <h6 className="text-uppercase text-muted mt-2 m-0 font-11">All Patients </h6>
                                    </div>
                                    <div className="col-auto position-reletive">
                                        <i className="las la-bed display-3 text-secondary position-absolute o-1 translate-middle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <span className="h4 fw-bold">12</span>
                                        <h6 className="text-uppercase text-muted mt-2 m-0 font-11">Operations</h6>
                                    </div>
                                    <div className="col-auto">
                                        <i className="las la-cut  display-3 text-secondary position-absolute o-1 translate-middle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <span className="h4 fw-bold">14</span>
                                        <h6 className="text-uppercase text-muted mt-2 m-0 font-11">Doctors</h6>
                                    </div>
                                    <div className="col-auto">
                                        <i className="las la-stethoscope  display-3 text-secondary position-absolute o-1 translate-middle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <span className="h4 fw-bold">32</span>
                                        <h6 className="text-uppercase text-muted mt-2 m-0 font-11">Nurses</h6>
                                    </div>
                                    <div className="col-auto">
                                        <i className="las la-user-nurse  display-3 text-secondary position-absolute o-1 translate-middle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <span className="h4 fw-bold">$41,520</span>
                                        <h6 className="text-uppercase text-muted mt-2 m-0 font-11">Earnings</h6>
                                    </div>
                                    <div className="col-auto">
                                        <i className="las la-hand-holding-usd  display-3 text-secondary position-absolute o-1 translate-middle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-9">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Hospital Survey</h4>
                                    </div>
                                    <div className="col-auto">
                                        <div className="dropdown">
                                            <a href="#" className="btn btn-sm btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                This Month<i className="las la-angle-down ms-1"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">Today</a>
                                                <a className="dropdown-item" href="#">Last Week</a>
                                                <a className="dropdown-item" href="#">Last Month</a>
                                                <a className="dropdown-item" href="#">This Year</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row position-absolute">
                                    <div className="col-12">
                                        <div className="media my-2">
                                            <i data-feather="phone" className="align-self-center icon-md text-secondary"></i>
                                            <div className="media-body align-self-center ms-2">
                                                <h6 className="mt-0 mb-1 font-16">76% Deals Successfull <i className="fas fa-check text-success"></i></h6>
                                                <p className="text-muted mb-0">This is a simple hero unit, a simple jumbotron-style component.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div id="patients-survey" className="apex-charts mt-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Covid-19 Patients</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="apexchart-wrapper">
                                    <div id="covid_status" className="apex-charts"></div>
                                </div>
                                <span className="h4 fw-bold">1,41,520</span>
                                <h6 className="text-uppercase text-muted mt-2 m-0 font-11">Total Covid-19 Reports</h6>
                                <div className="progress mt-3 rounded">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    <li className="list-item mt-3 fw-semibold d-flex justify-content-between align-items-center">
                                        <span>
                                            <i className="fas fa-circle font-10 text-primary me-2"></i>Positive
                                        </span>
                                        <p className="align-self-center mb-0 fw-semibold">24,212</p>
                                    </li>
                                    <li className="list-item mt-2 fw-semibold d-flex justify-content-between align-items-center">
                                        <span>
                                            <i className="fas fa-circle font-10 text-info me-2"></i>Negative
                                        </span>
                                        <p className="align-self-center mb-0 fw-semibold">81,564</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Today available Doctors</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body dash-info-carousel">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-12 align-self-center">
                                                    <h6 className="mt-0 text-start">Apollo Hospital</h6>
                                                    <div className="media mt-3">
                                                        <img src="/assets/images/users/dr-1.jpg" alt="" height="70" className="rounded-circle" />
                                                        <div className="media-body align-self-center ms-3">
                                                            <h5 className="mt-0 mb-1 font-15">Dr.Helen White</h5>
                                                            <p className="text-muted mb-0"><span className="me-2 text-secondary">MS Cardiology</span> 11:00am to 03:00pm</p>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item m-0"><i className="mdi mdi-star text-warning font-16"></i></li>
                                                                <li className="list-inline-item m-0"><i className="mdi mdi-star text-warning font-16"></i></li>
                                                                <li className="list-inline-item m-0"><i className="mdi mdi-star text-warning font-16"></i></li>
                                                                <li className="list-inline-item m-0"><i className="mdi mdi-star text-warning font-16"></i></li>
                                                                <li className="list-inline-item m-0"><i className="mdi mdi-star-half text-warning font-16"></i></li>
                                                                <li className="list-inline-item m-0"><small className="text-muted">4.91/5 (1021 reviews)</small></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <hr className="hr-dashed" />
                                                    <div className="p-2 bg-light">
                                                        <div className="media">
                                                            <h3>68</h3>
                                                            <div className="media-body align-self-center ms-3">
                                                                <p className="mb-0 font-weight-semibold text-uppercase text-dark-alt">Appointments</p>
                                                                <p className="mb-0 text-muted">Last Saturday 52 Appointments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Patients Reports</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3 align-self-center">
                                        <div className="text-center">
                                            <div className="d-flex justify-content-center align-items-center thumb-lg bg-soft-primary rounded-circle mx-auto mb-2">
                                                <i className="las la-procedures align-self-center"></i>
                                            </div>
                                            <h4 className="mt-0 fw-bold">1200</h4>
                                            <h6 className="text-uppercase m-0 mb-2">Admit</h6>
                                            <p className="text-muted font-11"><span className="text-success"><i className="mdi mdi-arrow-up"></i>14.5%</span> Up From Last Week</p>
                                            <div className="d-grid">
                                                <button type="button" className="btn btn-soft-primary btn-sm">More Details</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-self-center">
                                        <div className="apexchart-wrapper">
                                            <div id="patient_dash_report" className="chart-gutters mb-n4"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 align-self-center">
                                        <div className="text-center">
                                            <div className="d-flex justify-content-center align-items-center thumb-lg bg-soft-primary rounded-circle mx-auto mb-2">
                                                <i className="las la-wheelchair align-self-center"></i>
                                            </div>
                                            <h4 className="mt-0 fw-bold">351</h4>
                                            <h6 className="text-uppercase m-0 mb-2">Discharge</h6>
                                            <p className="text-muted font-11"><span className="text-success"><i className="mdi mdi-arrow-up"></i>14.5%</span> Up From Last Week</p>
                                            <div className="d-grid">
                                                <button type="button" className="btn btn-soft-primary btn-sm">More Details</button>
                                            </div>
                                        </div>
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

export default HospitalDashboard;
