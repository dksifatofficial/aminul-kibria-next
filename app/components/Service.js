function Service({ className, children, ...rest }) {
  return (
    <div className={`${"w-full p-4 lg:w-6/12 lg:p-4"} ${className}`} {...rest}>
      <div
        className="w-full min-h-[20rem] overflow-hidden bg-white 
      shadow-[1px_5px_30px_rgb(228,226,226)] 
      dark:shadow-[1px_5px_30px_rgb(26,25,25)]
      p-5 rounded-[10px] lg:min-h-[26rem] lg:p-[50px]"
      >
        {children}
      </div>
    </div>
  );
}

export default Service;
