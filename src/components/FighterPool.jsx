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
              <img src={fighter.img} alt={fighter.name} /> <br />
              {fighter.name} <br />
              &#36; {fighter.price} <br />
              Strength: {fighter.strength} <br />
              Agility: {fighter.agility} <br />
              <button onClick={() => handleAddTeamMember(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default FighterPool;
