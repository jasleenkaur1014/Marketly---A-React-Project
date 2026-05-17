import React from "react";
import { toast, ToastContainer } from "react-toastify";
import FormCards from "./FormCards";
import styled from "styled-components";

export default class FormWithValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      error: {},
      userData: {
        name: "",
        email: "",
        number: "",
        gender: "",
      },
      data: [],
    };
  }

  nameValidation = (event) => {
    if (event.target.value.length < 2 || event.target.value.length > 15) {
      this.setState((prev) => ({
        error: {
          ...prev.error,
          name: "Name must be between 1-15 characters",
        },
        userData: { ...prev.userData, name: event.target.value },
      }));
    } else {
      this.setState((prev) => ({
        error: { ...prev.error, name: "" },

        userData: {
          ...prev.userData,
          name: event.target.value,
        },
      }));
    }
  };

  emailValidation = (event) => {
    const value = event.target.value;

    if (!value.includes("@") || !value.includes(".")) {
      this.setState((prev) => ({
        error: {
          ...prev.error,
          email: "Email must contain @ and .",
        },
        userData: {
          ...prev.userData,
          email: value,
        },
      }));
    } else {
      this.setState((prev) => ({
        error: {
          ...prev.error,
          email: "",
        },
        userData: {
          ...prev.userData,
          email: value,
        },
      }));
    }
  };

  numberValidation = (event) => {
    const value = event.target.value;

    if (!/^\d{10}$/.test(value)) {
      this.setState((prev) => ({
        error: {
          ...prev.error,
          number: "Number must contain 10 digits.",
        },
        userData: {
          ...prev.userData,
          number: value,
        },
      }));
    } else {
      this.setState((prev) => ({
        error: {
          ...prev.error,
          number: "",
        },
        userData: {
          ...prev.userData,
          number: value,
        },
      }));
    }
  };

  genderValidation = (event) => {
    const value = event.target.value;

    if (!value) {
      this.setState((prev) => ({
        error: {
          ...prev.error,
          gender: "Please select a gender",
        },
        userData: {
          ...prev.userData,
          gender: value,
        },
      }));
    } else {
      this.setState((prev) => ({
        error: {
          ...prev.error,
          gender: "",
        },
        userData: {
          ...prev.userData,
          gender: value,
        },
      }));
    }
  };

  formSubmission = (event) => {
    event.preventDefault();

    const { name, email, number, gender } = this.state.userData;
    let hasErrors = false;

    if (!name || name.length < 2 || name.length > 15) {
      toast.error("Name nust not be empty and must be between 1-15 characters");
      hasErrors = true;
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
      toast.error("Email nust not be empty and must contain @ and .");
      hasErrors = true;
    }

    if (!number || !/^\d{10}$/.test(number)) {
      toast.error("Phone number nust not be empty and must valid number");
      hasErrors = true;
    }

    if (!gender) {
      toast.error("Please select a gender");
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    this.setState((prev) => ({
      data: [...prev.data, { ...prev.userData }],
      userData: {
        name: "",
        email: "",
        number: "",
        gender: "",
      },
      error: {},
    }));

    toast.success("Form submitted successfully!");
  };

  render() {
    return (
      <>
        <ToastContainer />

        <Form className="main" onSubmit={(e) => this.formSubmission(e)}>
          <div className="name-field">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name..."
              onChange={(e) => this.nameValidation(e)}
              value={this.state.userData.name}
            />
            <br />
            <small style={{ color: "red" }}>{this.state.error.name}</small>
          </div>
          <div className="email-field">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email..."
              value={this.state.userData.email}
              onChange={(e) => this.emailValidation(e)}
            />
            <br />
            <small style={{ color: "red" }}>{this.state.error.email}</small>
          </div>
          <div className="num-field">
            <label htmlFor="number">Contact: </label>
            <input
              type="text"
              id="number"
              placeholder="Enter Your Number..."
              onChange={(e) => this.numberValidation(e)}
              value={this.state.userData.number}
            />
            <br />
            <small style={{ color: "red" }}>{this.state.error.number}</small>
          </div>
          <div className="gender-field">
            <label htmlFor="gender">Gender: </label>
            <select
              id="gender"
              onChange={(e) => this.genderValidation(e)}
              value={this.state.userData.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <small style={{ color: "red" }}>{this.state.error.gender}</small>
          </div>
          <button type="submit">Submit</button>
        </Form>
        <FormCards data={this.state.data} />
      </>
    );
  }
}
const Form = styled.form`
  width: 100%;
  font-size: 1.1rem;
  padding: 20px;
`;
