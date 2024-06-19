const TeamMember = ({ member, handleRemoveTeamMember }) => {
  return (
    <>
      <img src={member.img} alt={member.name} /> <br />
      {member.name} <br />
      &#36; {member.price} <br />
      Strength: {member.strength} <br />
      Agility: {member.agility} <br />
      <button onClick={() => handleRemoveTeamMember(member)}>Remove</button>
    </>
  );
};

export default TeamMember;
