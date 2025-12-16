
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Email = ({ type }) => {
    const navigate = useNavigate();

    // Sample Data extracted from apps-email-inbox.html
    const emails = [
        { id: 1, sender: 'Peter, me (3)', subject: 'Hello', teaser: 'Trip home from 🎉 Colombo has been arranged, then Jenna will come get me from Stockholm. :)', date: 'Mar. 6', read: false, starred: false, type: 'inbox', label: '' },
        { id: 2, sender: 'me, Susanna (7)', subject: 'Since you asked... and i\'m inconceivably bored at the train station', teaser: 'Alright thanks. I\'ll have to re-book that somehow, i\'ll get back to you.', date: 'Mar. 6', read: true, starred: false, type: 'inbox', label: 'Freelance', labelColor: 'warning' },
        { id: 3, sender: 'Web Support Dennis', subject: 'Re: New mail settings', teaser: 'Will you answer him asap?', date: 'Mar 7', read: true, starred: false, type: 'inbox', label: '' },
        { id: 4, sender: 'me, Peter (2)', subject: 'Off on Thursday', teaser: 'Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 > 4 mar 2014 at 5:55 pm', date: 'Mar 4', read: true, starred: false, type: 'inbox', label: 'Support', labelColor: 'info' },
        { id: 5, sender: 'Medium', subject: 'This Week\'s Top Stories', teaser: 'Our top pick for you on Medium this week The Man Who Destroyed America’s Ego', date: 'Feb 28', read: true, starred: false, type: 'inbox', label: 'Social', labelColor: 'purple' },
        { id: 6, sender: 'Death to Stock', subject: '🎁 Montly High-Res Photos', teaser: 'To create this month\'s pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.', date: 'Feb 28', read: true, starred: false, type: 'inbox', label: '' },
        { id: 7, sender: 'Randy, me (5)', subject: 'Last pic over my village', teaser: 'Yeah i\'d like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!', date: '5:01 am', read: false, starred: true, type: 'inbox', label: 'Family', labelColor: 'success' },
        { id: 8, sender: 'Andrew Zimmer', subject: 'Mochila Beta: Subscription Confirmed', teaser: 'You\'ve been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...', date: 'Mar 8', read: true, starred: false, type: 'inbox', label: '' },
        { id: 9, sender: 'Infinity HR', subject: 'Sveriges Hetaste sommarjobb', teaser: 'Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.', date: 'Mar 8', read: true, starred: false, type: 'inbox', label: '' },
        { id: 10, sender: 'Revibe', subject: 'Weekend on Revibe', teaser: 'Today\'s Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!', date: 'Feb 27', read: true, starred: false, type: 'inbox', label: 'Friends', labelColor: 'pink' },
        // Add more sample emails if needed, but this covers the visible ones in the snippet
    ];

    // Filter logic
    const filteredEmails = emails.filter(email => {
        if (type === 'starred') return email.starred;
        return email.type === type || (type === 'inbox' && !email.type); // Default to inbox
    });

    return (
        <div className="container-fluid">
            {/* Page Title */}
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-end">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Metrica</a></li>
                                <li className="breadcrumb-item"><a href="#">Apps</a></li>
                                <li className="breadcrumb-item active">Inbox</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Inbox</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {/* Left Sidebar */}
                    <div className="email-leftbar">
                        <button type="button" className="btn btn-primary btn-sm w-100" data-bs-toggle="modal" data-bs-target="#compose-modal">
                            <i className="fas fa-feather-alt me-2"></i>Compose
                        </button>

                        <div className="card mt-3">
                            <div className="card-body">
                                <div className="mail-list">
                                    <Link to="/apps/email/inbox" className={type === 'inbox' ? 'active pt-0' : 'pt-0'}><i className="las la-inbox font-15 me-1"></i>Inbox <span className="ms-1">({emails.filter(e => e.type === 'inbox' && !e.read).length})</span></Link>
                                    <Link to="/apps/email/starred" className={type === 'starred' ? 'active' : ''}><i className="las la-star font-15 me-1"></i>Starred</Link>
                                    <Link to="/apps/email/important"><i className="las la-tag font-15 me-1"></i>Important</Link>
                                    <Link to="/apps/email/draft"><i className="las la-file-alt font-15 me-1"></i>Draft</Link>
                                    <Link to="/apps/email/sent"><i className="las la-paper-plane font-15 me-1"></i>Sent Mail</Link>
                                    <Link to="/apps/email/trash"><i className="las la-trash-alt font-15 me-1"></i>Trash</Link>
                                </div>

                                <p className="text-dark my-4 font-weight-bold">Labels</p>
                                <div className="mail-list">
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-end"></span><i className="las la-life-ring font-15 me-1"></i>Theme Support</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-end"></span><i className="las la-briefcase font-15 me-1"></i>Freelance</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-purple float-end"></span><i className="lab la-google font-15 me-1"></i>Social</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-pink float-end"></span><i className="las la-users font-15 me-1"></i>Friends</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-end"></span><i className="las la-home font-15 me-1"></i>Family</a>
                                </div>

                                <p className="text-dark my-4 font-weight-bold">Chat</p>
                                <div className="">
                                    {[
                                        { name: 'Scott Median', msg: 'Hello', img: 'user-1.jpg' },
                                        { name: 'Julian Rosa', msg: 'What about our next..', img: 'user-2.jpg' },
                                        { name: 'David Medina', msg: 'Yeah everything is fine', img: 'user-3.jpg' },
                                        { name: 'Jay Baker', msg: 'Wow that\'s great', img: 'user-4.jpg' }
                                    ].map((user, i) => (
                                        <a href="#" className="media" key={i}>
                                            <img className="d-flex me-3 rounded-circle" src={`/assets/images/users/${user.img}`} alt="Generic placeholder image" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">{user.name}</p>
                                                <p className="text-muted">{user.msg}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="email-rightbar">
                        <div className="float-end d-flex justify-content-between">
                            <div className="btn-group ms-1">
                                <button type="button" className="btn btn-sm btn-de-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-question-circle"></i>
                                </button>
                            </div>
                            <div className="btn-group ms-1">
                                <button type="button" className="btn btn-sm btn-de-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-cog"></i>
                                </button>
                            </div>
                        </div>

                        <div className="btn-toolbar" role="toolbar">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-de-secondary"><i className="fas fa-inbox"></i></button>
                                <button type="button" className="btn btn-sm btn-de-secondary"><i className="fas fa-exclamation-circle"></i></button>
                                <button type="button" className="btn btn-sm btn-de-secondary"><i className="fas fa-trash"></i></button>
                            </div>
                            <div className="btn-group ms-1">
                                <button type="button" className="btn btn-sm btn-de-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-folder"></i><i className="mdi mdi-chevron-down ms-1"></i>
                                </button>
                            </div>
                            <div className="btn-group ms-1">
                                <button type="button" className="btn btn-sm btn-de-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-tag"></i><i className="mdi mdi-chevron-down ms-1"></i>
                                </button>
                            </div>
                            <div className="btn-group ms-1">
                                <button type="button" className="btn btn-sm btn-de-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    More<i className="mdi mdi-chevron-down ms-1"></i>
                                </button>
                            </div>
                        </div>

                        <div className="card my-3">
                            <ul className="message-list">
                                {filteredEmails.map((email) => (
                                    <li key={email.id} className={!email.read ? 'unread' : ''}>
                                        <div className="col-mail col-mail-1">
                                            <div className="checkbox-wrapper-mail">
                                                <input type="checkbox" id={`chk${email.id}`} />
                                                <label htmlFor={`chk${email.id}`} className="toggle"></label>
                                            </div>
                                            <a href="#" className="title">{email.sender}</a>
                                            <span className={`star-toggle ${email.starred ? 'fas fa-star text-warning' : 'far fa-star'}`}></span>
                                        </div>
                                        <div className="col-mail col-mail-2">
                                            <a href="#" className="subject">
                                                {email.label && <span className={`badge-soft-${email.labelColor || 'primary'} badge me-2`}>{email.label}</span>}
                                                {email.subject} &nbsp;–&nbsp; <span className="teaser">{email.teaser}</span>
                                            </a>
                                            <div className="date">{email.date}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="row mb-3">
                            <div className="col-7 align-self-center">
                                Showing 1 - {filteredEmails.length} of 1,524
                            </div>
                            <div className="col-5">
                                <div className="btn-group float-end">
                                    <button type="button" className="btn btn-sm btn-de-secondary waves-effect mb-0"><i className="fa fa-chevron-left"></i></button>
                                    <button type="button" className="btn btn-sm btn-de-secondary waves-effect mb-0"><i className="fa fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compose Modal */}
            <div className="modal fade" id="compose-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title m-0" id="myLargeModalLabel">Compose Mail</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method="post">
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" placeholder="To" />
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Cc" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Bcc" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group mb-3">
                                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className="btn-toolbar form-group mb-0">
                                    <div className="float-end">
                                        <button type="button" className="btn btn-primary btn-sm"><span>Send</span> <i className="fab fa-telegram-plane ms-1"></i></button>
                                        <button type="button" className="btn btn-soft-secondary btn-sm"><i className="far fa-trash-alt"></i></button>
                                        <button type="button" className="btn btn-soft-secondary btn-sm"><i className="fas fa-print"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;
