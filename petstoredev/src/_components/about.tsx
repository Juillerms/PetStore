import Image from "next/image";
import about1img from '../../public/about-1.png'
import about2img from '../../public/about-2.png'
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { MapPin } from "lucide-react";

export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                            src={about1img}
                            alt="FotoAbout"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority/>
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8  border-4 overflow-hidden rounded-lg border-white">
                            <Image
                            src={about2img}
                            alt="Foto GatoAbout"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority/>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">Sobre</h2>
                        <p></p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Aberto desde 2025
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                + de 10 Veterinários disponíveis 24h.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Qualidade é nossa prioridade
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a href="#" 
                            className="bg-[#E84C3C] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Contato WhatsApp
                            </a>

                            <a href="#" 
                            className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <MapPin className="w-5 h-5 text-black"/>
                                Endereço da Loja
                            </a>
                        </div>
                        
                    </div>  
                </div>
                
            </div>            
        </section>
    )
}