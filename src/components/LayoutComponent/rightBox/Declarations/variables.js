import React, { useState, useEffect } from "react";

const Variables = ({ variables, setVariables, item }) => {
  const [state, setState] = useState({
    id: "",
    type: "",
    value: ""
  });
  console.log("kirti", state);

  useEffect(() => {
    const variable = variables.find((variable) => variable.prop === item);
    if (variable) {
      setState(variable);
    } else {
      setState({
        id: "",
        type: "",
        value: ""
      });
    }
  }, [variables, item]);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));

    const updatedVariables = [...variables];
    const index = updatedVariables.findIndex(
      (variable) => variable.prop === item
    );
    if (index !== -1) {
      updatedVariables[index] = {
        ...updatedVariables[index],
        [e.target.name]: e.target.value
      };
    } else {
      updatedVariables.push({
        ...state,
        [e.target.name]: e.target.value,
        prop: item
      });
    }
    setVariables(updatedVariables);
  };

  console.log("variables", variables);

  return (
    <div>
      <div className="w-full max-w-xs mx-auto ml-2">
        <form className="bg-white shadow-md rounded px-6 pt-2 pb-2 mb-4">
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="id"
              value={state.id}
              onChange={handleChange}
              placeholder="ID"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={state.type}
              name="type"
              onChange={handleChange}
            >
              <option defaultValue>Select</option>
              <option>String</option>
              <option>Float</option>
              <option>Int</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Value
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="value"
              value={state.value}
              onChange={handleChange}
              placeholder="Value"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Variables;
