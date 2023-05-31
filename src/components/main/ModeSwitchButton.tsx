import { toggleListView, toggleStackView } from "../../features/mode/modeSlice";
import { useAppDispatch } from "../../hooks/storeHooks";
//TODO 첫 시작했을 때 쌓아보기 활성 상태로 보이도록 수정
// type ModeSwitchProps = {
//   towerMode: boolean;
// };

const ModeSwitchButton = () => {
  const dispatch = useAppDispatch();
  
  const onToggleStackView = () => dispatch(toggleStackView());
  const onToggleListView = () => dispatch(toggleListView());

  return (
    <div className="inline-flex " role="group">
      <button
        className="py-2 px-2 text-sm font-medium text-gray-900 border-r-2 border-rose-400 focus:z-10 focus:bg-rose-400 focus:text-white"
        onClick={onToggleStackView}>
        쌓아보기
      </button>
      <hr className="h-2" />
      <button
        className="py-2  px-2  text-sm  font-medium  text-gray-900   border-l-2  border-rose-400  focus:z-10   focus:bg-rose-400  focus:text-white"
        onClick={onToggleListView}>
        리스트보기
      </button>
    </div>
  );
};

export default ModeSwitchButton;
