import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">

            {/* Top social media section */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            {/* Footer links */}
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p><button className="btn btn-link text-reset p-0 border-0">Angular</button></p>
                            <p><button className="btn btn-link text-reset p-0 border-0">React</button></p>
                            <p><button className="btn btn-link text-reset p-0 border-0">Vue</button></p>
                            <p><button className="btn btn-link text-reset p-0 border-0">Laravel</button></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p><button className="btn btn-link text-reset p-0 border-0">Pricing</button></p>
                            <p><button className="btn btn-link text-reset p-0 border-0">Settings</button></p>
                            <p><button className="btn btn-link text-reset p-0 border-0">Orders</button></p>
                            <p><button className="btn btn-link text-reset p-0 border-0">Help</button></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                            <p><i className="fas fa-phone me-3"></i> +01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> +01 234 567 89</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/" target="_blank" rel="noopener noreferrer">
                    MDBootstrap.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
