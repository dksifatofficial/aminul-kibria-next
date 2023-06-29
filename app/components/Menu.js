function Menu({className, children }) {
  return (
    <div className={`${"w-full text-center flex justify-center p-0"} ${className}`}>
      <ul className="w-60 flex justify-around p-0">{children}</ul>
    </div>
  );
}

export default Menu;
