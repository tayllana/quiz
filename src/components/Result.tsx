import { questions } from '@/data/questions';
import React from 'react';

// Define o tipo das propriedades que o componente Result espera receber
type Props = {
    results: number[];
}

// Define o componente Result que recebe as propriedades results
export const Result = ({ results }: Props) => {
    return (
        // Container principal com classes de estilo
        <div className="bg-white rounded-lg p-8 space-y-4">
            {/* Título do resultado */}
            <h1 className="text-3xl font-bold text-center text-black">Resultado</h1>
            {/* Lista de perguntas e respostas */}
            <ul className="space-y-3">                
                {questions && questions.map((question, index) => (
                    // Cada item da lista representa uma pergunta
                    <li key={index} className="text-black text-center">
                        {/* Exibe a pergunta */}
                        <h1 className='font-bold'>{question.question}</h1>
                        <div className='flex justify-center items-center space-x-2'>
                            {/* Exibe a resposta com cor diferente dependendo se está correta ou não */}
                            <p className={results[index] == question.response ? 'text-green-600' : 'text-red-800'}> 
                                {question.options[results[index]]}
                            </p>
                        </div>
                    </li>
                ))}                
            </ul>
        </div>
    );
}