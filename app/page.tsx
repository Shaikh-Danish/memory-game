"use client";

import { useState, useEffect } from "react";

import Card from "@/components/Card";
import { useCards } from "@/hooks/cards";
import { sleep } from "@/utils/utils";

export default function Home() {
  const { cards, flip, markDoneAndFlip } = useCards();

  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [visitedCards, setVisitedCards] = useState<Cards[] | []>([]);
  const [turn, setTurn] = useState<number>(0);

  useEffect(() => {
    if (turn === 1 && selectedCards.length === 0) {
      playComp();
    }
  }, [turn]);

  const playComp = async () => {
    await sleep(1000);
  
    let ids: string[] = cards.filter(card => !card.isDone).map(card => card.id);
  
    if (ids.length < 2) return; 
  
    let randomIndex = Math.floor(Math.random() * ids.length);
    let cardOneId = ids[randomIndex];
    let cardOne = cards.find(card => card.id === cardOneId);
  
    flip(cardOne.id);
  
    await sleep(1000);
  
    ids = ids.filter(id => id !== cardOneId);
    randomIndex = Math.floor(Math.random() * ids.length);
    let cardTwoId = ids[randomIndex];
    let cardTwo = cards.find(card => card.id === cardTwoId);
  
    flip(cardTwo.id);
  
    await sleep(1000);
  
    if (cardOne.name === cardTwo.name) {
      markDoneAndFlip(cardOne.id, cardTwo.id);
    } else {
      flip(cardOne.id);
      flip(cardTwo.id);
    }
  
    await sleep(200);
    setTurn(0);
  };

  return (
    <main
      className={`flex justify-center h-svh items-center ${
        turn === 0 ? "bg-orange-400" : "bg-green-400"
      }`}
    >
      <div className="grid grid-cols-4 h-[85%] items-center justify-center bg-white py-4 px-8 gap-x-5 rounded-lg">
        {cards.map((card) => (
          <Card
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            key={card.id}
            flip={flip}
            markDoneAndFlip={markDoneAndFlip}
            card={card}
            setTurn={setTurn}
            turn={turn}
          />
        ))}
      </div>
    </main>
  );
}

// const [cards, setCards] = useState<Cards[]>(() =>
//   shuffleArray([
//     {
//       id: "1",
//       name: "bara bara no mi",
//       src: "/bara_bara_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "2",
//       name: "bara bara no mi",
//       src: "/bara_bara_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "3",
//       name: "gomu gomu no mi",
//       src: "/gomu_gomu_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "4",
//       name: "gomu gomu no mi",
//       src: "/gomu_gomu_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "5",
//       name: "hana hana no mi",
//       src: "/hana_hana_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "6",
//       name: "hana hana no mi",
//       src: "/hana_hana_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "7",
//       name: "ito ito no mi",
//       src: "/ito_ito_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "8",
//       name: "ito ito no mi",
//       src: "/ito_ito_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "9",
//       name: "mera mera no mi",
//       src: "/mera_mera_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "10",
//       name: "mera mera no mi",
//       src: "/mera_mera_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "11",
//       name: "ope ope no mi",
//       src: "/ope_ope_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "12",
//       name: "ope ope no mi",
//       src: "/ope_ope_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "13",
//       name: "yami yami no mi",
//       src: "/yami_yami_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "14",
//       name: "yami yami no mi",
//       src: "/yami_yami_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "15",
//       name: "sara sara no mi",
//       src: "/sara_sara_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "16",
//       name: "sara sara no mi",
//       src: "/sara_sara_icon.png",
//       isFlipped: false,
//       isDone: false,
//     },
//   ])
// );
// const [cards, setCards] = useState<Cards[]>(() =>
//   shuffleArray([
//     {
//       id: "1",
//       name: "assasin",
//       src: "/assasin.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "2",
//       name: "assasin",
//       src: "/assasin.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "3",
//       name: "iron-man",
//       src: "/avengers.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "4",
//       name: "iron-man",
//       src: "/avengers.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "5",
//       name: "black-panther",
//       src: "/black.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "6",
//       name: "black-panther",
//       src: "/black.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "7",
//       name: "bulls-eye",
//       src: "/bullseye.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "8",
//       name: "bulls-eye",
//       src: "/bullseye.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "9",
//       name: "devil",
//       src: "/devil.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "10",
//       name: "devil",
//       src: "/devil.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "11",
//       name: "login",
//       src: "/logan.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "12",
//       name: "login",
//       src: "/logan.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "13",
//       name: "venom",
//       src: "/venom.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "14",
//       name: "venom",
//       src: "/venom.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "15",
//       name: "vision",
//       src: "/vision.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "16",
//       name: "vision",
//       src: "/vision.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "17",
//       name: "zemo",
//       src: "/zemo.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "18",
//       name: "zemo",
//       src: "/zemo.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "19",
//       name: "spider-man",
//       src: "/marvel.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "20",
//       name: "spider-man",
//       src: "/marvel.png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "21",
//       name: "captain-america",
//       src: "/marvel (2).png",
//       isFlipped: false,
//       isDone: false,
//     },
//     {
//       id: "22",
//       name: "captain-america",
//       src: "/marvel (2).png",
//       isFlipped: false,
//       isDone: false,
//     },
//   ])
// );
