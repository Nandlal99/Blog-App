import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const nagivate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleBack = () => {
    nagivate('/');
  };

  return (
    <div className="m-5 px-10 py-5 flex flex-col items-center border-solid border-2 border-black  justify-center">
      <h2 className="font-semibold my-5">Add a new Blog </h2>
      <form>
        <div className="my-3">
          <label>BlogName :</label>
          <input
            type="text"
            placeholder="Enter the blog name"
            className="border-solid border-2 border-black p-2 mx-2"
          />
        </div>
        <div className="my-3">
          <label>Category :</label>
          <input
            type="text"
            placeholder="Enter the Category"
            className="border-solid border-2 border-black p-2 mx-2"
          />
        </div>
        <div className="my-3">
          <label>Article :</label>
          <textarea
            type="text"
            placeholder="Enter the description"
            className="border-solid border-2 border-black p-2 mx-2"
          />
        </div>
        <div className="my-3">
          <label>Author Name :</label>
          <input
            type="text"
            placeholder="Enter the description"
            className="border-solid border-2 border-black p-2 mx-2"
          />
        </div>
        <div className="flex justify-center my-3">
          <button
            onClick={handleBack}
            className="border-solid border-2 border-black px-2 mx-2"
          >
            Back
          </button>
          <button
            type="submit"
            className="border-solid border-2 border-black px-2 mx-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
