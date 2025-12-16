"use client"

import { useEffect, useState } from "react"

interface PreferidaProps {
   tecnologia: string;
}

export default function ContadorPorTecnologia({ tecnologia }: PreferidaProps) {

    // A. Gestão de estados
    // Iniciamos com 0 para evitar erros de hidratação (diferença entre servidor e cliente)
    const [likes, setLikes] = useState(0);

    // Efeito para carregar do localStorage apenas no cliente (montagem inicial)
    useEffect(() => {
        const storedLikes = localStorage.getItem(tecnologia);
        if (storedLikes) {
            setLikes(parseInt(storedLikes));
        }
    }, [tecnologia]);

    // B. Efeitos
    // Atualiza o localStorage e o título da página sempre que os likes mudam
    useEffect(() => {
        if (likes > 0 || localStorage.getItem(tecnologia)) {
             localStorage.setItem(tecnologia, `${likes}`);
        }
        
        // Atualiza o título da tab do browser (opcional, conforme pedido no snippet original)
        // document.title = `${tecnologia} ${likes} ❤️`; 
    }, [likes, tecnologia]);

    const handleClick = (e: React.MouseEvent) => {
        // Impede que o clique no botão ative links pais (caso esteja dentro de um card clicável)
        e.preventDefault(); 
        setLikes(likes + 1);
    };

    // C. Renderização de componentes
    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-pink-100 hover:bg-pink-200 text-pink-600 px-3 py-1 rounded-full text-sm font-bold transition-colors shadow-sm cursor-pointer mt-2"
            title={`Dar like em ${tecnologia}`}
        >
            <span>❤️</span>
            <span>{likes}</span>
        </button>
    )
}