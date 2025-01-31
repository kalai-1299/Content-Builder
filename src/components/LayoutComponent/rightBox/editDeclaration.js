import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../../Context/dataContext";

const EditForm = ({
  editDecID,
  setEditDecID,
  setModalOpen,
  setEditDecQn,
  layoutQuestion
}) => {
  const ctxdata = useContext(DataContext);

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  let question = layoutQuestion;

  let val = ctxdata?.declarationData?.find((o) => o.ID === editDecID);

  console.log("Edit", val);

  const updateState = (index, e) => {
    let newArray = val.variables.map((item, i) => {
      if (Number(index) === Number(i)) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setData(newArray);

    newArray.map((item) => {
      val.variables.map((variable) => {
        if (item.prop === variable.prop) {
          const index = val.variables.indexOf(variable); // 👉️  0

          if (index !== -1) {
            val.variables[index] = item;
          }
        }
      });
    });
  };

  const updateState2 = (index, e) => {
    let newArray = val.functs.map((item, i) => {
      if (Number(index) === Number(i)) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setData2(newArray);

    newArray.map((item) => {
      val.functs.map((funct) => {
        if (item.prop === funct.prop) {
          const index = val.functs.indexOf(funct); // 👉️  0

          if (index !== -1) {
            val.functs[index] = item;
          }
        }
      });
    });
  };

  const onsubmit = () => {
    setEditDecQn(false);
    setModalOpen(false);
    setEditDecID(null);
  };

  useEffect(() => {
    setData(val?.variables);
    setData2(val?.functs);
  }, [val]);

  return (
    <>
      {question === val.question && (
        <>
          {val?.variables.map((variable, index) => (
            <>
              <form className="bg-white shadow-md rounded px-6 pt-2 pb-2 mb-4">
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    ID
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="id"
                    onChange={(e) => {
                      updateState(index, e);
                    }}
                    value={data[index]?.id}
                    placeholder="ID"
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Type
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={data[index]?.type}
                    name="type"
                    onChange={(e) => {
                      updateState(index, e);
                    }}
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
                    value={data[index]?.value}
                    onChange={(e) => {
                      updateState(index, e);
                    }}
                    placeholder="Value"
                  />
                </div>
              </form>
            </>
          ))}

          {/* Functions  */}
          {val.functs?.map((item, index) => (
            <>
              <form className="bg-white shadow-md rounded px-6 pt-2 pb-2 ml-2 mb-4">
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    ID
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="iD"
                    type="text"
                    onChange={(e) => {
                      updateState2(index, e);
                    }}
                    value={data2[index]?.iD}
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
                    value={data2[index]?.val}
                    onChange={(e) => {
                      updateState2(index, e);
                    }}
                    placeholder="Value"
                  />
                </div>
              </form>
            </>
          ))}

          <button
            className="bg-[#4ade80]"
            onClick={() => {
              onsubmit();
            }}
            style={{
              margin: "10px 5px 0px 15px",
              width: "40%",
              color: "white",
              border: "none"
            }}
          >
            Submit
          </button>

          <button
            className="bg-[#f43f5e]"
            onClick={() => {
              setEditDecQn(false);
              setModalOpen(false);
              setEditDecID(null);
            }}
            style={{
              margin: "10px 2px 0px 5px",
              width: "40%",
              color: "white",
              border: "none"
            }}
          >
            Cancel
          </button>
        </>
      )}
    </>
  );
};

export default EditForm;
