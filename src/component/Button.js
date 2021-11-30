import React from "react";

function Button({ onPress, btnText, size, type, width }) {
  return (
    <button
      type="button"
      onClick={onPress}
      class={`btn btn-${type} btn-${size} w-${width}`}
    >
      {btnText}
    </button>
  );
}

export default Button;
