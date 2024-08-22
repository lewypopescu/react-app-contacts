import React from "react";

import { nanoid } from "nanoid";

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={nanoid()}>
          {contact.name}: {contact.number}{" "}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
