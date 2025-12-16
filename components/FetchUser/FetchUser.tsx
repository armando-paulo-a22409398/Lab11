'use client'

import useSWR from 'swr';
import { User } from '@/models/interfaces';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function FetchUser() {
    const { data, error, isLoading } = useSWR<User>('https://jsonplaceholder.typicode.com/users/1', fetcher);

    if (error) return <div>Erro ao carregar utilizador</div>;
    if (isLoading) return <div>A carregar...</div>;

    return (
        <section className="bg-gray-100 p-4 rounded-lg my-4 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-gray-700">Dados do Utilizador (Fetch)</h3>
            {data && (
                <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Nome:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    {/* CORREÇÃO: Usar ?. para prevenir erro se company for undefined */}
                    <p><strong>Empresa:</strong> {data.company?.name || "Sem empresa"}</p>
                    <p><strong>Cidade:</strong> {data.address?.city}</p>
                </div>
            )}
        </section>
    );
}