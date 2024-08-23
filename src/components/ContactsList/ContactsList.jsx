import React from "react";

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul className="space-y-2">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="flex justify-between items-center bg-blue-100 p-3 rounded-md shadow-sm"
        >
          <span className="text-blue-800 font-medium">
            {contact.name}: {contact.number}
          </span>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
