import React, { useState } from "react";
import DataContext from "./dataContext";

const DataContextProvider = (props) => {
  const [decalareData, setDecalareData] = useState([]);
  const [functionData, setFunctionData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [newitem, setNewitem] = useState([
    // { x: 0, y: 0, height: 10, width: 20, id: 0 }
  ]);
  const [componentArray, setComponentArray] = useState([]);
  const [answerComponentArray, setAnswerComponentArray] = useState([]);

  const [XYValues, setXYValues] = useState({});

  const completeData = (item) => {
    if (!Array.isArray(item)) {
      const indexGot = obj.items.findIndex((myitem) => myitem.id === item.id);
      const existingObj = obj.items[indexGot];

      if (existingObj) {
        const newObj = {
          ...existingObj,
          x: item.x,
          y: item.y,
          height: item.height,
          width: item.width,
          question: item.question,
          degree: item.degree
        };

        const updatedItem = [...obj.items];
        updatedItem[indexGot] = newObj;

        setNewitem(updatedItem);
      } else {
        setNewitem([...newitem, item]);
      }
    } else {
      setNewitem(item);
    }
  };
  const getComponent = (item) => {
    if (!Array.isArray(item)) {
      setComponentArray([...componentArray, item]);
    } else {
      setComponentArray(item);
    }
  };
  const updatedValues = (item) => {
    const indexGot = obj.items.findIndex((myitem) => myitem.id === item.id);
    const existingObj = obj.items[indexGot];

    if (existingObj) {
      const newObj = {
        ...existingObj,
        x: +item.x,
        y: +item.y,
        height: +item.height,
        width: +item.width,
        question: item.question,
        degree: +item.degree
      };

      const updatedItem = [...obj.items];
      updatedItem[indexGot] = newObj;

      setNewitem(updatedItem);
    }
  };
  const getAnswercomponent = (item) => {
    if (!Array.isArray(item)) {
      setAnswerComponentArray([...answerComponentArray, item]);
    } else {
      setAnswerComponentArray(item);
    }
  };

  const getDeclarationDataFunc = (item) => {
    setDecalareData([...decalareData, item]);
  };
  const getFunctionData = (item) => {
    setFunctionData([...functionData, item]);
  };
  const editDataFunction = (item) => {
    setEditedData(item);
  };
  const updateXYValues = (item) => {
    setXYValues(item);
  };
  const obj = {
    allData: completeData,
    items: newitem,

    getComponent: getComponent,
    componentArray: componentArray,

    getDeclarationDataFunc: getDeclarationDataFunc,
    declarationData: decalareData,

    getFunctionData: getFunctionData,
    functionData: functionData,

    updatedValues: updatedValues,
    getAnswercomponent: getAnswercomponent,
    answerComponent: answerComponentArray,

    editDataFunction: editDataFunction,
    editedData: editedData,

    // XYvalues: XYValues,
    // updateXYValues: updateXYValues,

    isEdit: false
  };

  return (
    <>
      <DataContext.Provider value={obj}>{props.children}</DataContext.Provider>
    </>
  );
};
export default DataContextProvider;
