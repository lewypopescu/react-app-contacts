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
    <ul>
      {items &&
        contactsList.map((contact) => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
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
