'use client'
import { useEffect, useState } from "react"

export default function Contador() {

    // Gestão de Estados
    const [count, setCount] = useState(0);
    const [historico, setHistorico] = useState<number[]>([0])

    // Efeitos
    useEffect(() => {
  
        document.title = `Contador: ${count}`; 
    }, [count])

    // Função auxiliar para atualizar valor e histórico ao mesmo tempo
    const alterarValor = (novoValor: number) => {
        setCount(novoValor);
        // Adiciona o novo valor à lista de histórico existente
        setHistorico((prev) => [...prev, novoValor]);
    }

    // Renderização de componentes
    return (
        <section className="bg-blue-300 p-4 pb-4 mt-6 rounded-xl flex flex-col items-center">

            <h2 className="text-2xl font-bold mb-4">Contador</h2>
            <p className="text-xl mb-4 font-mono bg-white px-4 py-2 rounded">
                Valor: {count}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
                <button
                    className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded transition-colors"
                    onClick={() => {
                        if (count < 10) alterarValor(count + 1);
                    }}
                >
                    Aumentar
                </button>

                <button
                    className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded transition-colors"
                    onClick={() => {
                        if (count > 0) alterarValor(count - 1);
                    }}
                >
                    Diminuir
                </button>

                <button
                    className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded transition-colors"
                    onClick={() => alterarValor(0)}
                >
                    Reset
                </button>
            </div>

            <div className="w-full bg-white/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Histórico de alterações:</p>
                <div className="flex flex-wrap gap-2">
                    {historico.map((c, i) => (
                        <span key={i} className="bg-white px-2 py-1 rounded text-sm border border-gray-300">
                            {c}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}