import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planets-div" data-testid="solar-system">

        <div className="planets-title-div">
          <Title headline="Planetas" />
        </div>

        <div className="planets-container">
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>

      </div>
    );
  }
}

export default SolarSystem;
