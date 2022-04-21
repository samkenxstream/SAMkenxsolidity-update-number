import React from "react";
import { FloatInput } from "components/forms";

type Props = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  setValues: Function;
};

const Form: React.FC<Props> = ({ setValues, onSubmit }) => {
  return (
    <form className="text-black" onSubmit={onSubmit}>
      <FloatInput
        type="number"
        min={0}
        name="eth"
        label="Eth"
        onChange={(e) =>
          setValues((prev: Obj) => ({ ...prev, eth: e.target.value }))
        }
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
