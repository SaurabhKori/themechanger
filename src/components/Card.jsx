import React from 'react'
import hanuman from '../assets/lord-hanuman.png'
const Card = () => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src={hanuman} alt="Jai Hanuman" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                       -----------------------------------------------------------------
                       ओम हं हनुमंताय नम:. ओम नमो हनुमते रूद्रावताराय सर्वशत्रुसंहारणाय 
                       सर्वरोग हराय सर्ववशीकरणाय रामदूताय स्वाहा। 
                       ॐ हं हनुमते रुद्रात्मकाय हुं फट।
                        महाबलाय वीराय चिरंजिवीन उद्दते।
                       -----------------------------------------------------------------
                    </h5>
                </a>
                
            </div>
        </div>
    );
}

export default Card
