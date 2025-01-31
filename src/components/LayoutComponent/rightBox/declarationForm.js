import React, { useState, useContext } from "react";
import DataContext from "../../../Context/dataContext";
import Variables from "./Declarations/variables";
import Functions from "./Declarations/functions";
import { GrAddCircle } from "react-icons/gr";

const Form = ({
  setModalOpen,
  layoutQuestion,
  setIdForInputField,
  idForInputField
}) => {
  const [variables, setVariables] = useState([]);
  const [functs, setFuncts] = useState([]);

  const ctxdata = useContext(DataContext);

  const [varModal, setVarModal] = useState(true);
  const [funModal, setFunModal] = useState(false);

  const [buttonColor1, setButtonColor1] = useState("#11009E");
  const [buttonColor2, setButtonColor2] = useState("#6C9BCF");

  const [funcCount, setFuncCount] = useState([0]);
  const [count, setCount] = useState([0]);

  const Submit = (e) => {
    e.preventDefault();
    const obj = {
      variables: variables,
      functs: functs,
      question: layoutQuestion,
      ID: idForInputField
    };
    setIdForInputField(idForInputField + 1);
    setModalOpen(false);
    ctxdata.getDeclarationDataFunc(obj);
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <button
            onClick={() => {
              setFunModal(false);
              setVarModal(true);
              setButtonColor1("#11009E");
              setButtonColor2("#6C9BCF");
            }}
            style={{
              margin: "10px auto",
              backgroundColor: `${buttonColor1}`,
              width: "50%",
              color: "white"
            }}
          >
            Variable
          </button>
          <button
            onClick={() => {
              setFunModal(true);
              setVarModal(false);
              setButtonColor1("#6C9BCF");
              setButtonColor2("#11009E");
            }}
            style={{
              margin: "10px auto",
              backgroundColor: `${buttonColor2}`,
              width: "50%",
              color: "white"
            }}
          >
            Functions
          </button>
          {varModal && (
            <>
              {count.map((item) => (
                <Variables
                  item={item}
                  variables={variables}
                  setVariables={setVariables}
                />
              ))}
              <button
                onClick={() => {
                  setCount((count) => [...count, count.length - 1 + 1]);
                }}
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-10 mx-16 mb-2 rounded focus:outline-none focus:shadow-outline"
              >
                <GrAddCircle />
              </button>
            </>
          )}
          {funModal && (
            <>
              {funcCount.map((item) => (
                <Functions functs={functs} setFuncts={setFuncts} item={item} />
              ))}
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-10 mx-16 mb-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  setFuncCount((funcCount) => [
                    ...funcCount,
                    funcCount.length - 1 + 1
                  ]);
                }}
              >
                <GrAddCircle />
              </button>
            </>
          )}
          <br />
        </div>
      </div>
      <hr />

      <button
        className="bg-[#4ade80]"
        onClick={(e) => {
          Submit(e);
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
        onClick={(e) => {
          setModalOpen(false);
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
  );
};

export default Form;
