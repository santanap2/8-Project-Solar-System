import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <ul data-testid="mission-name">{ name }</ul>
        <li data-testid="mission-year">{ year }</li>
        <li data-testid="mission-country">{ country }</li>
        <li data-testid="mission-destination">{ destination }</li>

      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
