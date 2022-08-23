import React from "react";
import "./homePage.scss";
import Footer from "../../Components/Footer";
import CalorieCalculator from "../../Components/CalorieCalculator";
import Breakfast from "../../Images/breakfast.webp";
import PlanMeal from "../../Images/mealPlan.jpg";
import DrinkWater from "../../Images/drinkWater.jpg";
import Exercise from "../../Images/exercise.jpg";
import GoOffline from "../../Images/goOffline.jpg";
import SleepWell from "../../Images/sleepWell.jpg";

function HomePage() {
  return (
    <div>
      <div className="home-style">
        <CalorieCalculator />
        <div className="habits">
          <h2>Be Your Own FitBoss</h2>
          <h3>Never skip breakfast</h3>
          <div>
            It's important for a bunch of reasons. It jump-starts your
            metabolism and stops you from overeating later. Plus, studies show
            that adults who have a healthy breakfast do better at work, and kids
            who eat a morning meal score higher on tests. If a big plateful
            first thing isn't for you, keep it light with a granola bar or a
            piece of fruit. Just don't skip it.
          </div>
          <img src={Breakfast} alt="breakfast"></img>

          <h3>Plan your meals</h3>
          <div>
            It'll help you save time and money in the long run. Block out some
            time, then sit down and consider your goals and needs. Do you want
            to lose weight? Cut back on sugar, fat, or carbs? Add protein or
            vitamins? Meal prep keeps you in control. You know what you're
            eating and when. A bonus: It'll be that much easier to skip those
            doughnuts in the breakroom at work.
          </div>
          <img src={PlanMeal} alt="meal"></img>

          <h3>Drink water</h3>
          <div>
            It can do so many good things for you. Staying hydrated is at the
            top of the list, but it may also help you lose weight. Another
            reason to go for H2O? Sugary drinks are linked to obesity and type 2
            diabetes. If you aren't a fan of plain water, add flavor with slices
            of orange, lemon, lime, watermelon, or cucumber.
          </div>
          <img src={DrinkWater} alt="water"></img>

          <h3>Exercise</h3>
          <div>
            Regular physical activity can improve your muscle strength and boost
            your endurance. Exercise delivers oxygen and nutrients to your
            tissues and helps your cardiovascular system work more efficiently.
            And when your heart and lung health improve, you have more energy to
            tackle daily chores.
          </div>
          <img src={Exercise} alt="exercise"></img>

          <h3>Go offline</h3>
          <div>
            Checking your email and social media a lot? Sure, your friends' and
            family's latest updates are just a click away, but do you really
            need to see pictures of your cousin's latest meal? Let it wait until
            morning. Set a time to log off and put the phone down. When you cut
            back on screen time, it frees you to do other things. Take a walk,
            read a book, or help your cousin chop veggies for their next great
            dinner.
          </div>
          <img src={GoOffline} alt="offline"></img>

          <h3>Sleep well</h3>
          <div>
            There are almost too many benefits to list. A good night's sleep
            keeps you in a better mood, sharpens memory and focus, and helps you
            learn new things. In the long term, it lowers your risk of heart
            disease and helps you keep trim. Aim to get 7 to 9 hours a night.
            For the best rest, do it on schedule -- turning in and waking up at
            about the same times every day.
          </div>
          <img src={SleepWell} alt="sleep"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
