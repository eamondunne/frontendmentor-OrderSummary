import React from "react";
import "./card.css";
import Button from "../Button/button";

class CardHero extends React.Component {
  render() {
    return (
      <div className="card-hero">
        <img
          src={process.env.PUBLIC_URL + "/images/illustration-hero.svg"}
          alt="illustration-hero"
        ></img>
      </div>
    );
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <div className="card-content">
        <h1 className="card-header">Order Summary</h1>
        <p className="card-info">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <CardPlanSelector />
        <Button text="Proceed to Payment" styleName="primary" />
        <Button text="Cancel Order" styleName="secondary" />
      </div>
    );
  }
}

class CardPlanSelector extends React.Component {
  render() {
    return (
      <div className="card-plan-selector">
        <img
          src={process.env.PUBLIC_URL + "/images/icon-music.svg"}
          alt="music icon"
        ></img>
        <div className="plan-details">
          <h2>Annual Plan</h2>
          <p className="pricing">$59.99/year</p>
        </div>
        <a href="">Change</a>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <CardHero />
        <CardContent />
      </div>
    );
  }
}

export default Card;
