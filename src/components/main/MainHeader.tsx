import ModeSwitchButton from "./ModeSwitchButton";

type MainHeaderProps = {
  towerMode: boolean;
};

const MAIN_TITLE = "나의 독후감";

const MainHeader = ({ towerMode }: MainHeaderProps) => {
  return (
    <div className="flex justify-between mb-4">
      <h2 className="w-1/2 lg:w-2/3 font-bold text-2xl">{MAIN_TITLE}</h2>
      <ModeSwitchButton />
    </div>
  );
};

export default MainHeader;
