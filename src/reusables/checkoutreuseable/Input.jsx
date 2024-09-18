const Input = ({
  htmlFor,
  label,
  type,
  name,
  value,
  placeholder,
  required,
  id,
  onChange,
  width = "w-[38.5rem]",
  
}) => {
  return (
    <div className={` checkoutInput text-[#595959]  flex flex-col my-[1rem]`}>
      <label htmlFor={htmlFor} className="my-[1rem]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        required={required}
        className={`${width}  border border-[#dcdcdc] text-[#595959] rounded-3xl h-[3.2rem] p-[1rem] bg-transparent`}
      />
    </div>
  );
};

export default Input;
