import React, { useState } from "react";
import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import "./homepage.css";

function HomePage({ createMethod }) {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    bio: "",
  });
  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [bio, setBio] = useState();

  const handleDialogBox = () => {
    setOpen(!open);
    // console.log(people);
  };

  const addProfile = (e) => {
    e.preventDefault();
    input.firstName = firstName;
    input.lastName = lastName;
    input.email = email;
    input.dateOfBirth = dateOfBirth;
    input.bio = bio;

    createMethod(input);

    console.log(input);

    setFirstName("");
    setLastName("");
    setEmail("");
    setDateOfBirth("");
    setBio("");
    handleDialogBox();
  };
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <div className="todos-field" style={{ marginRight: "20px" }}>
        <button
          className="btn-todos"
          style={{ marginRight: "20px" }}
          type="submit"
          onClick={handleDialogBox}
        >
          Create
        </button>
        <button className="btn-todos" type="submit" onClick={handleDialogBox}>
          View
        </button>
      </div>

      <Dialog
        open={open}
        onClose={handleDialogBox}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="create_dialog">
          <form>
            <h1>Create Profile</h1>
            <div className="todos-field">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div className="todos-field">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div className="todos-field">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div className="todos-field">
              <input
                type="text"
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div className="todos-field">
              <input
                type="text"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />{" "}
            </div>
            <div className="todos-field">
              <button
                className="btn-todos"
                type="submit"
                onClick={(e) => addProfile(e)}
              >
                Create
              </button>
              <button
                className="btn-todos"
                type="submit"
                onClick={handleDialogBox}
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default HomePage;
