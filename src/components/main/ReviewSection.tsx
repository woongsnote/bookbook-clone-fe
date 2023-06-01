import { useEffect } from "react";
import { getReviews } from "../../features/review/reviewSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import BookList from "./BookList";
import BookTower from "./BookTower";

const ReviewSection = ({ towerMode }: { towerMode: boolean }) => {
  const dispatch = useAppDispatch();
  const { reviews } = useAppSelector((state) => state.reviews);
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  return (
    <section className="my-4">
      {towerMode ? (
        <BookTower reviews={reviews} />
      ) : (
        <BookList reviews={reviews} />
      )}
    </section>
  );
};

export default ReviewSection;
