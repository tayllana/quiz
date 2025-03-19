import { Question } from "@/app/types/Question";
import React from 'react';

type Props = {
    questions: Question[], // Array de perguntas
    currentQuestion: number, // Índice da pergunta atual
    onNext: (selectedOption: number) => void // Função chamada ao avançar para a próxima pergunta
}

export const Quiz = ({questions, currentQuestion, onNext}: Props) => {

    const { question, options, response } = questions[currentQuestion]; // Desestrutura a pergunta atual
    const [selectedOption, setSelectedOption] = React.useState<number | null>(null); // Estado para a opção selecionada
    const correctIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="url(#a)" d="M0 0h32v32H0z"/><defs><pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox"><use href="#b" transform="scale(.03125)"/></pattern><image id="b" width="32" height="32" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAftSURBVFiFpZd7cFTlGYefc86es/fNZgNZAiSjkoihVAkhI4UgOtYWBCSK0Eq1IEqj06lFdIAZsQah1dGZqm29EEAqWvCWYGuQi1OnUhWRYIJIIAlyScjmQpbNbrL3c+kfgZBACIH+/tw53/v8vvd9v2/fT2DwcgGzXKmWmYhMiEfUYZqqWxBAVkTVkSoHREGobG2IbAG2AaHBBBUG8c1oR4pSkkzos2+cNFyfMivbnpvvxT3UhnuIFYCO9ij+tgAH9x/j6+0N2uE9Id3qkLf5m6PLgPqrNWA1W03PC7Bo/tIC+Z5HbjIrZomayhaqv2yirbmT5qYONE3HO8LF8BFuxk/JJDffS0fER3npPuPj11pURTG9GWiLLQFiV2Ig2+qQd06dnZ1RvKrQqmk677y0j8/K6nBmKbjzZcxDJaxDTABEWlWiPhV/VYyIT+W2OTkseKKAMMfZtLrG2L896Av6E1OBHwZjYJzFZvp38epC54wHfiRvfqWS8nUHyJzpIKvIgZIiDZA0g0izxvGyIL7PwswpHkfR77xse/sAHzzXEu4MJAuB6oEMZFvtpr0lm2Z4bsj3snrxdk4nQ+QuScWcOhD4Ahs6dJ1Icuh1P8OcKSwvzeNA5WFefaQx0hVI3tg7E70NWKwO5eDiZyZdc/vc602PzfgAe4FIzkL34Fq1HyUCOnWbAkQP6zz3cR5ffHyM99a0Nof8iVFAFKBnW1ab/NLUouypC5bfbH7mwW0IuRo5D149HECyCrivNxPyxdhfFmL+ypG0nog6/E1aWjyqbQMQz347GoFFxasKrZtfqaQtESRnQcrVk3tJdktk3+ehJRRi+2th5j6VLmiq9jCQ02PAkaKUzH98gqxpBuXrqhnze89V77zx/TD7fuPn2PouDB0EEWSnwJiHPWxdW4uoWZnx26FyWob1hXMGXGpSv+vu4pvkd176hsyZTsyewTdcb9WWBtGqLazZMBtPKIXaF0MYencpzGkSGbfa+egvAe5YlEY0nJwBOEVg1tiJww3FLPFZeR1ZRY6rgteVBjGfcFFatoK8sZNZWToTr8nNiY1hoNtE1jQnu8sbUSwSN0x0SMCdostjmTV1dra9Zl8LzkzlMuf80nDlhIvSsmVYrAqiYMKmpPKrJyZwpjLebcAioDglLF6Jk9UG437mENMzrb8UEcgfneel+qsm3Plyv4DGsjCVxefrOhAcQDPiBDpb+evy3aT/1AyAIAkIInh+bOHwVzGuG2fDgAIxHlYzPF4bLaeCWLymi+D1G0PE9yqsLr0XT+f5ukJ3zeUL4SRoDtawYt5WxFyNzDn2nliCBJY0iZbGGO50E+FgcohJ03TF5bHS3tqFJa9v+k9+2IlQY2P9Ryuw2RWuKx1GSfH7HHkxgJRqYL4EfPkvyhFzVa5deEE/SQJmj4n22ijONDdqQjd13wOGQX/nrnlXjJKXF2GzmwGBVPO1lKydR7ReQz7eF66T7IbPLesffo5gGCAIYHT/JkqSmAgFYqSl24mf0fosSCsw8+rzW9FUvSfErndO4vUOYV35hfBD3fAx/cOh+z8iHtAYmmGh84yKSRFV0Ww3+fwtETIyU4j41D4Lsh9y0RBvYOmiv/WY+PndBbxe/uR5uKHij9WybG4Z4hjtknAAQzOItqsMG2mho03FkSK3i+hU1la1klc4klB1sm/KRBi7IpWG2HkTbo8DxWw6C08S0OpQDZ2h95i5dqG9P243XAVDg8DBOGMKrRyrigB8I4YCsYrd/zoavmG8l+DJOIlg3zL0Z+Ic3BeqYfm8D1n7+S5cEwe+u7W4TiKoET+tkXkjVO3q0tsao++KQMX3e3xCMqExbX4uJ8s7L1rc28RjD7xMU3MDB+v3suzeD4hnRdGHxQeEg4EWNWjY2cktd2eSiGnU7u3SgE9EICTJ4j/L36hOzns0n1Pbw8Q7tItCnDPRlXWahdP/zIr7y7Hcrg9Y857dRyF2WqPl8zBFSzx8+qYfq0OuALrO5S3HYperthxYaP9k8yG27/ye/D8O/b9mgR7p3fDqF9q4Y/p1TL7P4Mmf1CbDQXUMcPTcPFAvwIY3/vBlZO6j40mTnfi/uVxaByODRIdO/ZYAGaluphXbeH9NqyEp0jrgKPSaiNSk/h/f8eD9Trc55dFVhWL29ekcPtmMYL1qNokOg9pNAeJHDJ7+x1h2b23g041nmkPtiZmACucnIoBYtCsxfV3JF6Hv9vjIcg0h8Hedb586fdEFdVm2Dp1HE+xf00pKl50XKwo5tL+Bd59tCYf8iSmcnQf7ZOCsAmpS3/lFxQ/zXKkW0+KVkyQ1ZLDj6XqSXTqOa2RMVpFLyyDSpFH3VoAjGwIUzR/H4j+NYseW73hrhS/cGUhOBo70XnGpNhtldSg7b7krO6N41SRbMqlTtraKHZsP48xSSMkzYRsuY06TQOt+mESakvirYsRaNW6bM5pfLx1Pp3Gct5+tMb7dFToVbE/cChy7EHS5p9lzAjx03+MTzj7NTNRVt1H131P4GjtobQ6h6QbDRrgYmekmb0omo/PS6Yj4KCvdZ1S81qKaFGl9sC2+lCt8mvVWjt2lrFKTetHYmzO0qbNzHKPHe0lNt+IeYgOgoz2Cvy3Ad5U/sHfHKe3I3pBudcgVfl90GWe7/VK6kpPuBO50pFpmSSIFsYg6XNN0swCCySyqDrd8RkD4uq0x8h7wCdA1mKD/A2h+kYcC1oS8AAAAAElFTkSuQmCC" preserveAspectRatio="none"/></defs></svg>; // Ícone de resposta correta
    const wrongIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="url(#a)" d="M0 0h32v32H0z"/><defs><pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox"><use href="#b" transform="scale(.03125)"/></pattern><image id="b" width="32" height="32" href="data:image/png;base64,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" preserveAspectRatio="none"/></defs></svg>;     // Ícone de resposta errada

    function nextQuestion() {
        if (selectedOption !== null) {
            onNext(selectedOption); // Chama a função onNext com a opção selecionada
            setSelectedOption(null); // Reseta a opção selecionada
        }
    }

    return (
        <>        
            <div className='bg-white rounded-lg p-8 space-y-4'>                
                <h1 className='text-3xl font-bold text-center text-black'>{question}</h1> {/* Exibe a pergunta */}

                <ul className="space-y-3">
                    {options.map((option, index) => (
                        <li className={`flex justify-between items-center p-2 rounded-lg border-2 border-black/30 ${selectedOption != null? '' : 'hover:bg-blue-100 cursor-pointer'}`}                         
                            key={index} onClick={() => selectedOption === null && setSelectedOption(index)}> {/* Define a opção selecionada */}
                            <p className="text-black">{option}</p> {/* Exibe a opção */}
                            {(selectedOption === response && selectedOption === index)?correctIcon:
                            ((selectedOption != response && selectedOption === index)?wrongIcon: '')} {/* Exibe o ícone correto ou errado */}
                        </li>
                    ))}      
                </ul> 

                <div className="flex justify-center">
                    {selectedOption != null &&
                        <button onClick={nextQuestion} className={`rounded-lg p-2 bg-green-600 text-white font-bold hover:bg-green-600/80 cursor-pointer`}> Next </button> /* Botão para avançar para a próxima pergunta */
                    }
                </div> 
            </div>
        </>              
    );
}