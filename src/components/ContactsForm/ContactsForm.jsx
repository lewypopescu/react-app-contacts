import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  updateName,
  updateNumber,
  updateFilter,
} from "../../redux/contactsSlice";

import { selectNameForm, selectNumberForm } from "../../redux/selectors";

function ContactsForm({ onSubmit }) {
  const dispatch = useDispatch;
  const name = useSelector(selectNameForm);
  const number = useSelector(selectNumberForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    dispatch(updateName(""));
    dispatch(updateNumber(""));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      dispatch(updateName(value));
    } else if (name === "number") {
      dispatch(updateNumber(value));
    }
  };

  return (
    <>
      <h1>PhoneBook</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?"
            title="Name may contain only letters, apostrophe, dash and spaces"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number
          <input
            id="number"
            type="tel"
            name="number"
            pattern="^\+?[0-9\s\-\(\)]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export default ContactsForm;
