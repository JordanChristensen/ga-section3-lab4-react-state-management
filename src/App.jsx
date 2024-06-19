import "./App.css";
import { useState } from "react";
import { addTeamMember, removeTeamMember } from "./utils/zombieTeam";
import ZombieFightersData from "./data/zombieFightersData";
import ZombieTeamStats from "./components/zombieTeamStats";
import ZombieTeam from "./components/ZombieTeam";
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
      <ZombieTeamStats combinedStats={combinedStats} money={money} />
      <ZombieTeam team={team} handleRemoveTeamMember={handleRemoveTeamMember} />
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
