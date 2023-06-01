const DetailCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white p-2 dark:bg-gray-800 dark:text-white">
      {children}
    </div>
  );
};

export default DetailCardContainer;
