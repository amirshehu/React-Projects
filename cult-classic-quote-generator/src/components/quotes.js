import React from 'react';
import Header from './header'

import Cultclassic from './cultclassics'
import { GiveMeOne } from './givemeone';


class QuotesApp extends React.Component {

    visibility = false;
    quotes = ['You have bewitched me, body and soul.', "I'm going to make him an offer he can't refuse.", "Toto, I've got a feeling we're not in Kansas anymore.", "May the Force be with you.", "I feel the need — the need for speed!"];
    movie = ["Pride and Prejudice (2005)", "The Godfather (1972)", "The Wizard of Oz (1939)", "Star Wars (1977)", 'Top Gun (1986)'];

    state = {
        quotes: [],
        movie: []
    }

    pickOne = () => {
        // e.preventDefault();
        let random = Math.round(Math.random() * this.quotes.length)
        console.log(random)
        this.visibility = false
        if (random == 0) {
            random += 1
        }
        this.setState(() => ({
            quotes: [this.quotes[random - 1]],
            movie: [this.movie[random - 1]]
        }))
        this.render()
        return (this.state)
    }
    clearAll = () => {
        this.setState(() => ({
            quotes: [],
            movie: []
        }))
        this.render()
        return (this.state)
    }

    hideAnswer = () => {
        this.visibility = !this.visibility
        this.setState(() => ({
            visibility: !this.visibility
        }))

        this.render()
        // return (this.state)
    }

    render() {
        return (
            <div>
                <Header />

                <GiveMeOne pickOne={this.pickOne} cultQuote={this.state.quotes} cultMovie={this.state.movie}
                    clearAll={this.clearAll}
                    hideAnswer={this.hideAnswer} visibility={this.visibility} />
                {/* <Cultclassic test={this.test} cultclassic=this /> */}
            </div>
        );
    }
}

export default QuotesApp;