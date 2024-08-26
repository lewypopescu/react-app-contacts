import React from "react";
import { useDispatch } from "react-redux";
import { inputFilter } from "../../redux/contacts/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handlerInputFilter = (e) => {
    const { value } = e.target;
    dispatch(inputFilter(value));
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="filter"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Find contacts by name:
      </label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerInputFilter}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;
