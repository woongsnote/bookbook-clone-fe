import { useAppSelector } from "../../hooks/storeHooks";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { darkTheme } = useAppSelector((state) => state);

  return (
    <div className={`${darkTheme ? "dark" : ""} w-full h-full`}>
      {children}
    </div>
  );
};

export default Wrapper;
