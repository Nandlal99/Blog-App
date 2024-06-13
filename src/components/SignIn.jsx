import React from 'react';
import { useForm } from 'react-hook-form';
import InputButtonForm from './InputButtonForm.jsx';
import Button from './Button.jsx';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const nagivate = useNavigate();

  const handleBack = () => {
    nagivate('/');
  };

  const create = (data) => {
    console.log(data);
  };

  return (
    <div className="m-5 flex justify-center item-center">
      <form onSubmit={handleSubmit(create)}>
        <div className="m-5 p-5 flex flex-col items-center border-solid border-2 border-black  justify-center">
          <h2 className="font-bold">Sign Up</h2>
          <InputButtonForm
            label="User Name: "
            placeholder="Enter your user name"
            type="text"
            {...register('username', {
              required: true,
            })}
          />
          <InputButtonForm
            label="Email: "
            placeholder="you@example.com"
            type="email"
            {...register('email', {
              required: true,
            })}
          />
          <InputButtonForm
            label="Password: "
            type="password"
            placeholder="Enter 6 character or more"
            {...register('password', {
              required: true,
            })}
          />
          <div>
            <button
              onClick={handleBack}
              className="border-solid border-2 border-black px-2 mr-2"
            >
              Back
            </button>
            <Button type="submit" text="Sign Up" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
