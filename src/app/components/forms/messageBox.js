import Image from "next/image";
import Profile from '../../../../jumboassets/icons/iconJumbo.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { marked } from 'marked';

export default function MessageBox({ botMessage }) {

  const renderedHtml = marked.parse(botMessage);
  const htmlObject = { __html: renderedHtml };

  return (
    <div className="flex w-[100%] h-auto items-start mb-2">
      <Image
        src={Profile}
        alt="user"
        className="w-[10%] rounded-full drop-shadow-xl mr-2"
      />

      <div className="w-[100%] h-[100%] text-[#5686E1] text-[12px] sm:text-[18px]">
        Jumbo.io
        <div
          className="bg-[#5686E1] text-white text-[14px] sm:text-[18px] w-[100%] h-[100%] p-[0.7em] bg-[#5686E1] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] drop-shadow-xl border-[1px] border-white"
          dangerouslySetInnerHTML={htmlObject}
        >
        </div>
      </div>
    </div>
  );
}