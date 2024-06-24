import { useState } from "react";
import ZombieFightersData from "../data/ZombieFightersData";
import Team from "./Team";
import FighterPool from "./FighterPool";

export default function LandingPage() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(ZombieFightersData);
  const [teamStats, setTeamStats] = useState({
    teamStrength: 0,
    teamAgility: 0,
  });

  function addTeamMember(memberToAdd) {
    if (money >= memberToAdd.price) {
      setTeam([...team, memberToAdd]);
      setMoney((prevMoney) => prevMoney - memberToAdd.price);
      setTeamStats((prevStats) => ({
        teamStrength: prevStats.teamStrength + memberToAdd.strength,
        teamAgility: prevStats.teamAgility + memberToAdd.agility,
      }));
      const updateAvailableFighters = zombieFighters.filter(
        (recentlyAddedFighter) => memberToAdd.name !== recentlyAddedFighter.name
      );
      setZombieFighters(updateAvailableFighters);
    } else {
      alert("You don't have enough money to hire this fighter onto your team!");
    }
  }

  function removeTeamMember(memberToRemove) {
    const updateTeam = team.filter(
      (member) => member._id !== memberToRemove._id
    );
    setTeam(updateTeam);
    setMoney(money + memberToRemove.price);
    setTeamStats((prevStats) => ({
      teamStrength: prevStats.teamStrength - memberToRemove.strength,
      teamAgility: prevStats.teamAgility - memberToRemove.agility,
    }));
    setZombieFighters([...zombieFighters, memberToRemove]);
  }

  return (
    <main>
      <h1>Zombie Nation!</h1>
      <h2>Join us in Fighting the Undead!!</h2>
      <table>
        <tbody>
          <tr>
            <th>Team Strength:</th>
            <td>{teamStats.teamStrength}</td>
          </tr>
          <tr>
            <th>Team Agility:</th>
            <td>{teamStats.teamAgility}</td>
          </tr>
          <tr>
            <th>Money available: </th>
            <td>&#36; {money}</td>
          </tr>
        </tbody>
      </table>
      <Team team={team} removeTeamMember={removeTeamMember} />
      <FighterPool
        zombieFighters={zombieFighters}
        addTeamMember={addTeamMember}
      />
    </main>
  );
}
