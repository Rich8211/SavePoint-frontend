import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import FormInput from "../FormInput/FormInput";
import Modal from "../modal";
import UserContext from "../../../context/UserContext";
import UserDataContext from "../../../context/UserDataContext";

const SignUpModal = ({ history }) => {
  const [form, setState] = useState({
    file: null,
    profilePic: "",
    username: "",
    password: "",
    passwordCheck: "",
    email: "",
    bio: "",
  });

  const {
    file,
    profilePic,
    username,
    password,
    passwordCheck,
    email,
    bio,
  } = form;

  const { toggleModal, dispatch } = useContext(UserDataContext);

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfilePic = (e) => {
    setState({
      ...form,
      profilePic: e.target.files[0],
      file: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
   
  };

  useEffect(() => {
    setState({
      ...form,
      file: null,
    });
  }, [toggleModal]);

  const Inputs = [
    {
      for: "profile-pic",
      upperLabel: "Profile Picture*",
      bottomLabel: "",
      name: "profilePic",
      handleChange: updateProfilePic,
      type: "file",
      inputType: "input",
    },
    {
      for: "username",
      upperLabel: "Username*",
      name: "username",
      handleChange: updateField,
      type: "text",
      inputType: "input",
    },
    {
      for: "password",
      upperLabel: "Password*",
      bottomLabel: "Password must be atleast six characters long",
      name: "password",
      handleChange: updateField,
      type: "password",
      inputType: "input",
    },
    {
      for: "passwordCheck",
      upperLabel: "Confirm Password*",
      name: "passwordCheck",
      handleChange: updateField,
      type: "password",
      inputType: "input",
    },
    {
      for: "email",
      upperLabel: "Email*",
      bottomLabel:
        "Savepoint needs this to help create a safe and responsive community. You can change how often you hear from us in your settings once you login.",
      name: "email",
      handleChange: updateField,
      type: "email",
      inputType: "input",
    },
    {
      for: "bio",
      upperLabel: "Bio*",
      bottomLabel: `By clicking "Confirm", you confirm that you accept our Terms of
          Service and Privacy Policy`,
      name: "bio",
      handleChange: updateField,
      type: "email",
      inputType: "textArea",
    },
  ];

  return (
      <Modal 
        buttonText="Confirm" 
        clickHandler={handleSubmit} 
        title="Let's Fill Out Your Profile"
        >
        {Inputs.map((input) => (
          <FormInput {...input} />
        ))}
      </Modal>    
  );
};

export default withRouter(SignUpModal);
