import React from 'react';

let Video = (props) => {
  console.log('props.url: ', props.url);
  return (
    <div className="video">
      <iframe title="Recipe Video"
        src={props.url}
        allowFullScreen
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      >
      </iframe>
    </div>
  );
};

export default Video;
