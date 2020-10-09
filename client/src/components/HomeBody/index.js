import React from "react";
import "./style.css";
import Profile from "./chea-profile.PNG";

function HomeBody() {
  return (
    <main className="container" id="main-container">
      <header className="row">
        <div className="col-sm-10">
          <h1>About Myself</h1>
        </div>
        {/* <div class="col-sm-1"></div> */}
      </header>
      <hr />
      <article className="row main-row">
        <segment className="col-sm-10">
          <img src={Profile} alt="Me" id="chea-profile" />
          <p>
            I am a Full Stack Web and Software Developer, certified through the
            Georgia Institute of Technology. My current skillset includes
            JavaScript application development with Object Oriented Programming,
            jQuery, React, Node, Express, MongoDB and SQL databases. I am also
            comfortable with participating with Agile practices.
          </p>
          <p>
            I am a Georgia native, originally from Augusta, but now I reside in
            metro Atlanta. My hobbies are trail-riding on my mountain bike,
            reading books (currently going through the Dune series), and
            spoiling my two cats. Being a life-long learner, I am always seeking
            opportunities to grow a career in web development and enterpricing
            technologies around the Atlanta area.
          </p>
          <p>
            Currently, I am employed as a Systems Adminstrator for American
            Global Wealth Services, where I primarily create and update workflow
            boards with Jira, facilitate transfer of Excel spreadsheets to SQL
            database structures, and varied front-end development tasks. I am
            also an intern for a startup enterprise application called Sky
            Retro, where I contribute on both front-end and back-end
            development. As you can see, I like to stay busy!
          </p>
          <p>
            I have completed a Full Stack Development course offered by the
            Georgia Institute of Technology, receiving a 4.0 for my exemplary
            work. My academic background also includes a Bacherlor of Arts in
            English Composition, with side studies in Computer Science, and a
            Master of Arts in Literature.
          </p>
        </segment>
        <div className="col-sm-1"></div>
      </article>
    </main>
  );
}

export default HomeBody;
