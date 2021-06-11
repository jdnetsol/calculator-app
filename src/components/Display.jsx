import React from "react";

export const Display = (props) => {
  const { formula, setFormula, handleFormulaInputChange } = props;
  return (
    <div className="form__container">
      <label>
        Enter Formula :
        <input
          name="formula"
          placeholder="Formula, e.g. 1+1"
          tabIndex="-1"
          onChange={(e) => handleFormulaInputChange(e)}
        //   onClick={(e) => setFormula("")}
          className="form form__input"
          type="text"
          value={formula}
        />
      </label>
      <p>Result</p>
    </div>
  );
};
