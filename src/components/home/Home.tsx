import './Home.css';

import CardsDrawers from "../card/CardsDrawers";
import blogs from "../../resources/blogs.json";

let nblogs = blogs.map((blog) => {
    return {
        ...blog,
        content: {
            ...blog.content,
            provideText: () => {
                return blog.content.str;
            },
        },
        tkey: {},
    };
});

export default function Home() {
    return (
        <div className="home">
            <CardsDrawers cards={nblogs} />
        </div>
    )
}
