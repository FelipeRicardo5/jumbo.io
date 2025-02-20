export default function Input ({ type = "text", id, name, placeholder = "Digite aqui...", className = "" }) {
    return (
      <input
        className={`w-[100%] p-[1em] border-none rounded-[60px] focus:outline-none focus:ring-blue-500 ${className}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    );
  };