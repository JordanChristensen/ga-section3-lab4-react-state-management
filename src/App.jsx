import "./App.css";
import { useState } from "react";
import ZombieFightersData from "./components/zombieFightersData.js";

const teamStats = {
  teamStrength: 0,
  teamAgility: 0,
};

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(ZombieFightersData);
  const [combinedStats, setCombinedStats] = useState(teamStats);

  const handleAddFighterToTeam = (newFighter) => {
    if (money >= newFighter.price) {
      setTeam([...team, newFighter]);
      setMoney((prevMoney) => prevMoney - newFighter.price);
      setCombinedStats((prevStats) => ({
        teamStrength: prevStats.teamStrength + newFighter.strength,
        teamAgility: prevStats.teamAgility + newFighter.agility,
      }));
      const updateAvailableFighters = zombieFighters.filter(
        (recentlyAddedFighter) => newFighter.name !== recentlyAddedFighter.name
      );
      setZombieFighters(updateAvailableFighters);
    } else {
      console.log(
        "You don't have enough money to hire this fighter onto your team!"
      );
    }
  };
  return (
    <main>
      <h1>Zombie Nation!</h1>
      <h2>Join us in Fighting the Undead!!</h2>
      <table>
        <tbody>
          <tr>
            <th>Team Strength:</th>
            <td>{combinedStats.teamStrength}</td>
          </tr>
          <tr>
            <th>Team Agility:</th>
            <td>{combinedStats.teamAgility}</td>
          </tr>
          <tr>
            <th>Money available: </th>
            <td>${money}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default App;
