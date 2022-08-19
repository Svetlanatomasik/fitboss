import React from "react";
import "./homePage.scss";
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import WeightCalculator from "../../Components/WeightCalculator"


function HomePage () {
    return (
        <div>
            <Header/>
            <main>
                <div>
                    <h2>Be Your Own FitBoss</h2>

                    <h3>Never skip breakfast</h3>
                    <h3>Plan your meals</h3>
                    <h3>Drink water</h3>
                    <h3>Exercise</h3>
                    <h3>Go offline</h3>
                    <h3>Sleep well</h3>
                </div>
            </main>
            <WeightCalculator/>
            <Footer/>
        </div>
    )
}

export default HomePage;
