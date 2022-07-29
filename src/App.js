import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import View from "./Components/ProfileView/View";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log(people);
  }, [people]);
  const createProfile = (data) => {
    console.log(data);
    let newProfile = [
      ...people,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        bio: data.bio,
      },
    ];
    console.log(newProfile);
    setPeople(newProfile);
    newProfile = [];
  };

  return (
    <div className="App">
      <h1>Welcome to HomePage</h1>
      <HomePage createMethod={(event) => createProfile(event)} />
      <View people={people} setPeople={setPeople} />
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage people={people} setPeople={setPeople} />}
          />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
