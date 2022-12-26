import React, { useState } from "react";
import {v4 as uuid} from "uuid"
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from './hooks/useAxios'


/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard] = useAxios([], "https://deckofcardsapi.com/api/deck/new/draw/");
  function formatCard(data) {
    return {
      image: data.cards[0].image,
      id: uuid()
    };
  }
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() =>addCard(formatCard)}>Add a playing card!</button>
      </div>
       <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
