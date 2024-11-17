import React, { useState, useEffect } from "react";
import "./Home.css"; // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from '../assets/image/5.jpg';
import img1 from '../assets/image/6.jpg';
import img2 from '../assets/image/8.jpg'

const App = () => {
  // Simulating data fetched from an API or database
  const [pages, setPages] = useState({});
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Mock fetching data
    setPages({
      needForBlood: "Information about the need for blood...",
      bloodTips: "Some useful blood donation tips...",
      whoYouHelp: "You can help people like...",
      bloodGroups: "Details About Blood Groups Blood groups are classified based on the presence or absence of specific antigens on the surface of red blood cells. These antigens determine compatibility for blood transfusion, organ donation, and other medical procedures.ABO Blood Group SystemThe ABO system is the most important classification. It divides blood into four main groups:A Has A antigen on red cells and anti-B antibodies in plasma.Can donate to A and AB blood groups.Can receive from A and O blood groups.BHas B antigen on red cells and anti-A antibodies in plasma.Can donate to B and AB blood groups.Can receive from B and O blood groups.AB (Universal Recipient for Plasma)Has both A and B antigens on red cells and no anti-A or anti-B antibodies in plasma.Can donate to AB only.Can receive from A, B, AB, and O blood groups.O (Universal Donor for Red Cells)Has no A or B antigens on red cells but both anti-A and anti-B antibodies in plasma.Can donate to A, B, AB, and O blood groups.Can receive from O only.",
      universal: "Information about universal donors and recipients...",
    });

    setDonors([
      {
        name: "Gurunathagouda",
        bloodGroup: "A+",
        number: "8197736731",
        gender: "Male",
        age: 20,
        address:"bengaluru",
      },
      {
        name: "suryanshu",
        bloodGroup: "O-",
        number: "9449037095",
        gender: "male",
        age: 20,
        address: "bengaluru",
      },
      // Additional donor data
    ]);
  }, []);

  return (
    <div>
      {/* Header */}
      {/* <Header active="home" /> */}

      {/* Ticker */}
     {/* <Ticker />  */}

      {/* Main Content */}
      <div id="page-container" style={{ marginTop: "50px", position: "relative", minHeight: "84vh" }}>
        <div className="container">
          <div id="content-wrap" style={{ paddingBottom: "75px" }}>
            {/* Carousel */}
            <Carousel />

            {/* Welcome Message */}
            <br />
            <h1 style={{ textAlign: "center", fontSize: "45px" }}>
              Welcome to BloodBank & Donor Management System
            </h1>
            <br />

            {/* Page Content Cards */}
            <div className="row">
              <ContentCard title="The need for blood" content={pages.needForBlood} />
              <ContentCard title="Blood Tips" content={pages.bloodTips} />
              <ContentCard title="Who you could Help" content={pages.whoYouHelp} />
            </div>

            {/* Donor Section */}
            <h2>Blood Donor Names</h2>
            <div className="row">
              {donors.map((donor, index) => (
                <DonorCard key={index} donor={donor} />
              ))}
            </div>
            <br />

            {/* Features Section */}
            <div className="row mb-5">
              <div className="col-lg-8">
                <h2>BLOOD GROUPS</h2>
                <p style={{textAlign:"justify"}}>{pages.bloodGroups}</p>
              </div>
                <div className="col-lg-3">
                  <img
                    className="img-fluid rounded"
                    src={img}
                    alt="Blood Donation"
                    style={{marginLeft:'50px', width: '200%', height: 'auto', objectFit: 'cover' }} // Adjust '250px' to your desired height
                  />
                </div>
             
            </div>
            <hr />

            {/* Call to Action Section */}
            <div className="row mb-4">
              <div className="col-md-4"  >
                <a className="btn btn-lg btn-secondary btn-block"  style={{backgroundColor:"red"}} href="/Donate">
                  Become a Donor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Components
// const Header = ({ active }) => <div className="header">Header Content (Active: {active})</div>;

// const Ticker = () => <div>Ticker Content Here</div>;

const Carousel = () => (
  <div id="demo" className="carousel slide" data-ride="carousel">
    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
    </ul>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img1 }alt="Blood Donor" width="100%" height="500" />
      </div>
      <div className="carousel-item">
        <img src={img2} alt="Blood Facts" width="100%" height="500" />
      </div>
    </div>
    {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="carousel-control-next-icon"></span> */}
    {/* </a> */}
  </div>
);

const ContentCard = ({ title, content }) => (
  <div className="col-lg-4 mb-4">
    <div className="card">
      <h4 className="card-header bg-info text-white">{title}</h4>
      <p className="card-body overflow-auto">{content}</p>
    </div>
  </div>
);

const DonorCard = ({ donor }) => (
  <div className="col-lg-4 col-sm-6 portfolio-item">
    <br />
    <div className="card" style={{ width: "300px" }}>
      <img className="card-img-top" src={img2} alt="Blood Drop Logo" style={{ height: "300px" }} />
      <div className="card-body">
        <h3 className="card-title">{donor.name}</h3>
        <p className="card-text">
          <b>Blood Group:</b> {donor.bloodGroup}
          <br />
          <b>Mobile No.:</b> {donor.number}
          <br />
          <b>Gender:</b> {donor.gender}
          <br />
          <b>Age:</b> {donor.age}
          <br />
          <b>Address:</b> {donor.address}
        </p>
      </div>
    </div>
  </div>
);

const Footer = () => <footer>Footer Content Here</footer>;

export default App;