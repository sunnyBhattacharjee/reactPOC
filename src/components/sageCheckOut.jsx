import React, { Component } from "react";
import { connect } from "react-redux";
import {
  checkEmail,
  checkRequired,
  createForm,
  setTouched
} from "../redux/actions/checkout.action";

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  createForm: (id, data) => dispatch(createForm(id, data)),
  checkRequired: (id, data) => dispatch(checkRequired(id, data)),
  checkEmail: (id, data) => dispatch(checkEmail(id, data)),
  setTouched: (id, data) => dispatch(setTouched(id, data))
});

class SageCheckOut extends Component {
  state = {};
  componentWillMount() {
    let id = "contactInfo";
    this.props.createForm("contactInfo", {
      value: {
        firstName: "",
        lastName: "",
        primaryPhone: "",
        email: ""
      },
      status: {
        firstName: { valid: false, touched: false },
        lastName: { valid: false, touched: false },
        primaryPhone: { valid: false, touched: false },
        email: { valid: false, touched: false }
      },
      validation_message: {
        firstName: "",
        lastName: "",
        primaryPhone: "",
        email: ""
      }
    });
  }

  handleSubmit(event) {
    const { value } = this.props.CheckOutReducer.contactInfo;
    if (this.getContactInfoStatus()) {
      alert("Your Account Information:- " + JSON.stringify(value));
    } else {
      alert("Invalid Data Entry");
      event.preventDefault();
    }
  }
  validateEmail(formName, event) {
    this.props.checkRequired(formName, event);
    if (this.props.CheckOutReducer.contactInfo.status.email.valid) {
      this.props.checkEmail(formName, event);
    }
  }
  

  render() {
    const { contactInfo } = this.props.CheckOutReducer;
    return (
      <div className="card my-5 p-0  pure-bg-grey">
        <div className="cardheader font-weight-bold h5 pure-bg-yellow pure-white pt-2 m-0">
          <div className="card-title px-2">ACCOUNT INFORMATION</div>
        </div>
        <div className="card-body">
          <div className="card-text border pure-bg-white py-3 px-5 ">
            <form
              className="px-5"
              onSubmit={event => this.handleSubmit(event)}
            >
              <div className="row">
                <div className="col-6 h6 pure-green">
                  Contact Information
                </div>
                <div className="col-6 text-right">
                  <span className="pure-red">*</span>&nbsp;marked field are
                  mandatory
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>
                    First Name<span className="pure-red">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder=""
                    className={
                      contactInfo.status.firstName.touched
                        ? contactInfo.status.firstName.valid
                          ? "form-control border-success"
                          : "form-control border-danger"
                        : "form-control"
                    }
                    ref={contactInfo.value.firstName}
                    onChange={event =>
                      this.props.checkRequired("contactInfo", event.target)
                    }
                    onBlur={event =>
                      this.props.setTouched("contactInfo", event.target)
                    }
                  />
                  <span className="pure-red">
                    {contactInfo.validation_message.firstName}
                  </span>
                </div>
                <div className="col-6 ">
                  <label>
                    Last Name<span className="pure-red">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder=""
                    className={
                      contactInfo.status.lastName.touched
                        ? contactInfo.status.lastName.valid
                          ? "form-control border-success"
                          : "form-control border-danger"
                        : "form-control"
                    }
                    ref={contactInfo.value.lastName}
                    onChange={event =>
                      this.props.checkRequired("contactInfo", event.target)
                    }
                    onBlur={event =>
                      this.props.setTouched("contactInfo", event.target)
                    }
                  />
                  <span className="pure-red">
                    {contactInfo.validation_message.lastName}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>
                    Primary Phone<span className="pure-red">*</span>
                  </label>
                  <input
                    id="primaryPhone"
                    type="text"
                    placeholder=""
                    className={
                      contactInfo.status.primaryPhone.touched
                        ? contactInfo.status.primaryPhone.valid
                          ? "form-control border-success"
                          : "form-control border-danger"
                        : "form-control"
                    }
                    ref={contactInfo.value.primaryPhone}
                    onChange={event =>
                      this.props.checkRequired("contactInfo", event.target)
                    }
                    onBlur={event =>
                      this.props.setTouched("contactInfo", event.target)
                    }
                  />
                  <span className="pure-red">
                    {contactInfo.validation_message.primaryPhone}
                  </span>
                </div>
                <div className="col-6 ">
                  <label>
                    Email<span className="pure-red">*</span>
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder=""
                    className={
                      contactInfo.status.email.touched
                        ? contactInfo.status.email.valid
                          ? "form-control border-success"
                          : "form-control border-danger"
                        : "form-control"
                    }
                    ref={contactInfo.value.email}
                    onChange={event =>
                      this.validateEmail("contactInfo", event.target)
                    }
                    onBlur={event =>
                      this.props.setTouched("contactInfo", event.target)
                    }
                  />
                  <span className="pure-red">
                    {contactInfo.validation_message.email}
                  </span>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-6 text-left">
                  <span className="pure-red">*</span>&nbsp;marked field are
                  mandatory
                </div>
                <div className="col-6 text-right">
                  <button
                    type="button"
                    className="btn btn-light font-weight-bold mx-2 w-25"
                  >
                    Back
                  </button>
                  <button
                    className="btn pure-bg-green pure-white w-25"
                    disabled={!this.getContactInfoStatus()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  getContactInfoStatus() {
    const { status } = this.props.CheckOutReducer.contactInfo;
    const formStatus =
      status.firstName.valid &&
      status.lastName.valid &&
      status.primaryPhone.valid &&
      status.email.valid;

    return formStatus;
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SageCheckOut);
