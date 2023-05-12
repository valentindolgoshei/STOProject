import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  return (
    <form
      className="mt-5 mb-5 offset-sm-2 offset-md-3 offset-lg-4 col-sm-8 col-md-6 col-lg-4 border"
      onChange={props.handleChange}>
      <h3 className="text-center mt-3 mb-3">Registration</h3>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          title="name"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.name && (
          <span className="text-danger">{props.errors.name}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="birthDate">Birth date</label>
        <input
          type="date"
          className="form-control"
          id="birthDate"
          placeholder="Birth date"
          title="Birth date"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.birthDate && (
          <span className="text-danger">{props.errors.birthDate}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="rank">Rank</label>
        <input
          type="number"
          className="form-control"
          id="rank"
          placeholder="Rank"
          title="Rank"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.rank && (
          <span className="text-danger">{props.errors.rank}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="specialization">Specialization</label>
        <input
          type="text"
          className="form-control"
          id="specialization"
          placeholder="Specialization"
          title="Specialization"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.specialization && (
          <span className="text-danger">{props.errors.specialization}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="yearsOfExperience">Years of Experience</label>
        <input
          type="number"
          className="form-control"
          id="yearsOfExperience"
          placeholder="Years of Experience"
          title="Years of Experience"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.yearsOfExperience && (
          <span className="text-danger">{props.errors.yearsOfExperience}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          placeholder="Salary"
          title="Salary"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.salary && (
          <span className="text-danger">{props.errors.salary}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="education">Education</label>
        <input
          type="text"
          className="form-control"
          id="education"
          placeholder="Education"
          title="Education"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.education && (
          <span className="text-danger">{props.errors.education}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          placeholder="Phone Number"
          title="Phone Number"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.phoneNumber && (
          <span className="text-danger">{props.errors.phoneNumber}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="admin">Is Admin</label>
        <select
          className="form-control"
          id="isAdmin"
          defaultValue="false"
          required>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        {props.errors.isAdmin && (
          <span className="text-danger">{props.errors.isAdmin}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name">Login</label>
        <input
          type="text"
          className="form-control"
          id="login"
          placeholder="Login"
          title="Give yourself a fancy login!"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.login && (
          <span className="text-danger">{props.errors.login}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          title="Please provide a valid email"
          aria-describedby="emailHelp"
        />
        {props.errors.email && (
          <span className="text-danger">{props.errors.email}</span>
        )}
        <span id="emailHelp" className="form-text text-muted">
          Provide a valid email
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          aria-describedby="passwordHelp"
          title="Think of some difficult password"
        />
        {props.errors.password && (
          <span className="text-danger">{props.errors.password}</span>
        )}
        <span id="passwordHelp" className="form-text text-muted">
          Think of some hard-to-guess password!
        </span>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary col-sm-12 mb-3"
        onClick={props.handleSubmit}>
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object
};
