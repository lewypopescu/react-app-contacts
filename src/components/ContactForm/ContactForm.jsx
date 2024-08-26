import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selector";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        return;
      case "number":
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    const similarElement = (element) => element.name === name;
    if (items && items.find(similarElement)) {
      alert(name + " is already in contacts.");
      return;
    }
    const newContact = { name, number };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <form
      onSubmit={handlerFormSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <label className="block mb-4">
        <span className="text-gray-700">Name</span>
        <input
          onChange={handlerInputChange}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          pattern="^[a-zA-Z\s'-]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Number</span>
        <input
          onChange={handlerInputChange}
          type="tel"
          name="number"
          value={number}
          placeholder="Number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
