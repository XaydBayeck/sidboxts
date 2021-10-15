import './HomeTitle.css'

export interface Props {
    blogName: string,
    links: {
        linkName: string,
        linkPath: string,
    }[],
}

export default function HomeTitle({ blogName, links }: Props) {
    return (
        <div className="home-title">
            <div className="blog-name">
                {blogName}
            </div>
            <div className="links">
                <ul id="links">
                    {links.map(({ linkName, linkPath }, i) => {
                        return <li key={i.toString()}><a href={linkPath}>{linkName}</a></li>
                    })}
                </ul>
            </div>
        </div>
    );
}
