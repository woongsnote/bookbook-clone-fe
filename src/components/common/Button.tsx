type ButtonProps = {
  props?: any;
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ props, children, onClick }: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="block bg-Bblue active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold
      text-center rounded-lg outline-none transition duration-100 px-8 py-3 disabled:opacity-75 disabled:cursor-none">
      {children}
    </button>
  );
};

export default Button;
