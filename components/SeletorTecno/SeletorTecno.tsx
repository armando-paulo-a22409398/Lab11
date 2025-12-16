'use client'
import { useState } from 'react'

export default function SeletorTecno() {
  
    // 
    // A. Gestão de Estados

const [tecnologia, setTecnologia] = useState("");

    // Função para lidar com a mudança no select
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTecnologia(e.target.value);
    };
     
    // B. Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Selecione uma Tecnologia</h2>
            
            <select
                value={tecnologia} // O valor é controlado pelo estado
                onChange={handleChange} // Atualiza o estado ao selecionar
                className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-bold py-2 px-4 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors w-full"
            >
                <option value="">Selecione uma tecnologia</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Next.js">Next.js</option>
            </select>

     <div className="mt-6 p-4 bg-white/40 rounded-lg w-full text-center">
                <p className="text-blue-900 font-medium">
                    Tecnologia escolhida: <br/>
                    {/* Renderização condicional: Mostra o texto ou um placeholder */}
                    <span className="text-2xl font-bold text-blue-800">
                        {tecnologia || "---"}
                    </span>
                </p> 
            </div>
        </section>
    )
}