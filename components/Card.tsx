"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CardProps {
  cards: Cards[];
  card: Cards;
  selectedCards: CurrCard[] | Cards[];
  setSelectedCards: React.Dispatch<React.SetStateAction<Cards[]>>;
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>;
}

interface CurrCard extends Cards {
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({
  card,
  setSelectedCards,
  selectedCards,
  cards,
  setCards,
}) => {
  const handleClick = () => {
    const updateCard = { ...card, isFlipped: !card.isFlipped };

    setCards((prevCards) =>
      prevCards.map((c) => {
        if (c.id === card.id) {
          return {
            ...c,
            isFlipped: !c.isFlipped,
          };
        }

        return c;
      })
    );

    if (selectedCards.length === 1) {
      if (selectedCards[0].name === updateCard.name) {
        setTimeout(
          () =>
            setCards((prevCards) =>
              prevCards.map((c) => {
                if (c.id === card.id || c.id === selectedCards[0].id) {
                  return {
                    ...c,
                    isFlipped: false,
                    isDone: true,
                  };
                }

                return c;
              })
            ),
          1000
        );

        return setSelectedCards((prevCards) => []);
      }

      setTimeout(
        () =>
          setCards((prevCards) =>
            prevCards.map((c) => {
              if (c.id === card.id || c.id === selectedCards[0].id) {
                return {
                  ...c,
                  isFlipped: false,
                };
              }

              return c;
            })
          ),
        1000
      );

      return setSelectedCards((prevCards) => []);
    }

    setSelectedCards((prevCards) => [updateCard, ...prevCards]);
  };

  return (
    <>
      {card.isDone ? (
        <div></div>
      ) : (
        <div
          className={`card-container ${card.isFlipped ? "flipped" : ""}`}
          onClick={() => !card.isFlipped && handleClick()}
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
