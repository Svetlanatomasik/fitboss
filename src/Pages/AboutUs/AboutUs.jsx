import React from "react";
import "./aboutUs.scss";
import Footer from "../../Components/Footer";
import Habits from "../../Images/habits.jpg";
import Smiley from "../../Images/smiley.png";
import LittleThings from "../../Images/littleThings.jpg";
import Impossible from "../../Images/impossible.jpg";
import Positive from "../../Images/positive.webp";
import LiveMoment from "../../Images/liveMoment.jpeg";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="wrapper">
        <h3>Who we are?</h3>
        <span>
          We are a team that wants to motivate you to change your lifestyle.{" "}
        </span>

        <div className="cardBackground">
          <div className="card">
            Your life does not get better by chance, it gets better by change!
          </div>
        </div>

        <span>
          Life brings us as many joyful moments as it does downfalls, and
          although there are days we wish there was a manual to follow, it
          simply wouldn't be the same without the spontaneity. The journey of
          life may not become easier as we grow older, but we do seem to
          understand it better as our perspectives evolve. Whether you're
          embarking on a new adventure right out of school or you want to
          explore different paths in your personal life, it's never too late to
          change what the future looks like.
        </span>
        <span>
          "If there's a book that you want to read, but it hasn't been written
          yet, then you must write it" —Toni Morrison
        </span>

        <img className="habitsImg" src={Habits} alt="Habits" />

        <div className="cardBackground">
          <div className="card">
            Remember if you're serious about changing your life, you'll find a
            way. If you're not, you'll find an excuse.
          </div>
        </div>

        <span>
          Starting with your speech, eliminate negative phrases such as “I
          can't”, “I always give up”, or “I am *insert negative adjective*”. For
          example, you may have found yourself saying, “I am lazy.” A better way
          to frame this in your mind is “Today I did not accomplish as much as I
          wanted to. I will make a list for tomorrow so I can complete all of my
          tasks!” Additionally, try to avoid complaining at all costs. If you
          are working with a particularly difficult client, try to view the
          experience as a positive challenge rather than a negative situation.
        </span>

        <div className="cardBackground">
          <div className="card">
            Step out of the history that is holding you back. Step into the new
            story you are willing to create.
          </div>
        </div>

        <div className="aboutUsImg">
          <div className="about">
            <img src={LittleThings} alt="Little things" />
            <img src={Impossible} alt="Impossible" />
            <img src={Positive} alt="Positive" />
            <img src={LiveMoment} alt="Live moment" />
          </div>
        </div>

        <span>
          Making the leap from thinking about change to taking action can be
          hard and may take time. Asking yourself about the pros (benefits) and
          cons (things that get in the way) of changing your habits may be
          helpful. How would life be better if you made some changes? Think
          about how the benefits of healthy eating or regular physical activity
          might relate to your overall health. For example, suppose your blood
          glucose, also called blood sugar, is a bit high and you have a parent,
          brother, or sister who has type 2 diabetes. This means you also may
          develop type 2 diabetes. You may find that it is easier to be
          physically active and eat healthy knowing that it may help control
          blood glucose and protect you from a serious disease.
        </span>

        <div className="liveReal">
          <h4>
            How we LIVE is what make us REAL
            <img style={{ height: 25 }} src={Smiley} alt="Smiley" />
          </h4>
        </div>

        <span>
          Do it every day. British researchers studied how people form habits in
          the real world, asking participants to choose a simple habit they
          wanted to form, like drinking water at lunch or taking a walk before
          dinner. The study, published in the European Journal of Social
          Psychology, showed that the amount of time it took for the task to
          become automatic — a habit — ranged from 18 to 254 days. The median
          time was 66 days!
        </span>

        <div className="cardBackground">
          <div className="card">
            There is a powerful driving force inside every human being that,
            once unleashed, can make any vision, dream, or desire a reality.
          </div>
        </div>

        <span>
          Don’t make exceptions to your new habit pattern during the formative
          stages. Don’t make excuses or rationalizations. Don’t let yourself off
          the hook. If you resolve to get up at 6 a.m. each day, discipline
          yourself to get up at 6 a.m. every single day until it becomes
          automatic.
        </span>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
