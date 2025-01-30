const Button = ({ text, onClick, width = "w-full" }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={` px-8 h-12 ${width} hover:bg-transparent hover:text-[#FFCA08] hover:shadow-[0_0_0_2px_#FFCA08] font-bold rounded-3xl text-black text-[1.1rem] p-3 active:bg-gray-100  bg-[#FFCA08]`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
