import Image from "next/image"
import profile from '../../../../jumboassets/vetor/profileUser.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MessageBox() {
    return (
        <div className="flex w-[100%] h-auto items-start" >
                {/* <Image
                        src={profile}
                        alt="user"
                        className="w-[100%]"
                    /> */}
                <i className="bi bi-person-circle text-[35px] text-[#5686E1] mr-[0.2em] ml-[0.5em] mb-[1em] -translate-y-[10px]"></i>
         
            <div className="bg-[#5686E1] w-[80%] h-[100%] p-[0.7em] bg-[#5686E1] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] drop-shadow-xl" >
                Olá! seja bem vindo, estou aqui para ajudar. O que deseja?
            </div>

        </div>
    )
}