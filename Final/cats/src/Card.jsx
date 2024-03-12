import cards from "./cards";
import './css/Cats.css';
import Button from "./Button";
import { useState } from 'react'
import Form from "./Form";

function Card () {
    const [clickButton, setClickButton] = useState(false);
    const [filterCategory, setFilterCategory] = useState('all');

    const handleFilterChange = (category) => {
        setFilterCategory(category);
    };

    const handleButtonClick = () => {
        setClickButton(true);
    }

    const filteredCards = filterCategory === 'all'
        ? cards
        : cards.filter(item => item.category === filterCategory);

    const cardList = filteredCards.map ( card => {
        const showButton = card.button === "true";

        return (
        <div key={card.id} className={`events-card cat${card.id}`}>
            <img 
                className="card-picture" 
                src={card.pic} 
                alt={card.alt}/>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-texts">{card.text}</p>
            {showButton && 
                <Button children={"Register"} 
                    onClick={handleButtonClick} 
                    type={"button"} 
                    visual={"button"}
                    className={"cards_button"}
                />
            }            
        </div> 
        );
    });

    return (
        <>
            <div className="filter-buttons">
                <span className="filter-text">Filter:</span>
                <button onClick={() => handleFilterChange('all')}>All</button>
                <button onClick={() => handleFilterChange('Brown')}>Brown</button>
                <button onClick={() => handleFilterChange('Brown and yellow')}>Brown and yellow</button>
                <button onClick={() => handleFilterChange('White and grey')}>White and grey</button>
                <button onClick={() => handleFilterChange('White')}>White</button>
                <button onClick={() => handleFilterChange('Brown and white')}>Brown and white</button>
            </div>

            {clickButton ?
                <Form setClickButton={setClickButton}/>
                : 
                <div className="events-main-container">
                    {cardList}
                </div>
            }  
        </>
        
    )
};

export default Card;