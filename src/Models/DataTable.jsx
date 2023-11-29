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
      [item]: "",
    };
  }, {});
  // console.log(initialFormData, "datassss");

  const [formData, setFormData] = useState(initialFormData);
  const [dataOutput, setDataOutput] = useState()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(typeof(Number(value)),'value');
    setFormData((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };
  // console.log(formData,'formdata');

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = Object.values(formData);
    const dataArray = {
      user_input: temp,
    };
    console.log(dataArray,'dataaaa');

    axios
    .post("http://localhost:8000/api/predict/", dataArray, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      setDataOutput(response.data.prediction_data.Output)
      console.log("response", response);
    })
    .catch((error) => {
      console.error("Error making the request:", error);
    });
    handleShowModal();

  };

  // const renderFields = () => {
  //   return data.map((key, index) => (
  //     <div key={key} className="form-group">
  //       <label htmlFor={key}>{key}</label>
  //       <input
  //         type="text"
  //         id={index}
  //         name={key}
  //         value={formData.key}
  //         onChange={handleInputChange}
  //       />
  //     </div>
  //   ));
  // };
  const renderFields = () => {
    return (
      <div className="form-group-container">
        {data.map((key, index) => (
          <div key={key} className="form-group">
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={index}
              name={key}
              value={formData.key}
              // value={4}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
    );
  };
  


// for modals
const [showModal, setShowModal] = useState(false);

const handleShowModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);

// const handleModalSubmit = (e) => {
//   e.preventDefault();
// };
//
  

  return (
    <div className="form-container">
      <div className="form-box">
      <form onSubmit={handleSubmit}>
        {renderFields()}
        {/* <hr /> */}
        <button type="submit">Submit</button>
      </form>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} dataOutput={dataOutput}/>
      <br />
      <br />
    </div>
  );
};

export default DataTable;
