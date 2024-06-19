import "./App.css";
import { useState } from "react";
import ZombieFightersData from "./data/zombieFightersData";
const teamStats = {
  teamStrength: 0,
  teamAgility: 0,
};

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(ZombieFightersData);
  const [combinedStats, setCombinedStats] = useState(teamStats);

  const handleAddTeamMember = (newFighter) => {
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
  const handleRemoveTeamMember = (memberToRemove) => {
    const updateTeam = team.filter(
      (member) => member._id !== memberToRemove._id
    );
    setTeam(updateTeam);
    setMoney(money + memberToRemove.price);
    setCombinedStats((prevStats) => ({
      teamStrength: prevStats.teamStrength - memberToRemove.strength,
      teamAgility: prevStats.teamAgility - memberToRemove.agility,
    }));
    setZombieFighters([...zombieFighters, memberToRemove]);
  };

  // console.log(team);
  // console.log("zombieFighters",zombieFighters);

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
      <section>
        <h3>My team of zombie fighters</h3>
        {team.length === 0 ? (
          "Your team is empty, the zombies will fight over your brain. Quick get some friends to help fight the hord!"
        ) : (
          <ul>
            {team.map((member) => {
              <li key={member._id}>
                <span>Name: {member.name}</span>
                <span>Price: {member.price}</span>
                <span>Strength: {member.strength}</span>
                <span>Agility: {member.agility}</span>
                <span>
                  <img src={member.img} alt={member.name} />
                </span>
                <span>
                  <button onClick={() => handleRemoveTeamMember(member)}>
                    Remove member from team
                  </button>
                </span>
              </li>;
            })}
          </ul>
        )}
      </section>
      <section>
        <h3>List of zombie fighters available to hire</h3>
        {zombieFighters.length === 0 ? (
          "There are no zombie fighters available to hire...Watch your back, the zombies must be winning."
        ) : (
          <ul>
            {zombieFighters.map((fighter) => {
              <li key={fighter._id}>
                <span>Name: {fighter.name}</span>
                <span>Price: {fighter.price}</span>
                <span>Strength: {fighter.strength}</span>
                <span>Agility: {fighter.agility}</span>
                <span>
                  <img src={fighter.img} alt={fighter.name} />
                </span>
                <span>
                  <button onClick={() => handleAddTeamMember(fighter)}>
                    Add fighter to team
                  </button>
                </span>
              </li>;
            })}
          </ul>
        )}
      </section>
    </main>
  );
};

export default App;
