import "./Card.css";
import { Link } from 'react-router-dom';

export interface Content {
  provideText: () => string;
  provideImg?: () => {
    src: string,
    alt: string,
  };
}

export interface Props<T extends Content> {
  title: string;
  content: T;
  date: Date;
  tags: string[];
  tkey: any;
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
  tkey,
}: Props<T>) {
  let tagsHTML = tags.map((tag: string, i: number) => {
    return (
      <div className="tag" key={i}>
        <span className="tag-icon"></span>
        <Link to={'/Category/' + tag} className="tag-text">{tag}</Link>
      </div>
    );
  });

  let imgHtml;

  if (content.provideImg === undefined) { imgHtml = <div /> }
  else {
    let { src, alt } = content.provideImg();
    imgHtml = (
      <div className="content">
        <img src={src} alt={alt} />
      </div>
    )
  }

  return (
    <div className="card" key={tkey}>
      <Link to={'/blog/' + title}>
        <div className="title">{title}</div>
        {imgHtml}
        <div className="content">{content.provideText()}</div>
        <div className="properties">
          <div className="date">{showDate(date)}</div>
          <div className="tags">{tagsHTML}</div>
        </div>
      </Link>
    </div>
  );
}
