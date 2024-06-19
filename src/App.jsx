import "./App.css";
import { addTeamMember, removeTeamMember } from "./utils/zombieTeam";
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

  const handleAddTeamMember = (memberToAdd) => {
    if (money >= memberToAdd.price) {
      addTeamMember(
        memberToAdd,
        team,
        setTeam,
        setMoney,
        setCombinedStats,
        zombieFighters,
        setZombieFighters
      );
    } else {
      console.log(
        "You don't have enough money to hire this fighter onto your team!"
      );
    }
  };
  const handleRemoveTeamMember = (memberToRemove) => {
    removeTeamMember(
      memberToRemove,
      team,
      setTeam,
      money,
      setMoney,
      setCombinedStats,
      zombieFighters,
      setZombieFighters
    );
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
            <td>&#36; {money}</td>
          </tr>
        </tbody>
      </table>
      <section>
        <h3>My team of zombie fighters</h3>
        {team.length === 0 ? (
          "Your team is empty, the zombies will fight over your brain. Quick get some friends to help fight the hord!"
        ) : (
          <ul>
            {team.map((member) => (
              <li key={member._id}>
                <img src={member.img} alt={member.name} /> <br />
                {member.name} <br />
                &#36; {member.price} <br />
                Strength: {member.strength} <br />
                Agility: {member.agility} <br />
                <button onClick={() => handleRemoveTeamMember(member)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <h3>Zombie fighters available to hire</h3>
        {zombieFighters.length === 0 ? (
          "There are no zombie fighters available to hire...Watch your back, the zombies must be winning."
        ) : (
          <ul>
            {zombieFighters.map((fighter) => (
              <li key={fighter._id}>
                <img src={fighter.img} alt={fighter.name} /> <br />
                {fighter.name} <br />
                &#36; {fighter.price} <br />
                Strength: {fighter.strength} <br />
                Agility: {fighter.agility} <br />
                <button onClick={() => handleAddTeamMember(fighter)}>
                  Add
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default App;
