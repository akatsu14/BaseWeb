import R from "@assets";
import React, { useState } from "react";
import "./styles.css";
const SurveyForm = (props) => {
  const [name, setName] = useState("");

  const onSubmitData = () => {
    console.log(name);
  };
  return (
    <>
      <h1 id="title" className="mb-8">
        Survey Form
      </h1>
      <p id="description" style={{ color: R.colors.primary }}>
        Thank you for taking the time to help us improve the platform
      </p>
      <form
        id="survey-form"
        method="post"
        action="https://register-demo.freecodecamp.org"
      >
        <fieldset>
          <label id="name-label" for="name">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            onChangeCapture={(e) => {
              setName(e);
            }}
            value={name}
            placeholder="Input your name"
          />
          <label id="email-label" for="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Input your email"
          />
          <label id="number-label" for="number">
            Age:
          </label>
          <input
            id="number"
            name="number"
            type="number"
            required
            min="0"
            max="120"
            placeholder="Input your age"
          />
          <label for="dropdown">Role: </label>
          <select id="dropdown" name="dropdown">
            <option disabled selected value>
              Select current role
            </option>
            <option value="student">Student</option>
            <option value="job">Full Time Job</option>
            <option value="learner">Full Time Learner</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
          <label>
            Gender:
            <label className="m0p0" for="man">
              <input
                type="radio"
                id="man"
                name="radio-label"
                value="man"
                className="inline"
              />
              Man
            </label>
            <label className="m0p0" for="women">
              <input
                type="radio"
                id="woman"
                name="radio-label"
                value="woman"
                className="inline"
              />
              Woman
            </label>
          </label>
          <label for="bio">
            Bio:
            <textarea
              id="bio"
              name="bio"
              rows="3"
              cols="30"
              placeholder="Input your bio"
            ></textarea>
          </label>
          <section>
            <label for="terms-and-conditions" className="m0p0">
              <input
                className="inline"
                id="terms-and-conditions"
                type="checkbox"
                required
                value="I accept the terms and conditions"
                name="terms-and-conditions"
              />
              I accept the
              <a href="https://www.freecodecamp.org/news/terms-of-service/">
                terms and conditions
              </a>
            </label>
            <label for="terms-and-conditions" class="m0p0">
              <input
                className="inline"
                id="terms-and-conditions"
                type="checkbox"
                required
                value="I accept the terms and conditions"
                name="terms-and-conditions"
              />
              I accept the
              <a href="https://www.freecodecamp.org/news/terms-of-service/">
                terms and conditions
              </a>
            </label>
          </section>
          <input
            type="submit"
            id="submit"
            value="Submit"
            onSubmit={() => onSubmitData}
          />
        </fieldset>
      </form>
    </>
  );
};
export default SurveyForm;
