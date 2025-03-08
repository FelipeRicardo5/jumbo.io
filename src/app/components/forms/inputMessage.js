
export default function inputMessage({ inputUser, className }) {
    return (
        <div className="" >

            <div className={`flex hover:-translate-y-[0px] translate-y-[15px] hover:h-[60px] h-[50px] sm:h-[60px] w-auto bg-gradient-to-t from-[#5686E1] to-[#7298e0] text-[12px] sm:text-[16px] rounded-full items-center justify-center text-center hover:drop-shadow-xl text-white font-xxx mr-1 ml-1 p-2 sm:p-4 transition-all duration-500 ease-in-out ${className}` }
            
            >{inputUser}
            </div>

        </div>
    )
}