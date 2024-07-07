"use client";

import React from "react";
import Image from "next/image";

import { sleep } from "@/utils/utils";

interface CardProps {
  card: Cards;
  selectedCards: CurrCard[] | Cards[];
  setSelectedCards: React.Dispatch<React.SetStateAction<Cards[]>>;
  turn: number;
  setTurn: React.Dispatch<React.SetStateAction<number>>;
  flip: (idOne: string | number, idTwo?: string | number) => void;
  markDoneAndFlip: (idOne: string | number, idTwo: string | number) => void;
}

interface CurrCard extends Cards {
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({
  card,
  setSelectedCards,
  selectedCards,
  flip,
  markDoneAndFlip,
  turn,
  setTurn,
}) => {
  const handleClick = async () => {
    const updateCard = { ...card, isFlipped: !card.isFlipped };
  
    flip(card.id);
  
    if (selectedCards.length === 1) {
      if (selectedCards[0].name === updateCard.name) {
        await sleep(700);
        markDoneAndFlip(card.id, selectedCards[0].id);
        
        await sleep(200);
        setTurn(1);
  
        return setSelectedCards([]);
      } else {
        await sleep(700);
        flip(card.id, selectedCards[0].id);
  
        await sleep(200);
        setTurn(1);
  
        return setSelectedCards([]);
      }
    }
  
    setSelectedCards((prevCards) => [updateCard, ...prevCards]);
  };

  return (
    <>
      {card.isDone ? (
        <div className="card"></div>
      ) : (
        <div
          className={`card-container ${card.isFlipped ? "flipped" : ""}`}
          onClick={() => !card.isFlipped && turn === 0 && handleClick()}
        >
          <div className="card">
            <div className="card-front"></div>
            <div className="card-back">
              {card.isFlipped && (
                <Image src={card.src} height={40} width={40} alt={card.name} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function same(arr: string[]): boolean {
  const firstElem = arr[0];

  return arr.every((item) => item === firstElem);
}

export default Card;
