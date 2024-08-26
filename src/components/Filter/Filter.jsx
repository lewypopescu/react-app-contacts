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
    <div>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerInputFilter}
      />
    </div>
  );
};

export default Filter;
