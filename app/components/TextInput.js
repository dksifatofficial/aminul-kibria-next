function TextInput({icon, ...rest}) {
  return (
    <div className="w-full h-[50px] bg-white flex items-center border 
       border-neutral-200 p-0.5 rounded-[5px] border-solid">
        <input className="h-full w-full bg-white text-base font-medium 
        outline-none cursor-pointer px-[0.7rem] py-[0.3rem] border-[none]"
        {...rest} />
        <span className="w-10 h-10 flex items-center justify-center cursor-pointe material-icons-outlined"> {icon} </span>
    </div>
  )
}

export default TextInput