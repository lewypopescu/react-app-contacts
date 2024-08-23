import React from "react";

export default function ContactsFilter({ value, onChange }) {
  return (
    <div className="mb-4">
      <label
        htmlFor="filter"
        className="block text-blue-600 font-semibold mb-2"
      >
        Find contacts by name:
      </label>
      <input
        id="filter"
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
