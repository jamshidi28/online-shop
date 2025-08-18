
function TextField({label,name, value,onChange,placeholder}) {
  return (
    <div className="">
      <label htmlFor={name} className=" absolute right-3 -top-2 bg-white px-1 text-xs text-gray-8 font-light z-10">{label}</label>
      <input 
      type="text"
      id={name} 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full py-2 px-4 mb-6 rounded-md text-gray-8 text-sm border-[1.5px] border-gray-8 outline-none duration-200 transition-all ease-in-out  focus:outline-none  focus:shadow-input-focus focus:bg-gray-1" />
    </div>
  )
}

export default TextField
