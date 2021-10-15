import axios from 'axios';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import './BlogView.css';
import './markdown4.css'

export default class BlogView extends React.Component<{ name: string }, { text: string }> {
    state = { text: "There is no Article" }

    componentDidMount() {
        this.getMarkdown();
    }

    getMarkdown() {
        axios.get<string>('/sidboxts/markdown/' + this.props.name + ".md", { responseType: 'text' })
            .then((res) => {
                this.setState({ text: res.data })
                console.log(this.state)
            })
    };

    render() {
        return (
            <div className='blog-view'>
                <ReactMarkdown children={this.state.text} className="markdown" />
            </div>
        )

    }
}
