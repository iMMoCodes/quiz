import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import image from "../../assets/img/background.jpg";

const QuizInstructions = () => (
   <>
   <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
   <div className="instructions container">
      <h1>How to Play the Game</h1>
      <p>Ensure you read this guide from start to finish.</p>
      <ul className="browser-default" id="main-list">
         <li>The game has a duration of 15 minutes and ends as soon as your time expires.</li>
         <li>Each game consists of 15 questions.</li>
         <li>Every question contains 4 options.
            <img src={image} alt="Options example"/>
         </li>
         <li>Select the option which best answers the question by clicking (or selecting) it.
            <img src={image} alt="Answer example"/>
         </li>
         <li>Each game has 2 lifelines namely:
            <ul id="sublist">
               <li>2 50-50 chances</li>
               <li>5 hints</li>
            </ul>
         </li>
         <li>
            Selecting a 50-50 lifeline by clicking the icon
            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
            will remove 2 wrong answers, leaving the correct answer and one wrong answer.
            <img src={image} alt="Fifty-Fifty example"/>
         </li>
         <li>
            Using a hint by clicking the icon
            <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
            will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as possible on a single question.
            <img src={image} alt="Hints example"/>
         </li>
         <li>Feel free to quit the game at any time. In that case your score will be revealed afterwards.</li>
         <li>The timer starts as soon as the game loads.</li>
      </ul>
      <div>
         <span className="left"><Link to="/">Take me back</Link></span>
         <span className="right"><Link to="/play/quiz">Start game</Link></span>
      </div>
   </div>
   </>
)

export default QuizInstructions
