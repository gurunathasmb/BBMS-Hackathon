import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./need-blood.css";

const Need = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [reason, setReason] = useState("");
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace this with your API endpoint
    const apiUrl = "path_to_your_backend_endpoint";
    const payload = { blood: bloodGroup, reason };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.length > 0) {
        setDonors(result);
        setError("");
      } else {
        setDonors([]);
        setError("No Donor Found For your search Blood group.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch donors. Please try again.");
    }
  };

  return (
    <div id="page-container" className="mt-5 position-relative">
      <div className="container">
        <div id="content-wrap" className="pb-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4 mb-3">Need Blood</h1>
            </div>
          </div>

          <form name="needblood" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <label className="font-italic">
                  Blood Group <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  name="blood"
                  className="form-control"
                  required
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {/* Example blood groups, replace with fetched data */}
                  <option value="1">A+</option>
                  <option value="2">B+</option>
                  <option value="3">O+</option>
                  <option value="4">AB+</option>
                  <option value="5">A-</option>
                  <option value="6">B-</option>
                  <option value="7">O-</option>
                  <option value="8">AB-</option>

                </select>
              </div>
              <div className="col-lg-4 mb-4">
                <label className="font-italic">
                  Reason, why do you need blood?
                  <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  name="reason"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ cursor: "pointer" }}
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          <div className="row">
            {error && (
              <div className="alert alert-danger col-12" role="alert">
                {error}
              </div>
            )}
            {donors.map((donor, index) => (
              <div className="col-lg-4 col-sm-6 portfolio-item" key={index}>
                <div className="card mb-4" style={{ width: "300px" }}>
                  <img
                    className="card-img-top"
                    src="image/blood_drop_logo.jpg"
                    alt="Blood Drop"
                    style={{ width: "100%", height: "300px" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{donor.donor_name}</h3>
                    <p className="card-text">
                      <strong>Blood Group:</strong> {donor.blood_group}
                      <br />
                      <strong>Mobile No.:</strong> {donor.donor_number}
                      <br />
                      <strong>Gender:</strong> {donor.donor_gender}
                      <br />
                      <strong>Age:</strong> {donor.donor_age}
                      <br />
                      <strong>Address:</strong> {donor.donor_address}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Need;