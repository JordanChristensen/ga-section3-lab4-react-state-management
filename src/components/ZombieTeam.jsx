const ZombieTeam = ({ team, handleRemoveTeamMember }) => {
  return (
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
  );
};

export default ZombieTeam;
