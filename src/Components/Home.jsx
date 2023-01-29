import React from 'react'

function Home() {
    return (
        <>
            <h1 classNameName='display-1 bg-danger' style={{ width: '200px', height: '50px', margin: 'auto' }}>Home</h1>
            {/* Carasouel Section */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/14847019/pexels-photo-14847019.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-75 h-75 m-auto" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/15185824/pexels-photo-15185824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-75 h-75 m-auto" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/15185817/pexels-photo-15185817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-75 h-75 m-auto" />
                    </div>
                </div>
                <button className="carousel-control-prev bg-dark " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ zIndex: '0' }}>
                    <span className="carousel-control-prev-icon carousel-primary" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next bg-dark " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{ zIndex: '0' }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Home