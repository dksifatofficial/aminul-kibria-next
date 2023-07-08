function Portfolio({ children }) {
  return (
    <>
      <div className="w-[380px] pb-[15px]">
        <div
          className="w-[380px] h-[250px] overflow-hidden
          shadow-[1px_5px_10px_rgb(206,205,205)] rounded-[10px]
          flex justify-center dark:shadow-none dark:ring-1 dark:ring-white"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
