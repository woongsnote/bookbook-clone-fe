import { ChangeEvent, Dispatch, SetStateAction } from "react";

type MaxPageProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const MaxPage = ({ page, setPage }: MaxPageProps) => {
  const onChangePage = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(+e.target.value);
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col items-start">
        <span className="text-black text-xl font-bold"> 📖페이지</span>
        <input
          type="number"
          className="w-[150px] rounded-[15px]"
          onChange={onChangePage}
          placeholder={page.toString()}
        />
      </div>
    </div>
  );
};

export default MaxPage;
