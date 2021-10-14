import * as React from "react";
import "./CardsDrawers.css";
import * as Cardt from "./Card";
import Card from "./Card";

export interface Props<T extends Cardt.Content> {
  cards: Cardt.Props<T>[];
}

export default function CardsDrawers<T extends Cardt.Content>({
  cards,
}: Props<T>) {
  let cardsHTML = cards.map(
    ({ title, content, date, tags }: Cardt.Props<T>, i: number) => {
      return (
        <Card title={title} content={content} date={date} tags={tags} tkey={i} key={i} />
      );
    }
  );

  return <div className="cards-drawers">{cardsHTML}</div>;
}
