import React, { useRef, useState, useContext, useEffect } from "react";
import DataContext from "../../../../src/Context/dataContext";
import Draggable from "react-draggable";

const myStyle = {
  position: "absolute"
};

const AnswerField = ({
  idForInputField,
  setInputSelected,
  setIsShowInputboxes,
  takeXYValues
}) => {
  const ctxdata = useContext(DataContext);
  const index = ctxdata.items.findIndex((object) => {
    return object.id === idForInputField;
  });

  const [pressed, setPressed] = useState(false);
  const [question, setQuestion] = useState(ctxdata?.items[index]?.question);
  const ref = useRef();

  const inputRef = useRef(null);

  const setQuestionFunc = (e) => {
    setQuestion(e.target.value);
  };

  useEffect(() => {
    ctxdata.items.map((item) => {
      if (item.id === idForInputField) {
        item.question = question;
      }
    });
  }, [question, ctxdata?.items]);

  const [position, setPosition] = useState({
    x: ctxdata?.items[index]?.x || 0,
    y: ctxdata?.items[index]?.y || 0
  });
  // useEffect(() => {
  //   takeXYValues(XYValues);
  // }, [XYValues.x, XYValues.y]);
  const handleDrag = (e, data) => {
    const { x, y } = data;
    const obj = {
      x,
      y,
      height: ctxdata?.items[index]?.height,
      width: ctxdata?.items[index]?.width,
      id: idForInputField,
      degree: ctxdata?.items[index]?.degree
    };
    setPosition(obj);
  };

  const handleStop = () => {
    ctxdata.allData(position);
  };
  useEffect(() => {
    setPosition({ x: ctxdata?.items[index]?.x, y: ctxdata?.items[index]?.y });
    ctxdata.editedData = false;
  }, [ctxdata.editedData]);
  return (
    <div>
      <Draggable position={position} onDrag={handleDrag} onStop={handleStop}>
        <div ref={ref} style={myStyle}>
          <input
            onChange={(e) => {
              setQuestionFunc(e);
            }}
            style={{
              cursor: "move",
              background: "#9BCFE7",
              width: ctxdata?.items[index]?.width + "px",
              height: ctxdata?.items[index]?.height + "px",
              transform: `rotate(${ctxdata?.items[index]?.degree}deg)`
            }}
            onMouseUp={() => {
              setInputSelected(false);
            }}
            onMouseDown={() => {
              setInputSelected(true);
            }}
            onFocus={() => {
              setIsShowInputboxes(true);
              setPressed(true);
            }}
            onBlur={() => {
              setIsShowInputboxes(false);
              setPressed(false);
            }}
            type="text"
          />
        </div>
      </Draggable>
    </div>
  );
};

export default AnswerField;
