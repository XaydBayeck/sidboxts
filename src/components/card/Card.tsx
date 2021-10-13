import * as React from "react";
import "./Card.css";

export interface Content {
  converToText: () => string;
}

export interface Props<T extends Content> {
  title: string;
  content: T;
  date: Date;
  tags: string[];
  key: any;
}

interface Date {
  year: number;
  month: number;
  day: number;
}

function showDate(date: Date) {
  return "Posted on " + date.year + "-" + date.month + "-" + date.day;
}

export default function Card<T extends Content>({
  title,
  content,
  date,
  tags,
  key,
}: Props<T>) {
  let tagsHTML = tags.map((tag: string, i: number) => {
    return (
      <div className="tag" key={i}>
        <span className="tag-icon"></span>
        <span className="tag-text">{tag}</span>
      </div>
    );
  });

  return (
    <div className="card" key={key}>
      <div className="title">{title}</div>
      <div className="content">{content.converToText()}</div>
      <div className="properties">
        <div className="date">{showDate(date)}</div>
        <div className="tags">{tagsHTML}</div>
      </div>
    </div>
  );
}
