import React from "react";

function Button({ onPress, btnText, size, type, width }) {
  return (
    <button
      type="button"
      onClick={() => onPress()}
      className={`btn btn-${type} btn-${size} w-${width}`}
    >
      {btnText}
    </button>
  );
}

export default Button;
