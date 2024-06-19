import Fighter from "./Fighter";

const FighterPool = ({ zombieFighters, handleAddTeamMember }) => {
  return (
    <section>
      <h3>Zombie fighters available to hire</h3>
      {zombieFighters.length === 0 ? (
        "There are no zombie fighters available to hire...I hope your team is prepared, it sounds like a stampede is headed this way!"
      ) : (
        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter._id}>
              <Fighter
                fighter={fighter}
                handleAddTeamMember={handleAddTeamMember}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default FighterPool;
