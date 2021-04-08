import { useState } from 'react';
import './App.css';
import { CardList } from './components/CardList';
import { Form } from './components/Form';
import { Header } from './components/Header';

const App = () =>  {
  const[cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  }
  const deleteCard = selected => {
    setCards(cards.filter((card) => card.name !== selected));
  }
  
  return (
    <div>
      <header>
      <Header />
     </header>
      <body>
     <Form onSubmit={addNewCard} />
     <CardList cards={cards} deleteCard={deleteCard}/>
     </body>
    </div>
  );
}

export default App;
