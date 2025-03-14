"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import 'bootstrap-icons/font/bootstrap-icons.css';


import MessageBoxUser from '../components/forms/messageBoxUser';
import MessageBox from '../components/forms/messageBox';
import InputMessage from '../components/forms/inputMessage';

import Button from '../components/forms/button';


import jumboVetor from '../../../jumboassets/vetor/jumbovetor.png'
import profileJumbo from '../../../jumboassets/icons/iconJumbo.jpg'
import arrow from '../../../jumboassets/vetor/arrow.png'
import jumboHappy from '../../../jumboassets/jumboHappy.webp'
import jumboAngry from '../../../jumboassets/jumboAngry.webp'
import jumboSad from '../../../jumboassets/jumboSad.webp'
import Loading from '../../../jumboassets/bouncing-circles.svg'


export default function Chat() {

    const [messages, setMessages] = useState([]);
    const [mood, setMood] = useState('');
    const [challenge, setChallenge] = useState('');
    const [challengeStatus, setChallengeStatus] = useState('');
    const [showSecondDiv, setShowSecondDiv] = useState(false);

    const urlApi = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3030/ia';

    const concluirDesafio = (status) => {
        setChallengeStatus(status ? "concluido" : "nao_concluido");
    };

    const sendMood = async (selectedMood) => {
        setMood(selectedMood);
        setMessages((prevMessages) => [
            ...prevMessages,
            { from: 'user', text: selectedMood }
        ]);

        const response = await fetch(urlApi, {
            method: 'POST', // Método HTTP de envio da requisição (POST) 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mood: selectedMood })
        });

        if (response.ok) {
            const data = await response.json();
            setChallenge(data.challenge);
            setMessages((prevMessages) => [
                ...prevMessages,
                { from: 'bot', text: data.challenge }
            ]);
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { from: 'bot', text: 'Erro ao gerar desafio' }
            ]);
        }
    };


    const handleChallengeStatus = (status) => {
        setChallengeStatus(status);
        const statusMessage = status === "concuido" ? "Incrível! To muito feliz parabéns." : "Desafio não concluído";
        setMessages([
            ...messages,
            { from: 'user', text: statusMessage }
        ]);
    }

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                ...messages,
                { from: 'bot', text: 'Olá! seja bem vindo, estou aqui para te desafiar! Como você está se sentindo hoje?' }
            ]);
        }
    }, [messages]);


    useEffect(() => {
        if (showSecondDiv) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showSecondDiv]);

    useEffect(() => {
        const chatContainer = document.querySelector('.overflow-y-auto');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]); // Atualiza sempre que novas mensagens forem adicionadas



    const handleClick = () => {
        setShowSecondDiv(!showSecondDiv);
        console.log(setShowSecondDiv, showSecondDiv);
    };


    const resultImage = mood === "poderia estar melhor 😔" ? jumboSad : mood === "tive um dia difícil 😡" ? jumboAngry : jumboHappy;

    return (
        <div className="static flex flex-row h-dvh w-full text-[#FFFFFF] items-end sm:justify-start justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('${(mood === "poderia estar melhor 😔" || mood === "tive um dia difícil 😡") ? '/background-angry-blur.jpg' : '/background-happy-blur.jpg'}')` }}
        >
            {/* Renderizando condicionalmente a div com animação de transição */}
            <div
                className={`absolute h-[98dvh] sm:h-[100dvh] w-full sm:w-[30%] bg-white rounded-t-[60px] sm:rounded-tl-[0px] sm:rounded-r-[60px] z-[1] shadow-[10px_0px_51px_-7px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out transform ${showSecondDiv ? "opacity-100 sm:-translate-x-full sm:-translate-y-[0] translate-y-full" : "opacity-100 sm:translate-x-0 translate-x-0]"
                    }`}>

                <section className='flex items-center pl-[2em] pr-[0em] pt-[1em] pb-[1em] h-[12dvh]'>
                    <Image
                        src={profileJumbo}
                        alt='profileJumbo'
                        width={80}
                        height={80}
                        className='sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-full'
                    />
                    <Image
                        src={arrow}
                        alt='arrow'
                        width={40}
                        height={40}
                        className='sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]'
                    />
                    <div>
                        <p className='sm:text-[24px] text-[18px] text-[#5686E1] font-[700]'>Jumbo.io</p>
                        <p className='sm:text-[20px] text-[14px] text-[#5686E1]'>chat</p>
                    </div>
                </section>
                <section className="relative overflow-y-auto max-h-[58dvh] sm:max-h-[65dvh] px-4 " style={{ scrollbarWidth: 'thin' }}>
                    <div className="sticky z-[1] top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                    {/* Gradient */}

                    {
                        messages.length === 0 ? (
                            <div className="flex w-full h-full justify-center items-center">
                                <p className="text-[#5686E1] text-[18px]">Carregando...</p>
                            </div>
                        ) : (
                            messages.map((message, index) => (
                                message.from === "bot" ? (
                                    <MessageBox key={index} botMessage={message.text} /> // Renderiza a mensagem do bot
                                ) : (
                                    // Verifica se a última mensagem foi do usuário e não do bot, e exibe os três pontinhos
                                    index === messages.length - 1 && message.from === "user" ? (
                                        <div key={index} className="text-center">
                                            <MessageBoxUser key={index} nameUser="Fátima" userMessage={message.text} />
                                            <div className='ml-[20]' >
                                                <Image
                                                    src={Loading}
                                                    alt="loading"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <MessageBoxUser key={index} nameUser="Fátima" userMessage={message.text} /> // Renderiza a mensagem do usuário
                                    )
                                )
                            ))
                        )
                    }


                    <div className="sticky absolute z-[2] bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </section>
                <section className="flex bg-white w-full justify-center" >

                    <InputMessage
                        onClick={() => sendMood('animado e energético 💪')}
                        inputUser='animado e energético 💪'
                    />

                    <InputMessage
                        onClick={() => sendMood('poderia estar melhor 😔')}
                        inputUser='poderia estar melhor 😔'
                    />

                    <InputMessage
                        inputUser="tive um dia difícil 😡"
                        onClick={() => sendMood('tive um dia difícil 😡')}
                    />

                </section>
            </div>

            <button
                onClick={handleClick}
                className={' h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] items-center justify-center sm:hover:-translate-y-[10px] transition-all duration-500 ease-in-out flex p-[20px] z-[2] absolute rounded-full sm:text-[2.5vw] text-[10vw] text-[#5686E1] bg-white drop-shadow-xl sm:m-[0.5em] m-[1em] bg-gradient-to-t from-white via-[#F6F6F6] to-[#E3E3E3]'}
                aria-label="Iniciar conversa" >
                <i className="bi bi-chat-quote-fill"></i>
            </button>

            <div className="flex static h-screen w-[100%] sm:w-[100%] justify-center items-center " >
                {/* Aqui deve mudar as fotos */}

                {/* <div
                    className='h-[100px] w-[200px] bg-white z-[3] rounded-l-full rounded-tr-full absolute'
                ></div> */}

                <Image
                    src={resultImage}
                    width={0}
                    height={0}
                    style={{ borderRadius: '250px', boxShadow: '0px 23px 45px -7px rgba(0,0,0,0.33)' }}
                    className="h-[70vh] w-[80vw] sm:w-[20vw] sm:h-[75vh] md:w-[40vh] lg:-[80vw] "
                    alt="Bot emocional"
                />
            </div>
        </div >
    )
}
