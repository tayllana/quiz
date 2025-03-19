type Props = {
    results: []
}

export const Result = ({results}: Props) => {
    return (
        <>        
            <div className='bg-white rounded-lg p-8 space-y-4'>                
                <h1 className='text-3xl font-bold text-center text-black'>Resultado</h1>

                <ul className="space-y-3">
                                        
                </ul> 
            </div>
        </>       
    )
}