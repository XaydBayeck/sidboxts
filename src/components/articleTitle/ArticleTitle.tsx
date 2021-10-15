import { Link } from 'react-router-dom'
import './ArticleTitle.css'

export interface TitleProps {
    title: string,
    date: {
        year: number,
        month: number,
        day: number,
    },
    tags: string[],
}

export default function ArticleTitle({ title, date, tags }: TitleProps) {
    return (
        <div className="article-title">
            <div className="title title-text">{title}</div>
            <div className="title-properties properties">
                <div className="date">
                    {date.year + '-' + date.month + '-' + date.day}
                </div>
                <div className="tags">
                    {tags.map((tag, i) => {
                        return (
                            <div className="tag" key={i}>
                                <Link to={'/Category/' + tag} className="tag-text">{tag}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
