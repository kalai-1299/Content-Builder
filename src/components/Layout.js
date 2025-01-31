import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState
} from "react";
import TextField from "./LayoutComponent/leftBox/TextField";
import classes from "../styles/layout.module.css";
import ContextData from "../../src/Context/dataContext";
import AnswerField from "./LayoutComponent/leftBox/AnswerField";
import Sorted from "./LayoutComponent/bottomBox/SortedQuestion";
import Mapping from "./LayoutComponent/middleBox/Mapping";
import { defaultObj } from "../Data/constants";
import QuestionInput from "./LayoutComponent/rightBox/UserInput";
import Export from "./LayoutComponent/bottomBox/export";
import Items from "../Data/field";
import Form from "./LayoutComponent/rightBox/declarationForm";
import EditForm from "./LayoutComponent/rightBox/editDeclaration";
import TitleForm from "./LayoutComponent/topBox/titleForm";
import EditQuestion from "./LayoutComponent/rightBox/editQuestion";
import EditAnswer from "./LayoutComponent/rightBox/EditAnswer";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { numberOfquestion } from "../Data/questionSet";

const Layout = () => {
  const ctxdata = useContext(ContextData);

  const [focusIdForInputField, setFocusIdForInputField] = useState(0);
  const [focusedField, setFocusedField] = useState("");
  const [idForInputField, setIdForInputField] = useState(0);
  const [SortedArray, setSortedArray] = useState([]);
  const [question, setQuestion] = useState("Q1");
  const [exported, setExported] = useState(false);
  const [code, setCode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalForTitleForm, setModalForTitleForm] = useState(false);
  const [inputSelected, setInputSelected] = useState(false);
  const [editDecID, setEditDecID] = useState("");
  const [editDecQn, setEditDecQn] = useState(false);
  const [isShowInputboxes, setIsShowInputboxes] = useState(false);

  const [isshowEditQuestion, setIsshowEditQuestion] = useState(false);
  const [editQuestionValues, setEditQuestionValues] = useState({});
  let [isOpenExport, setIsOpenExport] = useState(false);

  const [isshowEditAnswer, setIsshowEditAnswer] = useState(false);
  const [editAnswerValues, setEditAnswerValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [XYData, setXYData] = useState();

  const q1Data = JSON.parse(localStorage.getItem(question));
  let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    let val = ctxdata?.declarationData?.find((o) => o.ID === editDecID);
    if (val) {
      setEditDecQn(true);
    }
  }, [editDecID, ctxdata.declarationData]);

  const index = ctxdata.items.findIndex((object) => {
    return object.id === focusIdForInputField;
  });

  const [sameValues, setSameValues] = useState({
    ...defaultObj
  });

  const selectorFN = (item) => {
    if (item.fn === 1) {
      handleInputArray(item);
    }
    if (item.fn === 2) {
      handleAnswerArray(item);
    }
    if (item.fn === 3) {
      setModalOpen(true);
    }
  };

  const takeXYValues = (item) => {
    setXYData(item);
  };
  console.log("xyxdaata", XYData);
  const handleInputArray = () => {
    setIdForInputField(idForInputField + 1);
    const obj = {
      ...defaultObj,
      id: idForInputField,
      questionSet: question,
      type: "Question"
    };
    ctxdata.allData(obj);

    ctxdata.getComponent({
      componetAdded: (
        <TextField
          idForInputField={idForInputField}
          setInputSelected={setInputSelected}
          setIsShowInputboxes={setIsShowInputboxes}
        />
      ),
      id: idForInputField,
      questionSet: question,
      type: "Question"
    });
  };

  const handleAnswerArray = () => {
    setIdForInputField(idForInputField + 1);
    const obj = {
      ...defaultObj,
      id: idForInputField,
      questionSet: question,
      type: "Answer"
    };
    ctxdata.allData(obj);

    ctxdata.getAnswercomponent({
      componetAdded: (
        <AnswerField
          idForInputField={idForInputField}
          setInputSelected={setInputSelected}
          setIsShowInputboxes={setIsShowInputboxes}
          takeXYValues={takeXYValues}
        />
      ),
      id: idForInputField,
      questionSet: question,
      type: "Answer"
    });
  };

  // ------------------------------------------------------------------------

  useEffect(() => {
    setSameValues({
      x: ctxdata?.items[index]?.x,
      y: ctxdata?.items[index]?.y,
      height: ctxdata?.items[index]?.height,
      width: ctxdata?.items[index]?.width,
      degree: ctxdata?.items[index]?.degree,
      question: ctxdata?.items[index]?.question
    });
  }, [focusIdForInputField, ctxdata?.items[index]]);

  // ------------------------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      x: Number(sameValues.x),
      y: Number(sameValues.y),
      height: Number(sameValues.height),
      width: Number(sameValues.width),
      id: focusIdForInputField,
      degree: Number(sameValues.degree),
      question: sameValues.question
    };
    ctxdata.updatedValues(obj);
  };

  const ChildTransfer1 = (item) => {
    setFocusIdForInputField(item);
  };
  const ChildTransfer2 = (item) => {
    setFocusedField(item);
  };

  // ------------------------------------------------------------------------

  const handleDeleteQuestion = () => {
    const updatedQuestionArray = ctxdata.componentArray.filter((obj) => {
      return obj.id !== focusIdForInputField;
    });
    ctxdata.getComponent(updatedQuestionArray);

    const updatedArray = ctxdata.items.filter((obj) => {
      return obj.id !== focusIdForInputField;
    });
    ctxdata.allData(updatedArray);
  };
  const handleDeleteAnswer = () => {
    const updatedAnswerArray = ctxdata.answerComponent.filter((obj) => {
      return obj.id !== focusIdForInputField;
    });
    ctxdata.getAnswercomponent(updatedAnswerArray);

    const updatedArray = ctxdata.items.filter((obj) => {
      return obj.id !== focusIdForInputField;
    });
    ctxdata.allData(updatedArray);
  };

  // ------------------------------------------------------------------------

  useEffect(() => {
    let sortedArray = ctxdata.items.sort((r1, r2) =>
      r1.y > r2.y ? 1 : r1.y < r2.y ? -1 : 0
    );
    setSortedArray(sortedArray);
  }, [isshowEditAnswer, isshowEditQuestion, ctxdata]);
  const openModal = () => {
    setIsModalOpen(!isModalOpen);

    // sorting array
    let sortedArray = ctxdata.items.sort((r1, r2) =>
      r1.y > r2.y ? 1 : r1.y < r2.y ? -1 : 0
    );
    setSortedArray(sortedArray);
    setCode(!code);
  };

  function closeModalExport() {
    setIsOpenExport(false);
  }

  function openModalExport() {
    setIsOpenExport(true);
    let sortedArray = ctxdata.items.sort((r1, r2) =>
      r1.y > r2.y ? 1 : r1.y < r2.y ? -1 : 0
    );
    setSortedArray(sortedArray);
  }
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {!exported && (
        <>
          <div className={classes.up_box}>
            <div className="flex justify-center">
              {numberOfquestion.map((item) => {
                return (
                  <div
                    onClick={() => {
                      setQuestion(item.question);
                      setModalOpen(false);
                    }}
                    className={` flex  items-center justify-between h-8 w-32 ${
                      question === item.question ? "bg-white" : "bg-gray-300"
                    } border border-gray-300 rounded-t-lg shadow-md hover:shadow-lg`}
                  >
                    {item.question}
                    <span className="ml-2 text-gray-700">{}</span>
                    <button
                      className="mr-2 text-gray-700 hover:text-gray-500 focus:outline-none"
                      onClick={() => {
                        setModalForTitleForm(true);
                        setIsOpen(true);
                      }}
                    >
                      <FiEdit2 />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.top_box}>
            <div className={classes.left_box}>
              <div className={classes.innerbox1}>
                {Items.map((item) => (
                  <button
                    className={classes.btn_input}
                    onClick={() => {
                      selectorFN(item);
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div></div>
            </div>

            <div
              className={classes.canvas}
              style={{
                backgroundColor: inputSelected ? "rgb(243,243,243)" : "white"
              }}
            >
              {/*-------------------Form----------------*/}
              <div className="flex  mx-96 fixed mt-[90vh]">
                <div
                  onClick={openModal}
                  className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white  py-1 px-4 rounded mr-2"
                >
                  Get Code
                </div>
                <div
                  className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white  py-1 px-4 rounded"
                  onClick={openModalExport}
                >
                  Export
                </div>
              </div>
              {isModalOpen && (
                <div
                  className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-500 transform transition-transform duration-1000 ${
                    isOpen ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <div className="p-4">
                    {/* Modal content */}

                    {isModalOpen && (
                      <Sorted
                        SortedArray={SortedArray}
                        setModalOpen={setModalOpen}
                        setEditDecID={setEditDecID}
                        setIsshowEditQuestion={setIsshowEditQuestion}
                        layoutQuestion={question}
                        declarations={ctxdata.declarationData}
                        setEditQuestionValues={setEditQuestionValues}
                        setIsshowEditAnswer={setIsshowEditAnswer}
                        setEditAnswerValues={setEditAnswerValues}
                      />
                    )}
                  </div>

                  <div className="p-4 text-right">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <Transition appear show={isOpenExport} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={closeModalExport}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-scrren  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <div className="">
                            <button
                              type="button"
                              className="inline-flex  justify-center rounded-md border border-transparent bg-blue-100 p-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModalExport}
                            >
                              X
                            </button>
                          </div>
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            XML Code
                          </Dialog.Title>
                          <div className="mt-2 mx-8">
                            <div class="w-full w-screen">
                              <Export
                                setExported={true}
                                SortedArray={SortedArray}
                                declarations={ctxdata.declarationData}
                                functions={ctxdata.functionData}
                              />
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
              <Mapping
                question={ctxdata.componentArray}
                answer={ctxdata?.answerComponent}
                ChildTransfer1={ChildTransfer1}
                ChildTransfer2={ChildTransfer2}
                layoutQuestion={question}
              />
              <p
                style={{
                  zIndex: "-3"
                }}
              >
                {question} -
                {` ${q1Data?.questionTitle || "title will be here"}`}
              </p>

              {modalForTitleForm && (
                <div className={classes.modalcontainer}>
                  <TitleForm
                    setModalForTitleForm={setModalForTitleForm}
                    setIsOpen={setIsOpen}
                    layoutQuestion={question}
                    isOpen={isOpen}
                  />
                </div>
              )}
            </div>

            {/* Right Box */}

            <div className={classes.right_box}>
              <div className={classes.innerbox1}>
                <div>
                  {/* User Input */}
                  {inputSelected && (
                    <div className="">
                      <QuestionInput
                        sameValues={{ x: sameValues.x, y: sameValues.y }}
                        setSameValues={setSameValues}
                      />
                    </div>
                  )}
                  {isshowEditQuestion && (
                    <EditQuestion
                      setEditQuestionValues={setEditQuestionValues}
                      editQuestionValues={editQuestionValues}
                      setIsshowEditQuestion={setIsshowEditQuestion}
                    />
                  )}
                  {isshowEditAnswer && (
                    <EditAnswer
                      setEditAnswerValues={setEditAnswerValues}
                      editAnswerValues={editAnswerValues}
                      setIsshowEditAnswer={setIsshowEditAnswer}
                    />
                  )}
                  {focusedField === "Question" && ctxdata.items.length > 0 && (
                    <button
                      onClick={(e) => {
                        handleDeleteQuestion(e);
                      }}
                      className="mx-28"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  )}
                  {focusedField === "Answer" && (
                    <button
                      onClick={(e) => {
                        handleDeleteAnswer(e);
                      }}
                      className="mx-28"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  )}
                  {/* Declaration form */}
                  {modalOpen && (
                    <div>
                      {editDecQn ? (
                        <>
                          <EditForm
                            editDecID={editDecID}
                            setEditDecID={setEditDecID}
                            setEditDecQn={setEditDecQn}
                            setModalOpen={setModalOpen}
                            layoutQuestion={question}
                          />
                        </>
                      ) : (
                        <Form
                          setModalOpen={setModalOpen}
                          idForInputField={idForInputField}
                          setIdForInputField={setIdForInputField}
                          layoutQuestion={question}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------Bottom box---------------- */}
        </>
      )}

      {/* ------------------- form ------------------------- */}
    </div>
  );
};

export default Layout;
