export default function Button ({ name, onCick, className = "",text= "text"}) {
    return (
      <button
        className={`p-[10px] bg-[#BFAB59] rounded-[20px] ${className}`}
        name={name}
        onClick={onCick}
      >
        {text}
      </button>
    );
  };