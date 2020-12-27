import React from 'react';

const ComingSoon = (props) => {
  const getStyle = () => {
    return {
      width: '100%',
      height: 500,
      display: 'inline-block',
      backgroundImage: `url(${props.bckImg})`,
      backgroundSize: 'cover',
      fontWeight: 'normal',
      marginBottom: 0,
    };
  };
  return (
    <>
      <div className="ui container pusher">
        <div
          className="ui vertical masthead center aligned segment"
          style={getStyle()}
        >
          <div className="ui text">
            <div className="ui brown huge message">Coming Soon!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
