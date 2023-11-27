import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";

const DataTable = ({ data }) => {
  if (data === null) {
    return <div>No data available</div>;
  }
  const initialFormData = data.reduce((obj, item) => {
    return {
      ...obj,
      [item]: "5",
    };
  }, {});
  // console.log(initialFormData, "datassss");

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // console.log(formData,'formdata');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the formData, e.g., store in an array
    const dataArray = Object.values(formData);
    // console.log(dataArray);

    axios
    .post("http://localhost:8000/api/predict/", dataArray, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      // console.log("response", response);
    })
    .catch((error) => {
      console.error("Error making the request:", error);
    });


  };

  const renderFields = () => {
    return data.map((key, index) => (
      <div key={key} className="form-group">
        <label htmlFor={key}>{key}</label>
        <input
          type="text"
          id={index}
          name={key}
          value={formData.key}
          onChange={handleInputChange}
        />
      </div>
    ));
  };
// for modals
const [showModal, setShowModal] = useState(false);

const handleShowModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);

const handleModalSubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic here
  handleShowModal();
};
//
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {renderFields()}
        {/* <hr /> */}
        <button type="submit" onClick={handleModalSubmit}>Submit</button>
      </form>
      <Modal show={showModal} handleClose={handleCloseModal}/>
      <br />
      <br />
    </div>
  );
};

export default DataTable;
