"use client"
import React from 'react';
import { Quiz } from '@/components/Quiz';
import { questions } from '@/data/questions';
import { Result } from '@/components/Result';

export const Page = () => {
  
  // Estado para controlar a questão atual
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  // Estado para armazenar as respostas do usuário
  const [userResponses, setUserResponses] = React.useState<number[]>([]);

  // Função para avançar para a próxima questão
  const handleNextQuestion = (selectedOption: number) => {
  // Adiciona a resposta do usuário ao array de respostas
  setUserResponses([...userResponses, selectedOption]);
  // Avança para a próxima questão
  setCurrentQuestion(currentQuestion + 1);
  };

  // Verifica se ainda há questões para responder
  const responding = currentQuestion + 1 <= questions.length;

  return (
      <>
        <div className="flex flex-col items-center justify-center h-screen bg-black">
          {responding ? 
            // Renderiza o componente Quiz se ainda houver questões
            <Quiz questions={questions} currentQuestion={currentQuestion} onNext={handleNextQuestion} />
          : 
            // Renderiza o componente Result se todas as questões foram respondidas
            <Result results={userResponses}></Result>
          }
        </div>
      </>
  );
}

export default Page;