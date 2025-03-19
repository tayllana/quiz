"use client"
import React from 'react';
import { Quiz } from '@/components/Quiz';
import { questions } from '@/data/questions';
import { Result } from '@/components/Result';

export const Page = () => {
  
  const [currentQuestion, setCurrentQuestion] = React.useState(0);  
  const responding = currentQuestion + 1 <= questions.length;
 return (
  <>
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {responding? 
        <Quiz questions={questions} currentQuestion={currentQuestion} onNext={() => {setCurrentQuestion(currentQuestion + 1)}} />
      : <Result results={[]}></Result>
      }
    </div>
  </>
 );
}

export default Page;