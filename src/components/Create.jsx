import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    id: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Department: "",
  });

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users from API
  useEffect(() => {
    axios
      .get("http://localhost:3006/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Validate input fields
  const validate = () => {
    const newErrors = {};

    if (!values.id || values.id <= 0) {
      newErrors.id = "ID is required and must be a positive number.";
    }
    if (!values.FirstName || values.FirstName.length < 2) {
      newErrors.FirstName = "First Name is required and must have at least 2 characters.";
    }
    if (!values.LastName || values.LastName.length < 2) {
      newErrors.LastName = "Last Name is required and must have at least 2 characters.";
    }
    if (!values.Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email)) {
      newErrors.Email = "A valid email address is required.";
    }
    if (!values.Department || values.Department.length < 2) {
      newErrors.Department = "Department is required and must have at least 2 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      axios
        .post("http://localhost:3006/users", values)
        .then((response) => {
          console.log(response);
          setUsers([...users, response.data]); // Update users locally
          navigate("/");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg rounded-4 p-4"
        style={{
          width: "90%",
          maxWidth: "600px",
          minWidth: "300px",
          padding: "30px",
        }}
      >
        <h2 className="text-center text-primary mb-4">Add User</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 text-start">
          <div >
            <label htmlFor="id" className="form-label fw-bold ">
              ID:
            </label>
            <input
              className={`form-control rounded-3 ${errors.id ? "is-invalid" : ""}`}
              onChange={(e) => setValues({ ...values, id: e.target.value })}
              placeholder="Enter ID"
              type="number"
              id="id"
              name="id"
            />
            {errors.id && <div className="invalid-feedback">{errors.id}</div>}
          </div>

          <div>
            <label htmlFor="FirstName" className="form-label fw-bold">
              First Name:
            </label>
            <input
              className={`form-control rounded-3 ${errors.FirstName ? "is-invalid" : ""}`}
              placeholder="Enter First Name"
              onChange={(e) => setValues({ ...values, FirstName: e.target.value })}
              type="text"
              id="FirstName"
              name="FirstName"
            />
            {errors.FirstName && <div className="invalid-feedback">{errors.FirstName}</div>}
          </div>

          <div>
            <label htmlFor="LastName" className="form-label fw-bold">
              Last Name:
            </label>
            <input
              className={`form-control rounded-3 ${errors.LastName ? "is-invalid" : ""}`}
              placeholder="Enter Last Name"
              onChange={(e) => setValues({ ...values, LastName: e.target.value })}
              type="text"
              id="LastName"
              name="LastName"
            />
            {errors.LastName && <div className="invalid-feedback">{errors.LastName}</div>}
          </div>

          <div>
            <label htmlFor="Email" className="form-label fw-bold">
              Email:
            </label>
            <input
              className={`form-control rounded-3 ${errors.Email ? "is-invalid" : ""}`}
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, Email: e.target.value })}
              type="email"
              id="Email"
              name="Email"
            />
            {errors.Email && <div className="invalid-feedback">{errors.Email}</div>}
          </div>

          <div>
            <label htmlFor="Department" className="form-label fw-bold">
              Department:
            </label>
            <input
              className={`form-control rounded-3 ${errors.Department ? "is-invalid" : ""}`}
              placeholder="Enter Department"
              onChange={(e) => setValues({ ...values, Department: e.target.value })}
              type="text"
              id="Department"
              name="Department"
            />
            {errors.Department && <div className="invalid-feedback">{errors.Department}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-3 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
