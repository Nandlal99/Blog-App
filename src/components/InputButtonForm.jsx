import React from 'react';

const InputButtonForm = ({ label, type = 'text', ...props }, ref) => {
  return (
    <div className="m-5 p-3">
      {label && <label>{label}</label>}
      <input
        type={type}
        ref={ref}
        {...props}
        className="p-1 px-2 border-solid border-2 border-black"
      />
    </div>
  );
};

export default React.forwardRef(InputButtonForm);
