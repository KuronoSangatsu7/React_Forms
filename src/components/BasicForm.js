import useInput from "../hooks/use-input";
import "./BasicForm.css"

const BasicForm = (props) => {
  const isNonEmpty = (value) => value.trim().length > 0;

  const {
    value: nameInputValue,
    valid: nameIsValid,
    invalid: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    blurChangeHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNonEmpty);

  const formIsValid = nameIsValid

  const submitHandler = (event) => {
    event.preventDefault()
    if(!formIsValid) return

    alert("Thank you for filling out the form. Your chances of running into a cat today went up by 50%!")
    resetName()
  }

  return (
      <form className="flex flex-col items-start mx-auto bg-slate-800 rounded-md p-4 backdrop-blur drop-shadow-lg w-3/5 space-y-2" onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={nameInputValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          className={nameIsInvalid && "bg-rose-200 border-rose-700"}
        />
        {nameIsInvalid && <div className="text-red-700">Name cannot be blank</div>}
        <button className="self-end">Submit</button>
      </form>
  );
};

export default BasicForm;
