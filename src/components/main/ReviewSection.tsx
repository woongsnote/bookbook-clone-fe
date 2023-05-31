import { useEffect } from "react";
import { getReviews } from "../../features/review/reviewSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import BookList from "./BookList";
import BookTower from "./BookTower";

const ReviewSection = ({ towerMode }: { towerMode: boolean }) => {
  const { reviews } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  return (
    <section className="my-8">
      {towerMode ? (
        <BookTower reviews={reviews.data} />
      ) : (
        <BookList reviews={reviews.data} />
      )}
    </section>
  );
};

export default ReviewSection;
