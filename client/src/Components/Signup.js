import React, { Component } from 'react'
import './Signup.css';
export default class SignUp extends Component {
  render() {
    return (
      <form className="forms">
        <h2>Sign Up</h2>
        <div className="field">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="field">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="field">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password">
          Already registered <a href="/signin">sign in?</a>
        </p>
      </form>
    )
  }
}