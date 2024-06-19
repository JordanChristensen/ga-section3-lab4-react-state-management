const ZombieTeamStats = ({ combinedStats, money }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Team Strength:</th>
          <td>{combinedStats.teamStrength}</td>
        </tr>
        <tr>
          <th>Team Agility:</th>
          <td>{combinedStats.teamAgility}</td>
        </tr>
        <tr>
          <th>Money available: </th>
          <td>&#36; {money}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ZombieTeamStats;
