import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectVisibleContacts,
} from "../../redux/contacts/selector";
import { deleteContact } from "../../redux/contacts/operations";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(selectVisibleContacts);
  const { items, isLoading, error } = useSelector(selectContacts);

  return isLoading && !error ? (
    <Loader />
  ) : (
    <ul className="space-y-4">
      {items &&
        contactsList.map((contact) => {
          const { id, name, number } = contact;
          return (
            <li
              key={id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium text-gray-800">{name}</p>
                <p className="text-sm text-gray-600">{number}</p>
              </div>
              <button
                type="button"
                className="text-red-600 hover:text-red-800 transition duration-200"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
