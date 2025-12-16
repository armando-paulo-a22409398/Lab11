'use client'
import { useEffect, useState } from "react"

export default function Contador() {

    // Gestão de Estados
    const [count, setCount] = useState(0);
    const [historico,setHistorico] = useState<number[]>([0])

    // Efeitos
    useEffect(() => {
        document.title = count;
    }, [count])

    // Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Contador</h2>
            <p>Contador vai em {count}</p>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => setCount(count < 10 ? count + 1 : 10)}
            >
                Aumentar
            </button>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
            >
                Diminuir
            </button>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => setCount(0)}
            >
                Reset
            </button>

            <p>Lista de numeros</p>
            <ul>
             <p>Historico:
                {historico.map((c,i)=> (<span key={i}>{c}</span>))}
             </p>
            </ul>
        </section>
    )
}
