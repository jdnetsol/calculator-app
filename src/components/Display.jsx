import React, {useEffect} from "react";

export const Display = (props) => {
    
  const { formula, setFormula, handleFormulaInputChange, result, setResult } = props;

  useEffect(() => {
      setResult("formula has changed, press equals for result")
  }, [formula])

  return (
    <div className="form__container">
      <label>
        Enter Formula : <span id="formulaDesc">e.g. 1+1 </span>
        <input
          name="formula"
          placeholder="Formula, e.g. 1+1"
          tabIndex="0"
          onChange={(e) => handleFormulaInputChange(e)}
              className="form form__input"
          type="text"
          value={formula}
          aria-describedby="formulaDesc"
        />
        
      </label>
      <p>Calculation will appear here: {formula && result && `${formula} = ${result}`}</p>
    </div>
  );
};
