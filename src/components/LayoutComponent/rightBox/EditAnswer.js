import { useContext } from "react";
import DataContext from "../../../Context/dataContext";
import classes from "../../../styles/userInput.module.css";
import { BsCheck } from "react-icons/bs";

const EditAnswer = ({
  editAnswerValues,
  setEditAnswerValues,
  setIsshowEditAnswer
}) => {
  const ctxData = useContext(DataContext);

  const handleEditQuestionSubmit = (e) => {
    e.preventDefault();
    ctxData.updatedValues(editAnswerValues);
    console.log(editAnswerValues);
    setIsshowEditAnswer(false);
    ctxData.editedData = true;
  };
  return (
    <form
      onSubmit={handleEditQuestionSubmit}
      className="bg-white shadow-md rounded px-6 pt-2 pb-2 mb-4 text-center"
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          setIsshowEditAnswer(false);
        }}
      >
        X
      </div>
      <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2">X</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="id"
          value={editAnswerValues.x}
          onChange={(e) => {
            setEditAnswerValues({ ...editAnswerValues, x: e.target.value });
          }}
          placeholder="X"
        />
      </div>

      <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2">Y</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="id"
          value={editAnswerValues.y}
          onChange={(e) => {
            setEditAnswerValues({ ...editAnswerValues, y: e.target.value });
          }}
          placeholder="Y"
        />
      </div>

      <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Height
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="id"
          value={editAnswerValues.height}
          onChange={(e) => {
            setEditAnswerValues({
              ...editAnswerValues,
              height: e.target.value
            });
          }}
          placeholder="Height"
        />
      </div>

      <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Width
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="value"
          value={editAnswerValues.width}
          onChange={(e) => {
            setEditAnswerValues({
              ...editAnswerValues,
              width: e.target.value
            });
          }}
          placeholder="Width"
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Degree
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="id"
          value={editAnswerValues.degree}
          onChange={(e) => {
            setEditAnswerValues({
              ...editAnswerValues,
              degree: e.target.value
            });
          }}
          placeholder="Degree"
        />
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <BsCheck size={30} />
      </button>
    </form>
  );
};

export default EditAnswer;
