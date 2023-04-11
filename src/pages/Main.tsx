import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/common/Layout";
import BookList from "../components/main/BookList";
import SearchForm from "../components/search/SearchForm";
import BookTower from "../components/main/BookTower";
import ModeSwitchButton from "../components/main/ModeSwitchButton.js";
// import { __getAllReviews } from "../redux/modules/postSlice";

const Main = () => {
  // const dispatch = useDispatch();

  const [isTowerMode, setTowerMode] = useState(true);

  // TODO My character 설정(option)
  // const [myCharacter, setMyCharacter] = useState({});

  const { posts: reviews } = useSelector((state: any) => state.postSlice);

  useEffect(() => {
    // dispatch(__getAllReviews());
  }, []);

  return (
    <Layout>
      <div className="mx-auto max-w-2xl border pt-28 h-full">
        <div className="flex">
          <h2 className="w-1/2 lg:w-2/3">나의 독후감</h2>

          <ModeSwitchButton setTowerMode={setTowerMode} />
        </div>
        <SearchForm />

        {isTowerMode ? (
          <BookTower reviews={reviews} />
        ) : (
          <BookList reviews={reviews} />
        )}
      </div>
    </Layout>
  );
};

export default Main;
