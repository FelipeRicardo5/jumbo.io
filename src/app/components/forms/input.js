export default function Input ({ type = "text", id, name, placeholder = "Digite aqui...", className = "" }) {
    return (
      <input
      className={`w-[100%] py-[0.7em] px-[1em] border-none rounded-[60px] focus:outline-none text-[#000000]  shadow-[inset_0px_10px_20px_-8px_rgba(0,0,0,0.55)] ${className}`}
      style={{}}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      />
    );
  };