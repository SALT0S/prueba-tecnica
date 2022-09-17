import { ChangeEvent, useContext, useState } from "react";
import { EntriesContext } from "../../context/entries";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState("");

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-row items-center gap-2 justify-between w-full mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={onTextFieldChanged}
        className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        placeholder="What do you need to do today?"
      />

      <button
        onClick={() => {
          addNewEntry(inputValue);
          setInputValue("");
        }}
        className="px-3 py-2 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      >
        Add
      </button>
    </div>
  );
};
