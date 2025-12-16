import React from 'react';
import Image from 'next/image';
import { Product } from '@/models/interfaces';

interface ProdutoCardProps {
    produto: Product;
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
    // Tratamento do link da imagem (adicionar o domínio ao caminho relativo)
    const imagePrefix = 'https://deisishop.pythonanywhere.com';
    const imageUrl = imagePrefix + produto.image;

    return (
        <article className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
            {/* Área da Imagem */}
            <div className="relative w-full h-48 bg-white p-4 flex items-center justify-center border-b border-gray-100">
                <Image
                    src={imageUrl}
                    alt={produto.title}
                    width={200}
                    height={200}
                    className="object-contain max-h-full"
                    priority={false}
                />
            </div>

            {/* Área de Conteúdo */}
            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">
                    {produto.category}
                </span>
                
                <h3 className="font-semibold text-gray-800 text-lg leading-tight mb-2 line-clamp-2" title={produto.title}>
                    {produto.title}
                </h3>
                
                <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                        {produto.price.toFixed(2)} €
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                        Adicionar
                    </button>
                </div>
            </div>
        </article>
    );
}