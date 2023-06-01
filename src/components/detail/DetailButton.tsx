type DetailButtonProps = {
  title: string;
  onClickHandler: () => void;
};

const DetailButton = ({ title, onClickHandler }: DetailButtonProps) => {
  return (
    <button
      className="w-24 rounded-full mx-4 px-4 py-2 hover:bg-Bblue hover:text-white"
      onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default DetailButton;
