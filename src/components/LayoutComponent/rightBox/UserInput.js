import classes from "../../../styles/layout.module.css";
const QuestionInput = ({ sameValues, setSameValues }) => {
  console.log("same", sameValues);
  return (
    <div>
      {Object.keys(sameValues).map((key, index) => {
        return (
          <div key={index}>
            <div>
              <div className={classes.text}>
                <label> {key}</label>
              </div>
              <input
                disabled="disabled"
                style={{
                  marginLeft: "5.5rem"
                }}
                className="text-black border-transparent focus:border-transparent focus:ring-0 w-16 bg-[#9BCFE7] "
                onChange={(e) => {
                  setSameValues({ ...sameValues, [key]: e.target.value });
                }}
                value={sameValues[key]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default QuestionInput;
