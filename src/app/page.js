import Image from 'next/image'
import Link from 'next/link'

import Input from './components/forms/input'
import Button from './components/forms/button'

import grass from '../../jumboassets/vetor/grass.png'
import jumboVetor from '../../jumboassets/vetor/jumbovetor.png'

export default function Login() {
    return (
        <div className="flex flex-col h-[100dvh] w-full bg-[#EEDCBE] text-[#FFFFFF] items-center">

            <div className="flex flex-col w-full h-[15dvh] bg-[#EEDCBE] text-[#326377] justify-center items-center">

                <p className='text-[24px] sm:text-[30px]' >Olá, me chamo <strong>Jumbo!</strong></p>
                <p className="text-center text-[12px] sm:text-[18px]">Seu melhor amigo no desenvolvimento pessoal</p>

            </div>

            <div className="flex flex-col w-[100%] sm:h-[65dvh] h-auto items-center rounded-[20px]" style={{ bxShadow: '0px 17px 38px -5px rgba(0,0,0,0.65)' }}>
                
                <Image
                    src={grass}
                    width={0}
                    height={0}
                    className='w-[70%] sm:w-[22vw] h-[13%]'
                    alt="Imagem do autor"
                />

                <div className="w-[80%] sm:w-[24%] h-[100%] bg-[#326377] pt-[1em] pb-[1em] sm:pl-[2em] sm:pr-[2em] pl-[1.5em] pr-[1.5em] rounded-[20px] " style={{ boxShadow: '0px 17px 38px -5px rgba(0,0,0,0.65)' }} >

                    <p className="text-left">Já nos <br /> conhecemos?</p>

                    <p className="font-[700] text-[24px] sm:text-[36px] text-left" >Login</p>

                    <p className="sm:mt-[20px] mt-[10px]">usuário</p>
                    <Input
                        placeholder="insira seu usuário aqui..."
                        className="mt-[10px]"
                    />

                    <p className="mt-[20px]">senha</p>
                    <Input
                        placeholder="insira sua senha aqui..."
                        className="mt-[10px]"
                        type='password'
                    />


                    <Button
                        text="entrar"
                        className="bg-gradient-to-b from-[#998740] to-[#BFAB59] px-[20px] mt-6 w-[50%] sm:w-auto text-[16px]"
                        href='/chat'
                    />  
                    <p className="mt-[10px] text-left sm:text-left sm:text-[16px] text-[14px]">
                        se ainda não nos conhecemos, <br /><Link href='/register' className='text-[#BFAB59]' >cadastre-se</Link>!
                    </p>
                </div>
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
