import React, { useState, useEffect } from "react";

const Functions = ({ functs, setFuncts, item }) => {
  const [state, setState] = useState({
    iD: "",
    val: ""
  });

  useEffect(() => {
    const funct = functs.find((funct) => funct.prop === item);
    if (funct) {
      setState(funct);
    } else {
      setState({
        iD: "",
        val: ""
      });
    }
  }, [functs, item]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));

    const updatedFuncts = [...functs];
    const index = updatedFuncts.findIndex((funct) => funct.prop === item);
    if (index !== -1) {
      updatedFuncts[index] = { ...updatedFuncts[index], [name]: value };
    } else {
      updatedFuncts.push({ ...state, [name]: value, prop: item });
    }
    setFuncts(updatedFuncts);
  };

  return (
    <div>
      <form className="bg-white shadow-md rounded px-6 pt-2 pb-2 ml-2 mb-4">
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="iD"
            type="text"
            value={state.iD}
            onChange={handleChange}
            placeholder="ID"
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Function
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="val"
            value={state.val}
            onChange={handleChange}
            placeholder="Value"
          />
        </div>
      </form>
    </div>
  );
};

export default Functions;
