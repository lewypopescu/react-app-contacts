import React from "react";

export default function ContactsFilter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="filter">
        Find contacts by name:
        <input id="filter" type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}
