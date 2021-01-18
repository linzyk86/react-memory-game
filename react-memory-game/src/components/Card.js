import React, {useState} from 'react'



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
        
        if(openCards.length === 0){
            let card1 = e.target
            card1.classList.remove('closed')
            card1.classList.add('open')
            openCards.push(card1)
            console.log(openCards)
        }
        else if(openCards.length ===1){
            let card2 = e.target
            card2.classList.remove('closed')
            card2.classList.add('open')
            openCards.push(card2)
            console.log(openCards)

            

        }
        if(openCards.length ===2){
            let card1 = openCards[1]
            let card2 = openCards[0]
            console.log(card1.value, card2.clasList)

            if(card1.classList.value===card2.classList.value){//need value for this part
                console.log('Matched!!')
                matchCards.push(card1, card2)
                openCards = []

            }
            else{
                setTimeout(function(){
                card1.classList.remove('open')///////!!!!!!works!
                card2.classList.remove('open')
                card1.classList.add('closed')///////!!!!!!works!
                card2.classList.add('closed')
                
                },1000);
                openCards = []
            }
            
        }
        
         
        }    


    //figure out how to change classnames 

   

    

    return (
        <div>
            <h1>Memory Game</h1>
            <div className='deck'>
                {props.cards.map(card => {
                    return <i className={`${card} closed`} onClick={clickHandler} key={card.id}/>

                })}

            </div>

        </div>
    )
}

export default Card
