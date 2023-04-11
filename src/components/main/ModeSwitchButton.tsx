const ModeSwitchButton = ({ setTowerMode }: any) => {
  const modeTower = () => {
    setTowerMode(true);
  };

  const modeList = () => {
    setTowerMode(false);
  };

  return (
    <div className="inline-flex " role="group">
      <button
        className="  py-2
  px-2
  text-sm
  font-medium
  text-gray-900 
  border-r-2
  border-rose-400
  focus:z-10 
  focus:bg-rose-400
  focus:text-white"
        onClick={() => {
          modeTower();
        }}>
        쌓아보기
      </button>

      <button
        className="  py-2
  px-2
  text-sm
  font-medium
  text-gray-900 
  border-l-2
  border-rose-400
  focus:z-10 
  focus:bg-rose-400
  focus:text-white"
        onClick={() => {
          modeList();
        }}>
        리스트보기
      </button>
    </div>
  );
};

export default ModeSwitchButton;
