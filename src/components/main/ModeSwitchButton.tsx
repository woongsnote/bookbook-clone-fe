import { toggleMode } from "../../features/mode/modeSlice";
import { useAppDispatch } from "../../hooks/storeHooks";

const ModeSwitchButton = ({ towerMode }: { towerMode: boolean }) => {
  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toggleMode());

  return (
    <div className="inline-flex " role="group">
      <button
        className="py-2 px-2 text-sm font-medium text-gray-900 border-r-2 border-rose-400 focus:z-10 focus:bg-rose-400 focus:text-white"
        onClick={() => {
          onToggle();
        }}>
        쌓아보기
      </button>
      <hr className="h-2" />
      <button
        className="py-2  px-2  text-sm  font-medium  text-gray-900   border-l-2  border-rose-400  focus:z-10   focus:bg-rose-400  focus:text-white"
        onClick={() => {
          onToggle();
        }}>
        리스트보기
      </button>
    </div>
  );
};

export default ModeSwitchButton;
