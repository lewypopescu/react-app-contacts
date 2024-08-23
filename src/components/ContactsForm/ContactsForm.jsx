import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateNumber } from "../../redux/contactsSlice";
import { selectNameForm, selectNumberForm } from "../../redux/selectors";

export default function ContactsForm({ onSubmit }) {
  const dispatch = useDispatch();
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
    const updateFunctions = {
      name: updateName,
      number: updateNumber,
    };

    if (updateFunctions[name]) {
      dispatch(updateFunctions[name](value));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-blue-600 font-semibold mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^[a-zA-Z\s'-]+$"
          title="Name may contain only letters, apostrophe, dash, and spaces"
          required
        />
      </div>
      <div>
        <label
          htmlFor="number"
          className="block text-blue-600 font-semibold mb-1"
        >
          Phone Number
        </label>
        <input
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="^\+?[0-9\s\-()]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md shadow-sm hover:bg-blue-700"
      >
        Add contact
      </button>
    </form>
  );
}
