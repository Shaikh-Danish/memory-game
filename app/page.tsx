"use client";

import { useState } from "react";

import Card from "@/components/Card";

export default function Home() {
  const [cards, setCards] = useState<Cards[]>(() =>
    shuffleArray([
      {
        id: "1",
        name: "bara bara no mi",
        src: "/bara_bara_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "2",
        name: "bara bara no mi",
        src: "/bara_bara_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "3",
        name: "gomu gomu no mi",
        src: "/gomu_gomu_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "4",
        name: "gomu gomu no mi",
        src: "/gomu_gomu_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "5",
        name: "hana hana no mi",
        src: "/hana_hana_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "6",
        name: "hana hana no mi",
        src: "/hana_hana_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "7",
        name: "ito ito no mi",
        src: "/ito_ito_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "8",
        name: "ito ito no mi",
        src: "/ito_ito_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "9",
        name: "mera mera no mi",
        src: "/mera_mera_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "10",
        name: "mera mera no mi",
        src: "/mera_mera_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "11",
        name: "ope ope no mi",
        src: "/ope_ope_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "12",
        name: "ope ope no mi",
        src: "/ope_ope_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "13",
        name: "yami yami no mi",
        src: "/yami_yami_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "14",
        name: "yami yami no mi",
        src: "/yami_yami_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "15",
        name: "sara sara no mi",
        src: "/sara_sara_icon.png",
        isFlipped: false,
        isDone: false,
      },
      {
        id: "16",
        name: "sara sara no mi",
        src: "/sara_sara_icon.png",
        isFlipped: false,
        isDone: false,
      },
    ])
  );
  const [selectedCards, setSelectedCards] = useState<any[]>([]);

  return (
    <main className="flex justify-center p-5 my-10">
      <div className="grid grid-cols-4 w-[50vw] items-center justify-center">
        {cards.map((card) => (
          <Card
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            key={card.id}
            cards={cards}
            setCards={setCards}
            card={card}
          />
        ))}
      </div>
    </main>
  );
}

function shuffleArray(array: Cards[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
