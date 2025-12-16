'use client'

import React from 'react';
import useSWR from 'swr';
import { Product } from '@/models/interfaces';
import ProdutoCard from '@/components/ProdutoCard';

// Função fetcher padrão para o SWR (obtém os dados da API e converte para JSON)
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProdutosPage() {
    // 1. Fetch de dados da API usando useSWR
    const { data, error, isLoading } = useSWR<Product[]>(
        'https://deisishop.pythonanywhere.com/products', 
        fetcher
    );

    // 2. Estado de Erro: Se algo correr mal no fetch
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-red-600 bg-red-50 p-6 rounded-xl mx-auto max-w-lg mt-10">
                <p className="text-xl font-bold mb-2">⚠️ Erro ao carregar</p>
                <p>Não foi possível obter os produtos. Tente novamente mais tarde.</p>
            </div>
        );
    }

    // 3. Estado de Carregamento: Enquanto os dados não chegam
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="text-blue-600 font-medium animate-pulse">A carregar a loja...</p>
            </div>
        );
    }

    // 4. Renderização Final: Mostra a lista de produtos quando os dados chegam
    return (
        <main className="container mx-auto p-6 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                DEISI Shop
            </h1>
            <p className="text-center text-gray-500 mb-8">
                Os melhores produtos tecnológicos ao teu alcance.
            </p>

            {/* Verificação se a lista está vazia */}
            {(!data || data.length === 0) ? (
                <div className="text-center text-gray-500 bg-gray-100 p-8 rounded-lg">
                    <p>Nenhum produto encontrado no momento.</p>
                </div>
            ) : (
                // Grid responsiva para os cartões
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((produto) => (
                        <ProdutoCard key={produto.id} produto={produto} />
                    ))}
                </div>
            )}
        </main>
    );
}