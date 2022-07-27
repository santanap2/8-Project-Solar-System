import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions-div" data-testid="missions">

        <div className="missions-title-div">
          <Title headline="Missões" />
        </div>

        <div className="missions-container">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>

      </div>
    );
  }
}

export default Missions;
