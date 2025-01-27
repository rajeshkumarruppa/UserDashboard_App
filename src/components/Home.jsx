import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // Customize the rows per page here
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users") // Adjust API URL if necessary
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (confirm) {
      axios
        .delete(`https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/${id}`)
        .then((response) => {
          console.log(response.data);
          setData(data.filter((user) => user.id !== id)); // Update state after deletion
        })
        .catch((error) => {
          console.log("Error deleting user:", error);
        });
    }
  };

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">List of Users</h1>
      <div className="rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end mb-3">
          <Link to="/create" className="btn btn-primary">
            Add User
          </Link>
        </div>

        {/* Responsive Table */}
        <div className="table-responsive">
          <table className="table table-striped table-wrapper">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((user, i) => (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Email}</td>
                  <td>{user.Department}</td>
                  <td className="d-flex gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => navigate(`/read/${user.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-3">
          <nav>
            <ul className="pagination">
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
