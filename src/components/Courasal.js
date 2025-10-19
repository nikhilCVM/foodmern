import React from 'react'

export default function () {
  return (
    <div>

    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner " >
    
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

      <div className="carousel-item active">
        <img src="https://wallpapercave.com/wp/wp7029319.jpg" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="burger"/>
      </div>
      <div className="carousel-item">
        <img src="https://images7.alphacoders.com/596/596343.jpg" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="pizza"/>
      </div>
      <div className="carousel-item">
        <img src="https://th.bing.com/th/id/OIP.PMTo_UbtsUrpcxMaU6DNPAHaE4?rs=1&pid=ImgDetMain" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="sea"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  
    </div>
  )
}
