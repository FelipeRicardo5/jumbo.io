"use client"

import Link from 'next/link'
import Image from 'next/image'
import avatarP1 from '../../../jumboassets/avatar/avatarP1.png'
import avatarP2 from '../../../jumboassets/avatar/avatarP2.png'
import avatarP3 from '../../../jumboassets/avatar/avatarP3.png'
import avatarP4 from '../../../jumboassets/avatar/avatarP4.png'
import Arrow from '../../../jumboassets/arrow.png'
import grass from '../../../jumboassets/vetor/grass.png'
import jumboVetor from '../../../jumboassets/vetor/jumbovetor.png'

export default function Avatar() {
    return (

        <div className="flex flex-col h-[100dvh] w-full bg-[#EEDCBE] text-[#326377] justify-center items-center">

            <div className='flex flex-col h-[20dvh] w-full justify-end items-center' >
                <p className='text-[18px] sm:text-[24px]' >escolha o seu</p>
                <p className='text-[18px] sm:text-[24px] font-[700]' >avatar!</p>
            </div>

            <div className="flex flex-row w-full h-[40dvh] justify-center items-center">
                <div className="flex flex-col w-auto justify-center items-center">
                    <Image
                        src={avatarP1}
                        width={50}
                        className='rounded-full m-4 h-[110] w-[110] sm:h-[120] sm:w-[120] shadow-[0px_10px_22px_-8px_rgba(0,0,0,0.75)] border-[5px] border-[#326377]'
                        alt="Primeira opção de avatar"
                    />
                    <Image
                        src={avatarP2}
                        width={50}
                        className='rounded-full m-4 h-[110] w-[110] sm:h-[120] sm:w-[120] shadow-[0px_10px_22px_-8px_rgba(0,0,0,0.75)] border-[5px] border-[#326377]'
                        alt="Segunda opção de avatar"
                    />
                </div>
                <div className="flex flex-col w-auto justify-center items-center">
                    <Image
                        src={avatarP3}
                        width={50}
                        className='rounded-full m-4 h-[110] w-[110] sm:h-[120] sm:w-[120] shadow-[0px_10px_22px_-8px_rgba(0,0,0,0.75)] border-[5px] border-[#326377]'
                        alt="Terceira opção de avatar"
                    />
                    <Image
                        src={avatarP4}
                        width={50}
                        className='rounded-full m-4 h-[110] w-[110] sm:h-[120] sm:w-[120] shadow-[0px_10px_22px_-8px_rgba(0,0,0,0.75)] border-[5px] border-[#326377]'
                        alt="Quarta opção de avatar"
                    />
                </div>
            </div>

            <div className='flex flex-col h-auto w-full justify-start items-center' >
                <p className='text-[18px] sm:text-[24px]' >esse momento é super</p>
                <p className='text-[18px] sm:text-[24px] font-[700]' >importante!</p>
                <button
                    className={' h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] items-center justify-center sm:hover:-translate-y-[10px] active:-translate-y-[10px] transition-all duration-500 ease-in-out flex z-[2] rounded-full sm:text-[2.5vw] text-[10vw] text-[#5686E1] bg-white drop-shadow-xl sm:m-[0.5em] m-[1em] bg-gradient-to-t from-white via-[#F6F6F6] to-[#E3E3E3]'}
                    aria-label="Iniciar conversa" >
                    <Image
                        src={Arrow}
                        alt='arrow'
                        style={{ width: '60%', height: '60%' }}
                    />
                </button>
            </div>
            <div className="w-full sm:h-[20dvh] h-auto flex justify-center items-end sm:justify-end">
                <Image
                    src={grass}
                    width={0}
                    height={0}
                    className="sm:w-[20vw] sm:h-[4vh] m-0 transform hidden md:block translate-x-[80px]"
                    alt="Imagem do autor"
                />
                <Image
                    src={grass}
                    width={0}
                    height={0}
                    className="sm:w-[20vw] sm:h-[7vh] m-0 transform hidden md:block translate-x-[30px]"
                    alt="Imagem do autor"
                />
                <Image
                    src={jumboVetor}
                    width={0}
                    height={0}
                    className="w-auto h-[20dvh] m-0 transform hidden md:block sm:translate-x-[30px]"
                    alt="Imagem do Jumbo"
                />
                <Image
                    src={grass}
                    width={0}
                    height={0}
                    className="sm:w-[20vw] sm:h-[5.5vh] m-0 transform hidden md:block translate-x-[-40px]"
                    alt="Imagem do autor"
                />
            </div>
        </div>

    )

}