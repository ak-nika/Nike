const Button = (props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${props.backgroundColor ? `${props.backgroundColor} ${props.borderColor} ${props.textColor} hover:bg-slate-200 hover:text-slate-800`:
      'bg-coral-red hover:bg-red-700 text-white border-coral-red'
    } rounded-full transition-all duration-200 ${props.fullWidth && 'w-full'}`
  
    }

    >
      {props.label}
      {props.iconURL && <img
        src={props.iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  );
};

export default Button;
