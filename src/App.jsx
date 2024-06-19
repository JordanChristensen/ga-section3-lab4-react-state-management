import "./App.css";
import { useState } from "react";
import { addTeamMember, removeTeamMember } from "./utils/manageZombieTeam";
import ZombieFightersData from "./data/ZombieFightersData";
import TeamStats from "./components/TeamStats";
import Team from "./components/Team";
import FighterPool from "./components/FighterPool";
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
      <TeamStats combinedStats={combinedStats} money={money} />
      <Team team={team} handleRemoveTeamMember={handleRemoveTeamMember} />
      <FighterPool
        zombieFighters={zombieFighters}
        handleAddTeamMember={handleAddTeamMember}
      />
    </main>
  );
};

export default App;
