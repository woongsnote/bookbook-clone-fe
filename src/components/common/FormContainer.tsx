import React from "react";
import Logo from "./Logo";

const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex items-center justify-center flex-col mt-24 w-fit p-4 gap-3">
      <Logo />
      {children}
    </div>
  );
};

export default FormContainer;
