import useInput from "../hooks/use-input";
import "./BasicForm.css";

const BasicForm = (props) => {
  const isNonEmpty = (value) => value.trim().length > 0;
  const isEmail = (value) => value.includes("@") && value.includes(".");

  const {
    value: nameInputValue,
    valid: nameIsValid,
    invalid: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    blurChangeHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNonEmpty);

  const {
    value: emailInputValue,
    valid: emailIsValid,
    invalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail)

  const formIsValid = nameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    alert(
      "Thank you for filling out the form. Your chances of running into a cat today went up by 50%!"
    );
    resetName()
    resetEmail()
  };

  return (
    <form
      className="flex flex-col items-start mx-auto bg-slate-800 rounded-md p-4 backdrop-blur drop-shadow-lg w-3/5 space-y-2"
      onSubmit={submitHandler}
    >
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={nameInputValue}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        className={nameIsInvalid ? "bg-rose-200 border-rose-700" : ""}
      />
      {nameIsInvalid && (
        <div className="text-red-700">Name cannot be blank</div>
      )}
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        value={emailInputValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        className={emailIsInvalid ? "bg-rose-200 border-rose-700" : ""}
      />
      {emailIsInvalid && (
        <div className="text-red-700">Invalid email format</div>
      )}
      <button className="self-end">Submit</button>
    </form>
  );
};

export default BasicForm;
