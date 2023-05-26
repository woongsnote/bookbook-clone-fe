import { useEffect } from "react";
import Layout from "../components/common/Layout";
import SearchForm from "../components/search/SearchForm";
import ModeSwitchButton from "../components/main/ModeSwitchButton";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { getReviews } from "../features/review/reviewSlice";
import BookTower from "../components/main/BookTower";
import BookList from "../components/main/BookList";
import  ToggleButton  from "../components/common/ToggleButton";

const Main = () => {
  const { reviews, towerMode } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <Layout>
      <div className="mx-auto max-w-4xl pt-28 h-full">
        <div className="flex justify-between mb-4">
          <h2 className="w-1/2 lg:w-2/3 font-bold text-2xl">나의 독후감</h2>

          <ModeSwitchButton towerMode={towerMode}/>
        </div>
        <SearchForm />
        <div>
      <div>
      <ToggleButton  />
    
      </div>
      </div>

        {towerMode ? (
          <BookTower reviews={reviews.data} />
        ) : (
          <BookList reviews={reviews.data} />
        )}
      </div>
    </Layout>
  );
};

export default Main;
