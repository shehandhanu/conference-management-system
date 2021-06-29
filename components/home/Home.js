import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundimg: {

    },
    btn: {
        color: '#fffff0',
        textTransform: 'none',
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        borderRadius: 25,
        fontSize: 20,
        textDecoration: 'none',
        '&:hover': {
            color: '#fffff0',
        }
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>

            <section id="hero">
                <div className="hero-container">
                    <h1>Welcome to Black Code</h1>
                    <h2>We Are Going To Make Your Education Easy</h2>
                    <Button variant="contained" color="primary" className={classes.btn}>
                        <a href="#about" className={classes.btn}>Get Started</a>
                    </Button>
                </div>
            </section>
            {/* <!-- #hero --> */}

            <section id="about">
                <div className="container">
                    <div className="row about-container">

                        <div className="col-lg-6 content order-lg-1 order-2">
                            <h2 className="title">About DTSS Education</h2>
                            <p>
                                Education is the process of facilitating learning, or the acquisition of knowledge, skills, values,
                                morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and
                                directed research
                            </p>

                            <div className="icon-box wow fadeInUp">
                                <div className="icon"><i className="fa fa-search-plus"></i></div>
                                <h4 className="title">Research Publishing</h4>
                                <p className="description">
                                    Publications make scientific information publically available, and allow the rest
                                    of the academic audience to evaluate the quality of the research. There are various types of
                                    publications like Scholarly Journals, Professional or Trade Publications, Popular and General Interest
                                    Magazines.
                                </p>
                            </div>

                            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon"><i className="fa fa-file"></i></div>
                                <h4 className="title">Workshop Proposals</h4>
                                <p className="description">
                                    Workshops should highlight current topics related to technical and business issues
                                    in communications and networking, and should include a mix of regular papers, invited presentations, and
                                    panels that encourage the participation of attendees in active discussion.
                                </p>
                            </div>

                            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon"><i className="fa fa-address-card"></i></div>
                                <h4 className="title">Personal Profile</h4>
                                <p className="description">
                                    A personal profile gives a brief and clear account on someone's life. On the one
                                    hand, you can write it in a form of a description, giving the most important information such as
                                    personal data, your education, and career achievements. You also might add a few words about your
                                    interests.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                    </div>

                </div>
            </section>
            {/* <!-- #about --> */}

            {/* <!--==========================Facts Section============================--> */}
            <section id="facts">
                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Facts</h3>
                        <p className="section-description">About Our Company Facts</p>
                    </div>
                    <div className="row counters">

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">65</span>
                            <p>Users</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">128</span>
                            <p>Research Publications</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">800</span>
                            <p>Hours Of Workshops</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">4</span>
                            <p>Workers</p>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- #facts --> */}

            {/* <!--==========================Services Section============================--> */}
            <section id="services">
                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Services</h3>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-desktop"></i></div>
                                <h4 className="title">You can view the conference details</h4>
                                <p className="description">Not only for the registered users, anyone can view the conference details as a guest.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-bar-chart"></i></div>
                                <h4 className="title">You can submit your research papers</h4>
                                <p className="description">In our website, users can submit their research papers. Only registered users are able to submit reseacrh papers</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-paper-plane"></i></div>
                                <h4 className="title">You can conduct workshops</h4>
                                <p className="description">In our website registered users can conduct worshops and may introduce new ideas</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-photo"></i></div>
                                <h4 className="title">Better security for documentation</h4>
                                <p className="description">We provide 100% security for your documentation. Unauthorized people can not access your documents. And always we keep back ups with us.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-road"></i></div>
                                <h4 className="title">You can present research - related activities</h4>
                                <p className="description">You can give better explanation of research related activities for viewer</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                                <h4 className="title">Contact each other easily</h4>
                                <p className="description">We gather and provide contact details for your comfy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- #services --> */}

            {/* <!--==========================Call To Action Section============================--> */}
            <section id="call-to-action">
                <div className="container wow fadeIn">
                    <div className="row calltoaction">
                        <div className="col-lg-9 text-center text-lg-left">
                            <h3 className="cta-title">Not Signed Yet..?</h3>
                            <p className="cta-text">If You Wish To Join With Us...</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <Button variant="contained" color="primary" className={classes.btn}>
                                <Link to={'/signup'} style={{ textDecoration: "none", color: "#fffff0" }}>Sign Up</Link>
                            </Button>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- #call-to-action --> */}

            {/* <!--==========================Team Section============================--> */}
            <section id="leatetnews">

                <div className="container wow fadeIn mt-5">
                    <div className="section-header">
                        <h3 className="section-title">Team</h3>
                        <p className="section-description">we are the team with four members who following Bsc.software engineering degree at sliit.Our team
                            has best members who has better team spirit and we all are willing to learn new technologies.
                            Contact us for any software solution.We will give best product for you and we will not let you down.</p>
                    </div>
                </div>

            </section>
            {/* <!-- #team --> */}


            {/* <!--==========================Contact Section============================--> */}
            <section id="contactus">

                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Contact</h3>
                        <p className="section-description">Contact
                            If you are in trouble?Need a software solution? Let us to take your trouble and we will give a
                            best solution. Contact us - blackcodeteam1st@gmail.com
                        </p>
                        <h5 className="section-title">Contact details of team members</h5>
                        <p className="section-description" >Danuka dilshan - dnkdilshan@gmail.com</p>
                        <p className="section-description" >Sandaru manilka - gsandarumanilka@gmail.com</p>
                        <p className="section-description" >Shehan dhanuddara - shehan.dhanuddara1998@gmail.com</p>
                        <p className="section-description" >Janitha tharaka - janitha613@gmail</p>

                        <h5 className="section-title">Developers on social media</h5>
                        <p className="section-description" > Danuka dilshan - https://www.linkedin.com/in/danuka-dilshan-5094a31ba</p>
                        <p className="section-description" >Shehan dhanuddara - https://www.linkedin.com/in/shehan-dhanuddara-b940b5196/</p>
                        <p className="section-description" >Janitha tharaka - https://www.linkedin.com/in/tharaka-jayasundara-0b99001a3/e</p>




                    </div>
                </div>

            </section>
            {/* <!-- #contact --> */}

        </React.Fragment>
    )
}

export default Home
