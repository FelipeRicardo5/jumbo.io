import Image from "next/image"
import Profile from '../../../../jumboassets/icons/iconJumbo.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MessageBox({ botMessage }) {
    return (
        <div className="flex w-[100%] h-auto items-start mb-2" >
            <Image
                        src={Profile}
                        alt="user"
                        className="w-[10%] rounded-full drop-shadow-xl mr-2"
                    />
            
            <div className=" w-[100%] h-[100%] text-[#5686E1] font-bold text-[12px] sm:text-[18px]" >
                Jumbo.io
                <div className="bg-[#5686E1] text-white text-[12px] sm:text-[18px] w-[100%] font-light h-[100%] p-[0.7em] bg-[#5686E1] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] drop-shadow-xl border-[1px] border-white" >
                    {botMessage}
                </div>

            </div>

        </div>
    )
}