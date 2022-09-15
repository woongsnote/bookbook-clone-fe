import Layout from "../components/common/Layout";
import tw from "tailwind-styled-components";
import BookList from "../components/main/BookList";
import SearchForm from "../components/search/SearchForm";
import BookTower from "../components/main/BookTower";
import { useEffect, useState } from "react";
import ModeSwitchButtons from "../components/main/ModeSwitchButtons.jsx";
import { useDispatch, useSelector } from "react-redux";
import { __getAllReviews } from "../redux/modules/postSlice";

const Main = () => {
  const dispatch = useDispatch();

  const [isTowerMode, setTowerMode] = useState(true);

  // TODO My character 설정(option)
  // const [myCharacter, setMyCharacter] = useState({});

  const { reviews } = useSelector((state) => state.postSlice);

  useEffect(() => {
    dispatch(__getAllReviews());
  }, []);

  return (
    <Layout>
      <HomeContainer>
        <HomeHeadContainer>
          <HomeTitle>나의 독후감</HomeTitle>

          <ModeSwitchButtons setTowerMode={setTowerMode} />
        </HomeHeadContainer>
        <SearchForm />

        {isTowerMode ? (
          <BookTower reviews={reviews} />
        ) : (
          <BookList reviews={reviews} />
        )}
      </HomeContainer>
    </Layout>
  );
};

export default Main;

const HomeContainer = tw.div`
mx-auto 
max-w-2xl 
border 
pt-28
h-full
`;

const HomeHeadContainer = tw.div`
flex
`;

const HomeTitle = tw.h2`
w-1/2
lg:w-2/3
`;
