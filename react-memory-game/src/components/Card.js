import React, { useState, useEffect } from 'react'
import Timer from './Timer';
import Header from './Header';


function Card(props) {
    const [moves, setMoves] = useState(0);
    const [score, setScore] = useState(0);
    const [newGame, setNewGame] = useState(true)
    const [matches, setMatches] = useState(0)
    let matchCards = [];
    let openCards = [];

    useEffect(() => {
        
        console.log('shuffling')
        shuffleArray(props.cards)
        setNewGame(false)

    }, []);
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
            setMoves(moves + 1)
        }

        if (openCards.length === 2) {
            let card1 = openCards[1]
            let card2 = openCards[0]

            if (card1.classList.value === card2.classList.value) {//need value for this part
                setMatches(matches + 1)
                console.log(matches)
                matchCards.push(card1.classList.value, card2.classList.value)

                setScore(score + 1)
                
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

        if (matches === 7) {
            setTimeout(function(){
                alert(`Game Over! Score: ${score} Number of moves: ${moves} `)
            // matchCards = []
            // openCards = []
            // props.cards.classList.remove("open")
            // props.cards.classList.add("closed")
            // setNewGame(true)
            },1000)
            
        }
        }

        
    }


    return (
        <div>
            <Header />
            <Timer setSeconds={props.setSeconds} seconds={props.seconds} />
            <h3 className='score'>Moves: {moves} </h3>
            <h3 className='score'>Score: {score}</h3>
    
            <div className='deck'>
                {props.cards.map(card => {
                    return <i className={`${card} closed`} onClick={clickHandler} />

                })}

            </div>

        </div>
    )
}

export default Card
