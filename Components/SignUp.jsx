import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleDatChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  };

  const handleValidate = (formData) => {
    const error = {};
    if (!formData?.name) {
      error.error = true;
      error.name = "invalidName";
    }
    if (!formData?.phone) {
      error.error = true;
      error.phone = "invalidPhone";
    }
    if (!formData?.favlang) {
      error.error = true;
      error.favlang = "invalidfavlang";
    }
    if (!formData?.email) {
      error.error = true;
      error.email = "invalidemail";
    }
    if (!formData?.brif) {
      error.error = true;
      error.brif = "invalidbrif";
    }
    if (!formData?.date) {
      error.error = true;
      error.date = "invaliddate";
    }
    if (!formData?.gender) {
      error.error = true;
      error.gender = "invalidgender";
    }
    if (!formData?.password) {
      error.error = true;
      error.password = "invalidpassword";
    }

    if (formData?.password !== formData?.confirmPassword) {
      error.error = true;
      error.confirmPassword = "invalidconfirmPassword";
    }
    return error;
  };

  const handleFileDelete = () => {
    setSelectedPhoto("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const error = handleValidate(formData);
    setError(error);
    if (error.error) {
      alert("Ivalidate data");
    } else {
      alert("Success");
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div id="signup">
      <p className="flex justify-center items-center font-bold text-2xl m-4">
        Sign Up
      </p>
      <div className="md:w-[600px] w-[300px] h-[1100px] bg-gradient-to-l from-gray-600 flex justify-center to-fuchsia-200">
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex text-center flex-col gap-2 "
          >
            <p>Name</p>
            <input
              onChange={handleDatChange}
              className="mt-2 p-1"
              name="name"
              type="text"
              value={formData?.name}
              placeholder="Name"
            />
            <p className="text-red-600"> {error?.name} </p>

            <p>Phone</p>
            <input
              onChange={handleDatChange}
              className="mt-2 p-1"
              type="number"
              value={formData?.phone}
              name="phone"
              placeholder="phone"
            />
            <p className="text-red-600"> {error?.phone} </p>

            <div>
              <p className="my-4 font-bold">
                Please select your favorite Web language:
              </p>
              <input
                onChange={handleDatChange}
                checked={formData?.favlang === "HTML"}
                type="radio"
                value="HTML"
                name="favlang"
              />
              HTML
              <input
                onChange={handleDatChange}
                checked={formData?.favlang === "JAVASCRIPT"}
                type="radio"
                value="JAVASCRIPT"
                name="favlang"
              />
              JAVASCRIPT
              <input
                onChange={handleDatChange}
                checked={formData?.favlang === "REACT"}
                type="radio"
                value="REACT"
                name="favlang"
              />
              REACT
            </div>
            <p className="text-red-600"> {error?.favlang} </p>

            <p>Email</p>
            <input
              onChange={handleDatChange}
              className="mt-2 p-1"
              type="email"
              name="email"
              value={formData?.email}
              placeholder="Email"
            />

            <p className="text-red-600"> {error?.email} </p>

            <div className="relative">
              {selectedPhoto ? (
                <div>
                  <p className="font-bold text-red-600">Uploded Photo</p>
                  <img
                    src={URL.createObjectURL(selectedPhoto)}
                    alt="Selected"
                    className="w-[400px]  h-[200px]"
                  />
                </div>
              ) : (
                <input
                  type="file"
                  placeholder="Name"
                  name="photo"
                  accept="image/*"
                  onChange={handleUploadPhoto}
                />
              )}
              {selectedPhoto ? (
                <button
                  onClick={handleFileDelete}
                  className="absolute  right-0 border px-4 p-1"
                >
                  delete
                </button>
              ) : (
                ""
              )}
            </div>

            <p>Breif</p>
            <textarea
              name="brif"
              type="text"
              value={formData?.brif}
              onChange={handleDatChange}
            ></textarea>
            <p className="text-red-600"> {error?.brif} </p>

            <p>DOB</p>
            <input
              type="date"
              onChange={handleDatChange}
              name="date"
              value={formData?.date}
            />
            <p className="text-red-600"> {error?.date} </p>

            <p>Gender</p>
            <select
              className="p-1"
              onChange={handleDatChange}
              name="gender"
              value={formData?.gender}
            >
              <option>MALE</option>
              <option>FEMALE</option>
              <option>OTHER</option>
            </select>
            <p>Password</p>
            <input
              className="p-1"
              type="password"
              onChange={handleDatChange}
              name="password"
              value={formData?.password}
              placeholder="password"
            />
            <p className="text-red-600"> {error?.password} </p>

            <p>Confirm Password</p>
            <input
              type="password"
              onChange={handleDatChange}
              name="confirmPassword"
              value={formData?.confirmPassword}
              placeholder=" Confirm password"
            />
            <p className="text-red-600"> {error?.confirmPassword} </p>

            <button type="submit" className="border hover:bg-red-400 p-2">
              SUBMIT
            </button>
            <button
              onClick={handleUpdate}
              type="submit"
              className="border hover:bg-red-400 p-2"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              type="submit"
              className="border hover:bg-red-400 p-2"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
