import React from "react";

export const Display = () => {
  return (
    <div className="calculator-display"><label>
        Formula : 
      <input
        name="formula"
        placeholder="Formula to calculate..."
        defaultValue="0"
        tabIndex="-1"
      />
</label>
      <p>Result</p>
    </div>
  );
};
