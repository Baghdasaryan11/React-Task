import React from 'react';
import './Header.css';
import HeaderBG from '../../Images/Header_BG.png'

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

const Hedaer = () => {

    return (
        <figure class="figure-img">
            <div className={'title'}>
                <h2>Whatever header they currently use goes here</h2>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark ">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a href="#">Men’s</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Women’s</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Sports </a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Brands</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Collections</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className={'headerBg'}>
                <div>
                    <h1>Big Title Here</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc sed malesuada sapien. Nulla aliquam orci nec massa hendrerit tincidunt. Donec in sollicitudin lacus.
                        Curabitur et faucibus nulla. Maecenas sit amet semper libero,
                        in iaculis felis. Aliquam erat volutpat. Donec sollicitudin turpis eget tortor tincidunt euismod.</p>
                    <button>SHOW ME MORE</button>
                </div>
            </div>

        </figure>
    )
}

export default Hedaer