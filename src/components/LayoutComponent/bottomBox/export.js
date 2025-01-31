import React, { useEffect, useState } from "react";
import reactToText from "react-to-text";

const Export = ({ setExported, SortedArray, functions, declarations }) => {
  const q1Data = JSON.parse(localStorage.getItem("Q1"));
  const q2Data = JSON.parse(localStorage.getItem("Q2"));
  const q3Data = JSON.parse(localStorage.getItem("Q3"));
  const q4Data = JSON.parse(localStorage.getItem("Q4"));
  const Title = JSON.parse(localStorage.getItem("Title"));

  let val = declarations.find((o) => o.question === "Q1");
  let val2 = declarations.find((o) => o.question === "Q2");
  let val3 = declarations.find((o) => o.question === "Q3");
  let val4 = declarations.find((o) => o.question === "Q4");

  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  useEffect(() => {
    declarations.forEach((item) => {
      if (item.question === "Q1") {
        setQuestion1(true);
      }
      if (item.question === "Q2") {
        setQuestion2(true);
      }
      if (item.question === "Q3") {
        setQuestion3(true);
      }
      if (item.question === "Q4") {
        setQuestion4(true);
      }
    });
    SortedArray.forEach((item) => {
      if (item.questionSet === "Q1") {
        setQuestion1(true);
      }
      if (item.questionSet === "Q2") {
        setQuestion2(true);
      }
      if (item.questionSet === "Q3") {
        setQuestion3(true);
      }
      if (item.questionSet === "Q4") {
        setQuestion4(true);
      }
    });
  }, [declarations, SortedArray, functions]);

  const JSXContent = () => (
    <div>
      {/* Q1 */}
      {question1 || question2 || question3 || question4 ? (
        <div>
          {`<?xml version="1.0" encoding="UTF-8"?>
          <homework version="v1.6.3" xmlns="http://www.mymaths.co.uk/XMLSchema"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.mymaths.co.uk/XMLSchema file:orinoco.xsd"  title="${
              Title || "Title"
            }"> `}
        </div>
      ) : null}
      {question1 && (
        <div>
          {`<homeworkQuestion questionmarks="${
            q1Data?.marks || "10"
          }" questiontitle="${q1Data?.questionTitle || "Numbers"}">`}
        </div>
      )}
      {/* <div>{"<declaration>"}</div> */}
      {/* Declaration & functions */}
      {declarations.map((declaration) => {
        if (declaration.question === "Q1") {
          return (
            <React.Fragment key={declaration.id}>
              {val && <h4>{"<declarations>"}</h4>}
              {declaration.variables.map((variable) => (
                <p key={variable.id}>
                  {`<${variable.type} ID="${variable.id}">${variable.value}</${variable.type}>`}
                </p>
              ))}
              {declaration.functs.map((item) => (
                <p key={item.iD}>
                  {`<function ID="${item.iD}"><![CDATA[${item.val}]]></function>`}
                </p>
              ))}
              {val && <h4>{"</declarations>"}</h4>}
            </React.Fragment>
          );
        }
        return null; // Return null for other declarations
      })}
      {/* Question and answer */}
      {SortedArray.map((item) => {
        if (item.type === "Question" && item.questionSet === "Q1") {
          return (
            <p key={item.id}>
              {`<textField x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" id="${item.id}" degree="${item.degree}"> <text><![CDATA[<p class="questionText">${item.question}</p>]]></text> </textField>`}
            </p>
          );
        } else if (item.type === "Answer" && item.questionSet === "Q1") {
          return (
            <p key={item.id}>
              {`<textInput x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" degree="${item.degree}"> <text><![CDATA[<p></p>]]></text> </textInput>`}
            </p>
          );
        }
        return null; // Return null for other items
      })}
      {question1 && <div>{`</homeworkQuestion>`}</div>}

      {/* Q2 */}
      {question2 && (
        <div>
          {`<homeworkQuestion questionmarks="${
            q2Data?.marks || "10"
          }" questiontitle="${q2Data?.questionTitle || "Numbers"}">`}
        </div>
      )}
      {/* <div>{"<declaration>"}</div> */}
      {/* Declaration & functions */}
      {declarations.map((declaration) => {
        if (declaration.question === "Q2") {
          return (
            <React.Fragment key={declaration.id}>
              {val2 && <h4>{"<declarations>"}</h4>}
              {declaration.variables.map((variable) => (
                <p key={variable.id}>
                  {`<${variable.type} ID="${variable.id}">${variable.value}</${variable.type}>`}
                </p>
              ))}
              {declaration.functs.map((item) => (
                <p key={item.iD}>
                  {`<function ID="${item.iD}"><![CDATA[${item.val}]]></function>`}
                </p>
              ))}
              {val2 && <h4>{"</declarations>"}</h4>}
            </React.Fragment>
          );
        }
        return null; // Return null for other declarations
      })}
      {/* Question and answer */}
      {SortedArray.map((item) => {
        if (item.type === "Question" && item.questionSet === "Q2") {
          return (
            <p key={item.id}>
              {`<textField x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" id="${item.id}" degree="${item.degree}"> <text><![CDATA[<p class="questionText">${item.question}</p>]]></text> </textField>`}
            </p>
          );
        } else if (item.type === "Answer" && item.questionSet === "Q2") {
          return (
            <p key={item.id}>
              {`<textInput x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" degree="${item.degree}"> <text><![CDATA[<p></p>]]></text> </textInput>`}
            </p>
          );
        }
        return null; // Return null for other items
      })}
      {question2 && <div>{`</homeworkQuestion>`}</div>}

      {/* Q3 */}

      {question3 && (
        <div>
          {`<homeworkQuestion questionmarks="${
            q3Data?.marks || "10"
          }" questiontitle="${q3Data?.questionTitle || "Numbers"}">`}
        </div>
      )}
      {/* <div>{"<declaration>"}</div> */}
      {/* Declaration & functions */}
      {declarations.map((declaration) => {
        if (declaration.question === "Q3") {
          return (
            <React.Fragment key={declaration.id}>
              {val3 && <h4>{"<declarations>"}</h4>}
              {declaration.variables.map((variable) => (
                <p key={variable.id}>
                  {`<${variable.type} ID="${variable.id}">${variable.value}</${variable.type}>`}
                </p>
              ))}
              {declaration.functs.map((item) => (
                <p key={item.iD}>
                  {`<function ID="${item.iD}"><![CDATA[${item.val}]]></function>`}
                </p>
              ))}
              {val3 && <h4>{"</declarations>"}</h4>}
            </React.Fragment>
          );
        }
        return null; // Return null for other declarations
      })}
      {/* Question and answer */}
      {SortedArray.map((item) => {
        if (item.type === "Question" && item.questionSet === "Q3") {
          return (
            <p key={item.id}>
              {`<textField x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" id="${item.id}" degree="${item.degree}"> <text><![CDATA[<p class="questionText">${item.question}</p>]]></text> </textField>`}
            </p>
          );
        } else if (item.type === "Answer" && item.questionSet === "Q3") {
          return (
            <p key={item.id}>
              {`<textInput x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" degree="${item.degree}"> <text><![CDATA[<p></p>]]></text> </textInput>`}
            </p>
          );
        }
        return null; // Return null for other items
      })}
      {question3 && <div>{`</homeworkQuestion>`}</div>}

      {/* Q4 */}

      {question4 && (
        <div>
          {`
            <homeworkQuestion questionmarks="${
              q4Data?.marks || "10"
            }" questiontitle="${q4Data?.questionTitle || "Numbers"}">`}
        </div>
      )}
      {/* <div>{"<declaration>"}</div> */}
      {/* Declaration & functions */}
      {declarations.map((declaration) => {
        if (declaration.question === "Q4") {
          return (
            <React.Fragment key={declaration.id}>
              {val4 && <h4>{"<declarations>"}</h4>}
              {declaration.variables.map((variable) => (
                <p key={variable.id}>
                  {`<${variable.type} ID="${variable.id}">${variable.value}</${variable.type}>`}
                </p>
              ))}
              {declaration.functs.map((item) => (
                <p key={item.iD}>
                  {`<function ID="${item.iD}"><![CDATA[${item.val}]]></function>`}
                </p>
              ))}
              {val4 && <h4>{"</declarations>"}</h4>}
            </React.Fragment>
          );
        }
        return null; // Return null for other declarations
      })}
      {/* Question and answer */}
      {SortedArray.map((item) => {
        if (item.type === "Question" && item.questionSet === "Q4") {
          return (
            <p key={item.id}>
              {`<textField x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" id="${item.id}" degree="${item.degree}"> <text><![CDATA[<p class="questionText">${item.question}</p>]]></text> </textField>`}
            </p>
          );
        } else if (item.type === "Answer" && item.questionSet === "Q4") {
          return (
            <p key={item.id}>
              {`<textInput x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" degree="${item.degree}"> <text><![CDATA[<p></p>]]></text> </textInput>`}
            </p>
          );
        }
        return null; // Return null for other items
      })}
      {question4 && <div>{`</homeworkQuestion>`}</div>}
      {question1 || question2 || question3 || question4 ? (
        <div>
          {`
          </homework>
          `}
        </div>
      ) : null}
    </div>
  );

  const plainText = () => {
    const jsxContent = JSXContent();
    const textContent = reactToText(jsxContent);
    return textContent;
  };

  const downloadXmlFile = () => {
    const blob = new Blob([plainText()], { type: "text/xml" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "exportXMLPage.xml";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      {JSXContent()}
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={downloadXmlFile}
      >
        Download XML
      </button>
    </div>
  );
};

export default Export;
