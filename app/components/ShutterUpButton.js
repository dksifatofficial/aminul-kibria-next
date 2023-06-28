function ShutterUpButton({ children }) {
  return (
    <button
      className=" bg-[#f75023] dark:bg-[#8e78f0] text-[#f8f4f4] dark:text-[#070707] relative overflow-hidden 
    transition-[background-color] duration-[0.1s] ease-linear z-[1] cursor-pointer 
    text-center w-[180px] px-10 py-[5px] rounded-[50px] 
    border-[none] border-2 border-solid border-[#f75023] dark:border-[#8e78f0]
    before:absolute before:w-full before:h-0 before:bg-white dark:before:bg-[#070707]
    before:transition-[height] before:duration-[0.2s] before:ease-linear 
    before:z-[-1] before:left-0 before:top-0 
    hover:text-[#070707] dark:hover:text-[#f8f4f4] hover:before:h-full"
    >
      <span className="text-base font-bold p-0">{children}</span>
    </button>
  );
}

export default ShutterUpButton;
