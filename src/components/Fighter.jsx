const Fighter = ({ fighter, handleAddTeamMember }) => {
  return (
    <>
      <img src={fighter.img} alt={fighter.name} /> <br />
      {fighter.name} <br />
      &#36; {fighter.price} <br />
      Strength: {fighter.strength} <br />
      Agility: {fighter.agility} <br />
      <button onClick={() => handleAddTeamMember(fighter)}>Add</button>
    </>
  );
};

export default Fighter;
