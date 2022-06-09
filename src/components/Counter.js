import React from "react";
import { useState } from "react";
import './quoteStyle.css'
const Counter = () => {
    const QUOTEBANK = [
        {
            quote: 'Never let the fear of striking out keep you from playing the game.',
            author: 'Babe Ruth',
        },
        {
            quote: 'Curiosity about life in all of its aspects, I think, is still the secret of great creative people',
            author: 'Leo Burnett',
        },
        {
            quote: 'Life is not a problem to be solved, but a reality to be experienced.',
            author: 'Soren Kierkegaard',
        },
        {
            quote: 'Do all the good you can, for all the people you can, in all the ways you can, as long as you can.',
            author: 'Hillary Clinton',
        },
        {
            quote: 'Everything negative pressure, challenges is all an opportunity for me to rise.',
            author: 'Kobe Bryant',
        },
    ]
    const [quote, setQuote] = useState([])
    let quoteLength = QUOTEBANK.length
    let randomNumber = Math.floor(Math.random() * quoteLength)
    let randomQuote = QUOTEBANK[randomNumber]
    return (
        <div className="mainParent">
            <wrapper id='quote-box'>
                <div className="quoteDiv">
                    <h1>Quote OF The Day</h1>
                    <div id="text">"{randomQuote.quote}"</div>
                    <div id="author">"{randomQuote.author}"</div>
                </div>
                <div className="quoteBtn">
                    <button id="new-quote" onClick={() => setQuote(() =>
                        randomQuote
                    )}>New Quote</button>
                    <a href="twitter.com/intent/tweet" target='_blank' id="tweet-quote">Tweet Quote</a>
                </div>
            </wrapper>
        </div>
    )
}

export default Counter;