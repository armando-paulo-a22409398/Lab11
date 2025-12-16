'use client'

import useSWR from 'swr';
import { Produto } from '@/models/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Produtos() {

    // A. Fetch de dados
    const { data, error, isLoading } = useSWR<Produto[]>('https://deisishop.pythonanywhere.com/products', fetcher);

    // B. Renderização de componentes
    if (error) return <div className="text-red-500 text-center">Erro ao carregar produtos.</div>
    if (isLoading) return <div className="text-blue-500 text-center">A carregar produtos...</div>
    if (!data || data.length === 0) return <div className="text-gray-500 text-center">Sem produtos disponíveis.</div>

    return (
        <section className="mt-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Lista de Produtos DEISIshop</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {data.map((produto) => (
                    <article 
                        key={produto.id}
                        className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <Link href={`/produtos/${produto.id}`} className="flex flex-col items-center w-full">
                            <div className="relative w-full h-48 mb-4">
                                <Image 
                                    src={produto.image}
                                    alt={produto.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-800 text-center line-clamp-2 mb-2 min-h-[3rem]">
                                {produto.title}
                            </h3>
                            <p className="font-bold text-blue-600 text-lg mb-2">
                                {produto.price.toFixed(2)} €
                            </p>
                        </Link>
                        
                        <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full text-sm font-bold">
                            + Adicionar
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}