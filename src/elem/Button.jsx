import tw from "tailwind-styled-components";

const Button = ({ props, children }) => {
  return <TwButton {...props}>{children}</TwButton>;
};

const TwButton = tw.button`
block
bg-gray-800
hover:bg-gray-700
active:bg-gray-600
focus-visible:ring
ring-gray-300
text-white
text-sm
md:text-base
font-semibold
text-center
rounded-lg
outline-none
transition
duration-100
px-8
py-3`;

export default Button;
