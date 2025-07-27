import React from 'react';

const CardGroup = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1649140041688-0f75446e707e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 1</h5>
                            <p className="card-text">This is a sample card with some placeholder text.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1649140041688-0f75446e707e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 2</h5>
                            <p className="card-text">Another sample card with additional placeholder content.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1649140041688-0f75446e707e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 3</h5>
                            <p className="card-text">Yet another card with a small description and a button.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGroup;
