import tw from "tailwind-styled-components";
const ModeSwitchButtons = ({ setTowerMode }) => {
  const modeTower = () => {
    setTowerMode(true);
  };

  const modeList = () => {
    setTowerMode(false);
  };

  return (
    <div className="inline-flex " role="group">
      <TowerButton
        onClick={() => {
          modeTower();
        }}
      >
        쌓아보기
      </TowerButton>

      <ListButton
        onClick={() => {
          modeList();
        }}
      >
        리스트보기
      </ListButton>
    </div>
  );
};

export default ModeSwitchButtons;

const TowerButton = tw.button`
  py-2
  px-4
  text-sm
  font-medium
  text-gray-900 
  border-r-2
  border-bBlue-100
  hover:bg-Bblue
  hover:text-white
  focus:z-10 
  focus:ring-2 
  focus:ring-gray-500 
  focus:bg-Bblue
  focus:text-white 
  m-r-2
`;

const ListButton = tw.button`
    py-2
  px-4
  text-sm
  font-medium
  text-gray-900 
  
  hover:bg-Bblue
  hover:text-white
  focus:z-10 
  focus:ring-2 
  focus:ring-gray-500 
  focus:bg-Bblue
  focus:text-white 
`;
