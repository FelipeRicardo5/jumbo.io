"use client";
import { useState } from 'react'

import jumboVetor from '../../../../jumboassets/vetor/jumbovetor.png'
import profileJumbo from '../../../../jumboassets/vetor/profileJumbo.png'
import arrow from '../../../../jumboassets/vetor/arrow.png'

import jumboHappy from '../../../../jumboassets/jumboHappy.webp'
import jumboAngry from '../../../../jumboassets/jumboAngry.webp'

import Image from 'next/image'

import Button from '../forms/button';

export default function Chat() {

    const [messages, setMessages] = useState([])
    
    const concluirDesafio = (status) => {
        setResultado(status ? "concluido" : "nao_concluido");
    };
    
    const [showSecondDiv, setShowSecondDiv] = useState(false); 
    
    const handleClick = () => {
        setShowSecondDiv(!showSecondDiv);
        console.log(setShowSecondDiv, showSecondDiv);
    };

    const resultado = 'concluido';

    return (
        <div className="static flex flex-row h-screen w-full bg-[#EEDCBE] text-[#FFFFFF] items-end" >

            {showSecondDiv && 
            
            <div className="absolute h-screen w-[100%] sm:w-[30%] bg-white rounded-r-[60] z-[1]" >

                <section className='flex items-center p-[1em]' >
                    <Image
                        src={profileJumbo}
                        alt='profileJumbo'
                        width={80}
                        height={80}
                    />
                    <Image
                        src={arrow}
                        alt='arrow'
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className='text-[26px] text-[#5686E1] font-[700]' >Jumbo.io</p>
                        <p className='text-[#5686E1] '>chat</p>
                    </div>
                </section>
                <section></section>
                <section></section>

            </div>
            }

            <Button 
            onCick={handleClick}
            className={'flex p-[20px] z-[2] absolute rounded-full'}
            text='chat'
            />

            <div className="flex h-screen w-[100%] sm:w-[100%] justify-center items-center " >
                        {/* Aqui deve mudar as fotos */}
                        <Image 
                            src={resultado === "concluido" ? jumboHappy : jumboAngry}
                            width={0}
                            height={0}
                            style={{ borderRadius: '250px'}}
                            className="h-[70vh] w-[80vw] sm:w-[20vw] sm:h-[80vh]"
                            alt="Bot emocional"
                        />
            </div>
        </div>
    )
}