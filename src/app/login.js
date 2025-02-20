import Image from 'next/image'
import Input from "./components/forms/input"
import Button from "./components/forms/button"

import grass from '../../jumboassets/vetor/grass.png'
import jumboVetor from '../../jumboassets/vetor/jumbovetor.png'

export default function Login() {
    return (
        <div className="flex flex-col h-screen w-full bg-[#EEDCBE]  items-center">

            <div className="flex w-full h-[10vh] bg-[#EEDCBE] text-[#326377] justify-center items-end">
                <p className='text-[24px] sm:text-[30px]' >Olá, me chamo <strong>Jumbo!</strong></p>
            </div>

            {/* Imagem responsiva */}

            <Image
                src={grass}
                width={0}
                height={0}
                style={{ width: '24vw', height: '7vh' }}
                alt="Imagem do autor"
            />
            <div className="w-[80%] sm:w-[26vw] h-[60vh] bg-[#326377] p-[2em] rounded-[20px]"  style={{ boxShadow: '0px 17px 38px -5px rgba(0,0,0,0.65)' }}>

                <p className="text-center sm:text-left">Já nos <br /> conhecemos?</p>

                <p className="font-[700] text-[24px] sm:text-[36px] text-center sm:text-left" >Login</p>

                <p className="mt-[20px]">usuário</p>
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

                <p className="mt-[10px] text-center sm:text-left">
                    se ainda não nos conhecemos, <br /> cadastre-se!
                </p>

                <Button
                    text="entrar"
                    className="bg-gradient-to-b from-[#998740] to-[#BFAB59] px-[20px] mt-6 w-full sm:w-auto"
                />
            </div>

            {/* Imagem inferior responsiva */}
            <div className="w-full h-[30vh] flex justify-center items-end sm:justify-end">
            <Image
                    src={grass}
                    width={0}
                    height={0}
                    style={{ width: '20vw', height: '4vh', margin: '0', transform: 'translateX(80px)' }}
                    alt="Imagem do autor"
                />
            <Image
                    src={grass}
                    width={0}
                    height={0}
                    style={{ width: '20vw', height: '7vh', margin: '0', transform: 'translateX(30px)' }}
                    alt="Imagem do autor"
                />
                <Image
                    src={jumboVetor}
                    width={0}
                    height={0}
                    style={{ width: '15%', height: 'auto', margin: '0' }}
                    alt="Imagem do Jumbo"
                />
                <Image
                    src={grass}
                    width={0}
                    height={0}
                    style={{ width: '20vw', height: '5.5vh', margin: '0', transform: 'translateX(-40px)' }}
                    alt="Imagem do autor"
                />
            </div>
        </div>
    )
}
