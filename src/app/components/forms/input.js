export default function Input ({ type = "text", id, name, placeholder = "Digite aqui...", className = "" }) {
    return (
      <input
      className={`w-[100%] py-[0.7em] px-[1em] border-none rounded-[60px] focus:outline-none text-[#000000] drop-shadow-xl ${className}`}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      />
    );
  };