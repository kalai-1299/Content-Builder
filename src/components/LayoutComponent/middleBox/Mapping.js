import { useEffect, useState } from "react";
import { numberOfquestion } from "../../../Data/questionSet";

const Mapping = ({
  question,
  answer,
  ChildTransfer1,
  ChildTransfer2,
  layoutQuestion
}) => {
  const [focusIdForInputField, setFocusIdForInputField] = useState(0);
  const [focusedField, setFocusedField] = useState("");

  ChildTransfer1(focusIdForInputField);
  ChildTransfer2(focusedField);

  const newQuestion1 = () => {
    let output = [];
    if (question) {
      question.map((item) => {
        if (item.questionSet === numberOfquestion[0].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let question1 = newQuestion1();

  const newQuestion2 = () => {
    let output = [];
    if (question) {
      question.map((item) => {
        if (item.questionSet === numberOfquestion[1].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let question2 = newQuestion2();

  const newQuestion3 = () => {
    let output = [];
    if (question) {
      question.map((item) => {
        if (item.questionSet === numberOfquestion[2].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let question3 = newQuestion3();

  const newQuestion4 = () => {
    let output = [];
    if (question) {
      question.map((item) => {
        if (item.questionSet === numberOfquestion[3].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let question4 = newQuestion4();

  const newAnswer1 = () => {
    let output = [];
    if (answer) {
      answer.map((item) => {
        if (item.questionSet === numberOfquestion[0].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let answer1 = newAnswer1();

  const newAnswer2 = () => {
    let output = [];
    if (answer) {
      answer.map((item) => {
        if (item.questionSet === numberOfquestion[1].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let answer2 = newAnswer2();

  const newAnswer3 = () => {
    let output = [];
    if (answer) {
      answer.map((item) => {
        if (item.questionSet === numberOfquestion[2].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let answer3 = newAnswer3();

  const newAnswer4 = () => {
    let output = [];
    if (answer) {
      answer.map((item) => {
        if (item.questionSet === numberOfquestion[3].question) {
          output.push(item);
        }
      });
    }
    return output;
  };
  let answer4 = newAnswer4();

  if (question1[0]?.questionSet === layoutQuestion) {
  }

  return (
    <div>
      {question1[0]?.questionSet === layoutQuestion ? (
        <div>
          {question1.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}

      {question2[0]?.questionSet === layoutQuestion ? (
        <div>
          {question2.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}

      {question3[0]?.questionSet === layoutQuestion ? (
        <div>
          {question3.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}

      {question4[0]?.questionSet === layoutQuestion ? (
        <div>
          {question4.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}

      {answer1[0]?.questionSet === layoutQuestion ? (
        <div>
          {answer1?.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}

      {answer2[0]?.questionSet === layoutQuestion ? (
        <div>
          {answer2?.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}

      {answer3[0]?.questionSet === layoutQuestion ? (
        <div>
          {answer3?.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}

      {answer4[0]?.questionSet === layoutQuestion ? (
        <div>
          {answer4?.map((item) => {
            return (
              <div
                key={item.id}
                onFocus={() => {
                  setFocusIdForInputField(item.id);
                  setFocusedField(item.type);
                }}
              >
                {item.componetAdded}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default Mapping;
