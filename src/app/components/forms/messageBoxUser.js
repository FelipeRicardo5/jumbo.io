import Image from "next/image"
import Profile from '../../../../jumboassets/icons/iconJumbo.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MessageBox({ userMessage, nameUser }) {
    return (
        <div className="flex w-[100%] h-auto items-center justify-end text-[#5686E1] font-bold text-[12px] sm:text-[18px]" >

            <div className="flex flex-col text-end w-auto h-[100%] text-[#5686E1] font-bold text-[12px] sm:text-[18px]" >
            {nameUser}
                <div className="bg-white text-[#5686E1] text-[12px] sm:text-[18px] w-[100%] font-light h-[100%] p-[0.7em] bg-[#5686E1] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] drop-shadow-xl border-[1px] border-gray-200" >
                    {userMessage}
                </div>

            </div>
            {/* <Image
                src={Profile}
                alt="user"
                className="w-[10%] rounded-full drop-shadow-xl ml-2"
            /> */}
            <i className="bi bi-person-circle text-[35px] text-[#5686E1] ml-[0.2em] -translate-y-[5px]"></i>
        </div>
    )
}