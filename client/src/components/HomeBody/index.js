import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import Profile from "./chea-profile.PNG";

function HomeBody() {
  return (
    <main className="container" id="main-container">
      <Helmet>
        <title>Chea Cliatt's Portfolio</title>
        <meta
          name="description"
          content="The Personal profile of Chea Cliatt, aspiring web and software engineer"
        />
        <meta
          name="keywords"
          content="Chea Cliatt,SWE,Engineer,Chea,Cliatt,software engineer"
        />
      </Helmet>
      <header className="row">
        <div className="col-sm-10">
          <h1>About Myself</h1>
        </div>
        {/* <div class="col-sm-1"></div> */}
      </header>
      <hr />
      <article className="row main-row">
        <segment className="col-sm-10">
          <img src={Profile} alt="Chea Cliatt" id="chea-profile" />
          <p>
            I am a Full Stack Web and Software Developer, certified through the
            Georgia Institute of Technology. My current skillset includes
            JavaScript application development with Object Oriented Programming,
            jQuery, React, Node, Express, Git, MongoDB and SQL databases,
            designing Unit Tests with Jest and Chai, and some working knowledge
            in Java. I am also comfortable working with Agile practices in
            team-driven, enterprise development.
          </p>
          <p>
            A Georgia native, originally from Augusta, I now reside within the
            Atlanta metropolitan area. My hobbies are trail-riding on my
            mountain bike, reading books (currently going through the Dune
            series), cooking, and spoiling my two cats. Being a life-long
            learner, I am always seeking opportunities to grow a career in web
            development and enterprising technologies around the Atlanta area,
            but I am also comfortable with remote work.
          </p>
          <p>
            Currently, I am a Software Engineer intern for a startup enterprise
            application called &#160;
            <a
              href="https://www.skyretro.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sky Retro
            </a>
            , where I contribute on both front-end and back-end development.
            This includes database design and implementation with MongoDB,
            designing service layer Express routes monitored by Unit Tests,
            integration testing, React component construction, and debugging.
            Recently, I also completed a contract as a Systems Administrator for
            American Global Wealth Services, where I primarily created and
            updated workflow boards with Jira, facilitate transfer of Excel
            spreadsheets to SQL database structures, and varied front-end
            development tasks with Wordpress. As you can see, I like to stay
            busy!
          </p>
          <p>
            I have completed a Full Stack Development course offered by the
            Georgia Institute of Technology, receiving a 4.0 for my exemplary
            work. My academic background also includes a Bachelor of Arts in
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
