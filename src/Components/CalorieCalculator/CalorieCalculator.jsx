import React, { useState } from "react";
import Input from "../Input/Input";
import Select from "react-select";
import "./calorieCalculator.scss";

function CalorieCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [calculatedValue, setCalculatedValue] = useState(null);
  const [age, setAge] = useState("");
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const handleHeight = (event) => {
    return setHeight(event.target.value);
  };

  const handleWeight = (event) => {
    return setWeight(event.target.value);
  };

  const handleAge = (event) => {
    return setAge(event.target.value);
  };

  const calculateCalories = () => {
    if (gender === "male") {
      const calculatedMale =
        662 - 9.53 * age + (1.11 * [15.91 * weight + 539.6 * height]) / 40;
      // console.log("calculatedMale ", calculatedMale);
      setCalculatedValue(parseInt(calculatedMale));
    } else {
      const calculatedFemale =
        354 - 6.91 * age + (1.12 * [9.36 * weight + 726 * height]) / 60 ;
      setCalculatedValue(parseInt(calculatedFemale));
    }
  };

  return (
    <div className="calorie-calculator">
      <h2>Calorie Calculator</h2>
      <div className="text">
        The Calorie Calculator can be used to estimate the number of calories a
        person needs to consume each day. This calculator can also provide some
        simple guidelines for gaining or losing weight.
      </div>
      <h4 className="many-calories">
        How many calories should you eat per day?
      </h4>
      <h4>Check out!</h4>

      <div className="center-calculator">
        <div>
          <div className="gender">
            Gender:
            <Select
              className="select"
              onChange={(gender) => setGender(gender.value)}
              options={options}
              placeholder="Choose gender..."
            />
          </div>
          <Input
            text="Height in meters:"
            name="height"
            value={height}
            onChange={handleHeight}
          />
          <Input
            text="Weight in kilograms:"
            name="weight"
            value={weight}
            onChange={handleWeight}
          />
          <Input text="Age:" name="age" value={age} onChange={handleAge} />
          <button onClick={calculateCalories}>Calculate</button>
          <Input text="Your daily calories:" value={calculatedValue} />
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
