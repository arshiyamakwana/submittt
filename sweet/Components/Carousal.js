import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide position-relative" data-bs-ride="carousel">
                {/* Search form in the center */}
                <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ zIndex: 20, width: '70%' }}
                >
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-light" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://images.unsplash.com/photo-1605194000384-439c3ced8d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl0aGFpfGVufDB8fDB8fHww"
                            className="d-block w-100"
                            style={{ height: "500px", objectFit: "cover" }}
                            alt="Slide 1"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1605194000384-439c3ced8d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl0aGFpfGVufDB8fDB8fHww"
                            className="d-block w-100"
                            style={{ height: "500px", objectFit: "cover" }}
                            alt="Slide 2"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1605194000384-439c3ced8d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl0aGFpfGVufDB8fDB8fHww"
                            className="d-block w-100"
                            style={{ height: "500px", objectFit: "cover" }}
                            alt="Slide 3"
                        />
                    </div>
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
