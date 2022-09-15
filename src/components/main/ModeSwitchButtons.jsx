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
  px-2
  text-sm
  font-medium
  text-gray-900 
  border-r-2
  border-rose-400
  focus:z-10 
  focus:bg-rose-400
  focus:text-white
`;

const ListButton = tw.button`
  py-2
  px-2
  text-sm
  font-medium
  text-gray-900 
  border-l-2
  border-rose-400
  focus:z-10 
  focus:bg-rose-400
  focus:text-white
`;
