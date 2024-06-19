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
            <Fighter
              key={fighter._id}
              fighter={fighter}
              handleAddTeamMember={handleAddTeamMember}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default FighterPool;
