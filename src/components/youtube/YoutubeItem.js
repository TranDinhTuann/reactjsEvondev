import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img className="youtube-avatar" src={props.avatar} alt="" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "This is example of author"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
