import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
  name:string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, inputRef, name, onChange }: InputProps) => {
  return (
    <input
      className="w-full text-gray-800 border-b focus:border-b-black bg-transparent outline-none transition duration-100 px-3 py-2 my-4"
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      onChange={onChange}
      required
      name={name}
    />
  );
};

export default Input;
