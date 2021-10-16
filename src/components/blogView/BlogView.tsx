import axios from 'axios';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
                <ReactMarkdown
                    className="markdown"
                    remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
                    children={this.state.text}
                    components={{
                        code({ inline, className, children }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={materialDark}
                                    language={match[1]}
                                    PreTag="div"
                                />
                            ) : (
                                <code className={className} >
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
            </div>
        )
    }
}
