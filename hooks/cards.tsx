"use client";

import { useState } from "react";

type CardId = string | number;

export const useCards = () => {
  const [cards, setCards] = useState<Cards[]>(() =>
    shuffleArray([
      {
        id: "1",
        name: "assasin",
        src: "/assasin.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "2",
        name: "assasin",
        src: "/assasin.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "3",
        name: "iron-man",
        src: "/avengers.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "4",
        name: "iron-man",
        src: "/avengers.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "5",
        name: "black-panther",
        src: "/black.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "6",
        name: "black-panther",
        src: "/black.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "7",
        name: "bulls-eye",
        src: "/bullseye.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "8",
        name: "bulls-eye",
        src: "/bullseye.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "9",
        name: "devil",
        src: "/devil.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "10",
        name: "devil",
        src: "/devil.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "11",
        name: "login",
        src: "/logan.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "12",
        name: "login",
        src: "/logan.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "13",
        name: "venom",
        src: "/venom.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "14",
        name: "venom",
        src: "/venom.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "15",
        name: "vision",
        src: "/vision.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "16",
        name: "vision",
        src: "/vision.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "17",
        name: "zemo",
        src: "/zemo.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "18",
        name: "zemo",
        src: "/zemo.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "19",
        name: "spider-man",
        src: "/marvel.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "20",
        name: "spider-man",
        src: "/marvel.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "21",
        name: "captain-america",
        src: "/marvel (2).png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "22",
        name: "captain-america",
        src: "/marvel (2).png",
        isFlipped: false,
        isDone: false,
      },
    ])
  );

  const flip = (cardOne: CardId, cardTwo?: CardId) => {
    setCards((prevCards) =>
      prevCards.map((c) => {
        if (cardOne == c.id || cardTwo == c.id) {
          return {
            ...c,
            isFlipped: !c.isFlipped,
          };
        }

        return c;
      })
    );
  };

  const markDoneAndFlip = (cardOneId: CardId, cardTwoId: CardId) => {
    
    setCards((prevCards) =>
      prevCards.map((c) => {
        if (c.id == cardOneId || c.id == cardTwoId) {
          return {
            ...c,
            isFlipped: false,
            isDone: true,
          };
        }

        return c;
      })
    );
  };

  return { cards, flip, markDoneAndFlip };
};

function shuffleArray(array: Cards[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
