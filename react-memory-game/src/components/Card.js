import React from 'react'



function Card(props) {
    let matchCards = []
    let openCards = []

     function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    shuffleArray(props.cards)


    function clickHandler(e) {
        e.target.classList.add('open');
        e.target.classList.remove('closed')
        let cardId = e.target.classList.value
        console.log(cardId)
        openCards.push(cardId)
        console.log(openCards, matchCards)
        

    }

   

    

    return (
        <div>
            <h1>Memory Game</h1>
            <div className='deck'>
                {props.cards.map(card => {
                    return <i className={`${card} closed`} onClick={clickHandler} />

                })}

            </div>

        </div>
    )
}

export default Card
