import Link from "next/link";

export default function Button ({ name, onCick, className = "",text= "text", href }) {
    return (
      <Link href={href || "#"} passHref>
      <button
        className={`p-[10px] rounded-[20px] ${className}`}
        style={{ background: 'linear-gradient(180deg, #BFAB59 0%, #9E8D46 100%)' }}
        name={name}
        onClick={onCick}
      >
        {text}
      </button>
      </Link>
    );
  };