// import { icons } from "react-icons/lib";
import { BiEditAlt } from "react-icons/bi";

const SortedQuestion = ({
  SortedArray,
  layoutQuestion,
  declarations,
  setModalOpen,
  setEditDecID,
  setIsshowEditQuestion,
  setEditQuestionValues,
  setIsshowEditAnswer,
  setEditAnswerValues
}) => {
  let val = declarations.find((o) => o.question === layoutQuestion);

  const editFunction = (declaration) => {
    setEditDecID(declaration.ID);
    console.log("CTX", declarations);
    setModalOpen(true);
  };

  const handleQuestionEdit = (data) => {
    setIsshowEditQuestion(true);
    setEditQuestionValues(data);
  };

  const handleAnswerEdit = (data) => {
    setIsshowEditAnswer(true);
    setEditAnswerValues(data);
  };

  return (
    <div>
      <>
        {declarations.map((declaration) => {
          return (
            <>
              {declaration.question === layoutQuestion && (
                <>
                  {val && <h4>&lt;{"declarations"}&gt;</h4>}

                  {declaration.variables.map((variable) => {
                    return (
                      <>
                        {variable.type === "String" && (
                          <p>
                            &lt;{"string ID="}&quot;
                            {variable.id}
                            &quot;&gt;
                            {variable.value}
                            &lt;{"/string"}&gt;
                          </p>
                        )}
                        {variable.type === "Float" && (
                          <p>
                            &lt;{"float ID="}&quot;
                            {variable.id}
                            &quot;&gt;
                            {variable.value}
                            &lt;{"/float"}&gt;
                          </p>
                        )}
                        {variable.type === "Int" && (
                          <p>
                            &lt;{"int ID="}&quot;
                            {variable.id}
                            &quot;&gt;
                            {variable.value}
                            &lt;{"/int"}&gt;
                          </p>
                        )}
                      </>
                    );
                  })}
                  {declaration.functs.map((item) => {
                    return (
                      <>
                        <p>
                          &lt;{"function ID="}&quot;
                          {item.iD}
                          &quot;&gt;&lt; {"![CDATA["}
                          {item.val}
                          {"]]"}&gt;&lt;{"/function"}&gt;
                        </p>
                      </>
                    );
                  })}
                  {val && <h4>&lt;{"/declarations"}&gt;</h4>}
                  <button
                    onClick={() => {
                      editFunction(declaration);
                    }}
                    style={{
                      margin: "2px",
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "2px",
                      border: "none"
                    }}
                  >
                    <BiEditAlt size={20} />
                  </button>
                </>
              )}
            </>
          );
        })}

        {/* ----------------- Functions ------------- */}

        {/* question and answer */}

        {SortedArray.map((item) => {
          return (
            <>
              {item.type === "Question" && (
                <>
                  {item.questionSet === layoutQuestion && (
                    <div className="flex">
                      <p>
                        &lt;{"textField x="}&quot;
                        {item.x}
                        &quot;{" y="}&quot;
                        {item.y}
                        &quot;{" width="}&quot;
                        {item.width}
                        &quot; {" height="}&quot;
                        {item.height}
                        &quot;{" id="}&quot;
                        {item.id}
                        &quot;{" degree="}&quot;
                        {item.degree}
                        &quot;&gt; &lt;{"text"}&gt;&lt;{"![CDATA["}&lt;
                        {"p class="}&quot;{"questionText"}&quot;&gt;
                        {item.question}
                        &lt;{"/p"}&gt;{"]]"}&gt;&lt;{"/text"}&gt; &lt;
                        {"/textField"}&gt;
                      </p>
                      <button
                        onClick={() => {
                          handleQuestionEdit(item);
                        }}
                        style={{
                          margin: "2px",
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "2px",
                          border: "none"
                        }}
                      >
                        <BiEditAlt size={20} />
                      </button>
                    </div>
                  )}
                </>
              )}

              {item.type === "Answer" && (
                <div className="flex">
                  {item.questionSet === layoutQuestion && (
                    <>
                      <p>
                        &lt;{"textInput x="}&quot;
                        {item.x}
                        &quot;{" y="}&quot;
                        {item.y}
                        &quot;{" width="}&quot;
                        {item.width}
                        &quot; {" height="}&quot;
                        {item.height}
                        &quot;{" id="}&quot;
                        {item.id}
                        &quot;{" degree="}&quot;
                        {item.degree}
                        &quot;&gt; &lt;{"text"}&gt;&lt;{"![CDATA["}&lt;{"p"}
                        &gt; &lt; {"/p"}&gt;{"]]"}&gt;&lt;{"/text"}&gt; &lt;
                        {"/textInput"}&gt;
                      </p>
                      <button
                        onClick={() => {
                          handleAnswerEdit(item);
                        }}
                        style={{
                          margin: "2px",
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "2px",
                          border: "none"
                        }}
                      >
                        <BiEditAlt size={20} />
                      </button>
                    </>
                  )}
                </div>
              )}
            </>
          );
        })}
      </>
    </div>
  );
};
export default SortedQuestion;
