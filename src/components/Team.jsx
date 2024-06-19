import TeamMember from "./TeamMember";

const Team = ({ team, handleRemoveTeamMember }) => {
  return (
    <section>
      <h3>My team of zombie fighters</h3>
      {team.length === 0 ? (
        "Your team is empty, the zombies will fight over your brain. Quick get some friends to help fight the hord!"
      ) : (
        <ul>
          {team.map((member) => (
            <TeamMember
              key={member._id}
              member={member}
              handleRemoveTeamMember={handleRemoveTeamMember}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Team;
