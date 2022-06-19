import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  /**
   * The onChange function is a React hook that sets the formData state to the previous state, and then
   * updates the formData state with the name and value of the input field that was changed.
   */
  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>

        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          {/* name */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter you Name"
              value={name}
              onChange={onChange}
            />
          </div>
          {/* email */}
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder=" Enter you Email"
              value={email}
              onChange={onChange}
            />
          </div>
          {/* password */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter you Password"
              value={password}
              onChange={onChange}
            />
          </div>
          {/* password2 */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              placeholder="Confirm your Password"
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
