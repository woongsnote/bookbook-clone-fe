const BookImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="flex flex-col justify-between w-[20%] h-[40%] bg-Bwhite">
      <img src={imageUrl} alt="bookCover" className="object-none" />
    </div>
  );
};

export default BookImage;
