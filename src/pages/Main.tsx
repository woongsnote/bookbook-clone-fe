import { useAppSelector } from "../hooks/storeHooks";
import Layout from "../components/common/Layout";
import PageContainer from "../components/common/PageContainer";
import MainHeader from "../components/main/MainHeader";
import SearchForm from "../components/search/SearchForm";
import ReviewSection from "../components/main/ReviewSection";

const Main = () => {
  const { towerMode } = useAppSelector((state) => state);

  return (
    <Layout>
      <PageContainer>
        <MainHeader towerMode={towerMode} />
        <SearchForm />
        <ReviewSection towerMode={towerMode} />
      </PageContainer>
    </Layout>
  );
};

export default Main;
