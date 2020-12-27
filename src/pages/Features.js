import React from 'react';
import Background from '../img/background-features.jpg';
import FeatureComms from '../components/FeatureComms';
import Carousel from 'semantic-ui-carousel-react';

class Features extends React.Component {
  getStyle = () => {
    return {
      width: '100%',
      height: 500,
      display: 'inline-block',
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      fontSize: '4em',
      fontWeight: 'normal',
      marginBottom: 0,
    };
  };

  render() {
    return (
      <>
        <div className="ui container pusher">
          <div
            className="ui vertical masthead center aligned segment"
            style={this.getStyle()}
          >
            <div className="ui text " style={styles.blurbStyle}>
              <Carousel
                elements={elements}
                duration={3000}
                animation="slide left"
                showNextPrev={false}
                showIndicators={true}
                border={false}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const elements = [
  {
    render: () => {
      return (
        <FeatureComms
          title="Because Communication is Key!"
          sub="Do it the way you want to."
        />
      );
    },
  },
  {
    render: () => {
      return (
        <FeatureComms
          title="Dynamic Ticketing System"
          sub="Keep track of what is important."
        />
      );
    },
  },
  {
    render: () => {
      return (
        <FeatureComms
          title="Statistics Dashboard"
          sub="Because we care about your growth."
        />
      );
    },
  },
];

const styles = {
  blurbStyle: {
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: '10px',
    marginTop: '150px',
  },
};

export default Features;
