import tw from "tailwind-styled-components";
const ModeSwitchButtons = ({ setTowerMode }) => {
  const modeChange = () => {
    setTowerMode((prev) => !prev);
  };

  return (
    <div className="inline-flex rounded-md" role="group">
      <SwitchButton
        onClick={() => {
          modeChange();
        }}
      >
        쌓아보기
      </SwitchButton>

      <SwitchButton
        onClick={() => {
          modeChange();
        }}
      >
        리스트보기
      </SwitchButton>
    </div>
  );
};

export default ModeSwitchButtons;

const SwitchButton = tw.button`
  py-2
  px-4
  text-sm
  font-medium
  text-gray-900 
  bg-transparent
  border
  border-gray-900
  hover:bg-gray-900 
  hover:text-white
  focus:z-10 
  focus:ring-2 
  focus:ring-gray-500 
  focus:bg-gray-900
  focus:text-white 
  rounded-sm
`;
