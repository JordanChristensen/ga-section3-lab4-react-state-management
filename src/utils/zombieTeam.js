export const addTeamMember = (
  memberToAdd,
  team,
  setTeam,
  setMoney,
  setCombinedStats,
  zombieFighters,
  setZombieFighters
) => {
  setTeam([...team, memberToAdd]);
  setMoney((prevMoney) => prevMoney - memberToAdd.price);
  setCombinedStats((prevStats) => ({
    teamStrength: prevStats.teamStrength + memberToAdd.strength,
    teamAgility: prevStats.teamAgility + memberToAdd.agility,
  }));
  const updateAvailableFighters = zombieFighters.filter(
    (recentlyAddedFighter) => memberToAdd.name !== recentlyAddedFighter.name
  );
  setZombieFighters(updateAvailableFighters);
};

export const removeTeamMember = (
  memberToRemove,
  team,
  setTeam,
  money,
  setMoney,
  setCombinedStats,
  zombieFighters,
  setZombieFighters
) => {
  const updateTeam = team.filter((member) => member._id !== memberToRemove._id);
  setTeam(updateTeam);
  setMoney(money + memberToRemove.price);
  setCombinedStats((prevStats) => ({
    teamStrength: prevStats.teamStrength - memberToRemove.strength,
    teamAgility: prevStats.teamAgility - memberToRemove.agility,
  }));
  setZombieFighters([...zombieFighters, memberToRemove]);
};
