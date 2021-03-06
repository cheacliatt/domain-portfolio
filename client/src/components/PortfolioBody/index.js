import React from "react";
import "./style.css";
import Pokemon from "./assets/pokess.PNG";
import Movie from "./assets/movie.PNG";
import Password from "./assets/password.PNG";
import Scheduler from "./assets/scheduler.PNG";
import Tracker from "./assets/tracker.PNG";
import Weather from "./assets/weather.PNG";
import Employee from "./assets/emdirsh.PNG";
import Book from "./assets/bookscreenshot.PNG";
import TPacker from "./assets/trackPacker.PNG";
import Budget from "./assets/budgetsh.PNG";

function PortfolioBody() {
  return (
    <main className="container" id="portfolio-container">
      <header className="row">
        <div className="col">
          <h1>Portfolio</h1>
        </div>
      </header>
      <hr />
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://cac-google-books.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Book} alt="Google Books ScreenShot" />
          </a>
          <br />
          <h5>Google Book Search </h5>
          <a
            href="https://github.com/cheacliatt/react-google-book-search"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A full MERN app that allows users to look up books and add them to
            personal DB using Mongoose models.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://trackpacker.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={TPacker} alt="Track Packer ScreenShot" />
          </a>
          <br />
          <h5>Track Packer </h5>
          <a
            href="https://github.com/cheacliatt/trackPacker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A React app to keep track of equipment. Authenticated with
            JWT, designed with Material UI, and database through MongoDB.
          </p>
        </div>
      </segment>
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://gt-budget-tracker.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Budget} alt="Budget Tracker ScreenShot" />
          </a>
          <br />
          <h5>Budget Tracker </h5>
          <a
            href="https://github.com/cheacliatt/budget-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A web application that tracks a user's budget with MongoDB and
            Mongoose models.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/gt-employee-directory-cac/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Employee} alt="Employee Directory ScreenShot" />
          </a>
          <br />
          <h5>Employee Directory </h5>
          <a
            href="https://github.com/cheacliatt/gt-employee-directory-cac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            An employee directory model application made using React and
            RandomUser API.
          </p>
        </div>
      </segment>
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/Staying-in-Tonight-Generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Movie} alt="Movie Suggestion ScreenShot" />
          </a>
          <br />
          <h5>Movie Generator </h5>
          <a
            href="https://github.com/cheacliatt/Staying-in-Tonight-Generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A movie and video game recommendation generator using jQuery and
            API's.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/gt-weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Weather} alt="Weather Forecast ScreenShot" />
          </a>
          <br />
          <h5>Weather Forecast </h5>
          <a
            href="https://github.com/cheacliatt/gt-weather-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A weather forecast web application that is made using jQuery and a
            weather API.
          </p>
        </div>
      </segment>
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/gt-work-day-scheduler/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Scheduler} alt="Work Scheduler ScreenShot" />
          </a>
          <br />
          <h5>Work Planner </h5>
          <a
            href="https://github.com/cheacliatt/gt-work-day-scheduler"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A work day planner built with Javascript and Moment JS.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/gt-password-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Password} alt="Password ScreenShot" />
          </a>
          <br />
          <h5>Password Generator </h5>
          <a
            href="https://github.com/cheacliatt/gt-password-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A generator that creates for the user a specified password.
          </p>
        </div>
      </segment>
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://gt-poketrader.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Pokemon} alt="Pokemon App ScreenShot" />
          </a>
          <br />
          <h5>Card Collector App </h5>
          <a
            href="https://github.com/cheacliatt/poketrader-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A website hosting MySQL database for collecting cards.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://drive.google.com/file/d/166ca_0bjH4tHpEGkrb_EkgIUOZiyjl8T/view"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={Tracker} alt="CLA ScreenShot" />
          </a>
          <br />
          <h5>Command Line App </h5>
          <a
            href="https://github.com/cheacliatt/gt-employee-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A CLA that keeps track of employees within an organization.
          </p>
        </div>
      </segment>
    </main>
  );
}

export default PortfolioBody;
