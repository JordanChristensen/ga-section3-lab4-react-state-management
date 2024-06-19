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
            <li key={member._id}>
              <TeamMember
                member={member}
                handleRemoveTeamMember={handleRemoveTeamMember}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Team;
