import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { readDeck } from '../utils/api/index';
import // not enough cards (not made yet)


function Study (){

    const { deckId } = useParams();
    const history = useHistory();
    const [deck, setDeck] = useState({});

    //set study state
    const [study, setStudy] = useState({
      cards: [],
      currentCard: 0,
      cardMax: 0,
      front: true,
      flipped: false,
    });

    // load deckID --> cards with readDeck
    //set setStudy initial state
    useEffect(() => {
        async function loadDecks() {
          const loadedDeck = await readDeck(deckId);
          setDeck(loadedDeck);
          setStudy({
            cards: loadedDeck.cards,
            currentCard: 0,
            cardMax: loadedDeck.cards.length,
            front: true,
            flipped: false,
          });
        }
        loadDecks();
      }, []);


// There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).
// The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.

// Cards are shown one at a time, front-side first.

// A button at the bottom of each card "flips" it to the other side.

// After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card.

// After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck.

// If the user does not restart the deck, they should return to the home screen.

// Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.


}
