"use client"
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel} from 'lucide-react'
import {WhatsappLogo} from '@phosphor-icons/react'
import { title } from 'process'

const services = [
    {
        title: "Banho e Tosa",
        description:"Banho para pelagem específica do animal, corte de unhas, limpeza de orelhase tosa personalizada",
        duration:"Adasda",
        price:"$$20",
        icon: <Scissors />,
        linkText: 'Olá, vi no site  sobre Banho e tosa e gostaria de mais informações' 
    },
    {
        title: "Banho e Tosa",
        description:"Banho para pelagem específica do animal, corte de unhas, limpeza de orelhase tosa personalizada",
        duration:"Adasda",
        price:"$$20",
        icon: <Scissors />,
        linkText: 'Olá, vi no site  sobre Banho e tosa e gostaria de mais informações' 
    },
    {
        title: "Banho e Tosa",
        description:"Banho para pelagem específica do animal, corte de unhas, limpeza de orelhase tosa personalizada",
        duration:"Adasda",
        price:"$$20",
        icon: <Scissors />,
        linkText: 'Olá, vi no site  sobre Banho e tosa e gostaria de mais informações' 
    },
    {
        title: "Banho e Tosa",
        description:"Banho para pelagem específica do animal, corte de unhas, limpeza de orelhase tosa personalizada",
        duration:"Adasda",
        price:"$$20",
        icon: <Scissors />,
        linkText: 'Olá, vi no site  sobre Banho e tosa e gostaria de mais informações' 
    },
    {
        title: "Banho e Tosa",
        description:"Banho para pelagem específica do animal, corte de unhas, limpeza de orelhase tosa personalizada",
        duration:"Adasda",
        price:"$$20",
        icon: <Scissors />,
        linkText: 'Olá, vi no site  sobre Banho e tosa e gostaria de mais informações' 
    },
]

export function Services() {
    
    return(
        <div>
            <section className="bg-white py-16 ">
                <div className="container mx-auto px-4">
                    <div>
                        <h2 className=" text-4xl font-4x1 mb-12">Serviços</h2>
                        <div className="relative"></div>
                    </div>
                </div>

            </section>
        </div>
    )
}