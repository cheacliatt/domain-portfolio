import React from "react";
import "./style.css";
import Profile from "./chea-profile.PNG";

function HomeBody() {
  return (
    <main class="container" id="main-container">
      <header class="row">
        <div class="col-sm-10">
          <h1>About Myself</h1>
        </div>
        <div class="col-sm-1"></div>
      </header>
      <hr />
      <article class="row main-row">
        <segment class="col-sm-10">
          <img src={Profile} alt="Me" id="chea-profile" />
          <p>
            I am a Full Stack Web and Software Developer, certified through the
            Georgia Institute of Technology. My current skillset includes:
            JavaScript, jQuery, React, Node, Express, MongoDB, and SQL
            databases.
          </p>
          <p>
            I am a Georgia native, originally from Augusta. My hobbies are
            trail-riding on my mountain bike, reading books (currently going
            through the Dune series), and spoiling my two cats. Currently, I am
            seeking opportunities to grow a career in web development around the
            Atlanta area.
          </p>
          <p>
            My field of work has varied the last ten years, from teacher to
            librarian, bartender and restaurant manager. Despite my history
            working within customer service, one of my favorite pastimes is
            working with computers and learning about technology. It is with
            this raw appreciation for understanding new and evolving
            technologies that makes me a prime canidate to work on projects, as
            I aim to grow alongside my career.
          </p>
          <p>
            I have completed a Full Stack Development course offered by the
            Georgia Institute of Technology, receiving a 4.0 for my exemplary
            work. My academic background also includes a Bacherlor of Arts in English
            Composition, with side studies in Computer Science, and a Master of
            Arts in Literature.
          </p>
        </segment>
        <div class="col-sm-1"></div>
      </article>
    </main>
  );
}

export default HomeBody;
