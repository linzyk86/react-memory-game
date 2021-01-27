import React, { useState, useEffect } from 'react'
import Timer from './Timer';
import Header from './Header';




function Card(props) {
    const [moves, setMoves]= useState(0)
    const [score, setScore] = useState(0)
    let matchCards = []
    let openCards = []
  
  
//Shuffle function from Stack Overflow............//
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
        if (openCards.length === 0) {
            let card1 = e.target
            card1.classList.remove('closed')
            card1.classList.add('open')
            openCards.push(card1)
        }
        else if (openCards.length === 1) {
            let card2 = e.target
            card2.classList.remove('closed')
            card2.classList.add('open')
            openCards.push(card2) 
        }

        if (openCards.length === 2) {
            let card1 = openCards[1]
            let card2 = openCards[0]

            if (card1.classList.value === card2.classList.value) {//need value for this part
                matchCards.push(card1, card2)
                openCards = []
            }
            else {
                setTimeout(function () {
                    card1.classList.remove('open')
                    card2.classList.remove('open')
                    card1.classList.add('closed')
                    card2.classList.add('closed')

                }, 1000);
                openCards = []
            }
        }
        if (matchCards.length === 16) {
            alert('You WIN!')
            matchCards = []
            openCards = []
            props.cards.classList.remove("open")
            props.cards.classList.add("closed")
            // startGame()  
    }
           
}
     

    return (
        <div>
            <Header />
            <Timer setSeconds = {props.setSeconds} />
           
            <div className='deck'>
                {props.cards.map(card => {
                    return <i className={`${card} closed`} onClick={clickHandler} />

                })}

            </div>

        </div>
    )
}

export default Card
