const Input = ({
  htmlFor,
  label,
  type = "text",
  value,
  placeholder,
  isRequired,
  onChange,
  width = "md:w-full",
  bg ='bg-transparent',
  margin ="my-[1rem]",
  color="text-[#ef4444]",
  textcl,
  text
}) => {
  return (
    <div
      className={`${width} text-[#595959] w-full flex flex-col ${margin}`}
    >
      <label htmlFor={htmlFor} className={`${margin} ${textcl} ${text}`}>
        {label}
        {isRequired && <span className={`${color} ml-1`}>*</span>}
      </label>
      <input
        type={type}
        name={htmlFor}
        value={value}
        placeholder={placeholder}
        id={htmlFor}
        onChange={onChange}
        required={isRequired}
        className={`  border border-[#dcdcdc] text-[#595959] rounded-3xl h-[3.2rem] p-[1rem] focus:outline-none focus:ring-2 focus:ring-yellow-500 ${bg} m-auto focus:border focus:border-[#FFCA08] active:bg-red-100 w-full`}
      />
    </div>
  );
};

export default Input;
