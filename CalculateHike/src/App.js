import { useState } from "react";
import "./styles.css";

export default function App() {
  const [oldSalary, setOldSalary] = useState(0);
  const [newSalary, setNewSalary] = useState(0);
  const [hikePercentage, setHikePercentage] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    const hike = ((newSalary - oldSalary) / oldSalary) * 100;
    setHikePercentage(hike.toFixed(0));
  };

  return (
    <div className="App">
      <h1> Calculate Hike Percentage </h1>
      <form onSubmit={submitHandler}>
        <label>Old Salary </label>
        <input
          name="oldSalary"
          className="input-text"
          type="number"
          pattern="[0-9]*"
          value={oldSalary}
          onChange={(e) => setOldSalary(e.target.value)}
        />{" "}
        <br />
        <label>New Salary</label>
        <input
          name="newSalary"
          className="input-text"
          type="number"
          pattern="[0-9]*"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
        />
        <br />
        <button type="submit"> Calculate </button>
      </form>
      <p>
        {hikePercentage > 0
          ? "You got " + hikePercentage + "% hike :)"
          : hikePercentage < 0
          ? "You got " + hikePercentage + "% :("
          : ""}
      </p>
    </div>
  );
}
