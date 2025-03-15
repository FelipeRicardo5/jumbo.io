import Link from "next/link";

export default function Button({ name, onClick, className = "", text = "text", href }) {
  return (
    <Link href={href || "#"} passHref>
      <button
        className={`p-[10px] rounded-[20px] hover:shadow-xl shadow-lg sm:hover:-translate-y-[2px] transition-all duration-500 ease-in-out ${className}`}
        style={{ background: 'linear-gradient(180deg, #BFAB59 0%, #9E8D46 100%)' }}
        name={name}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
}
