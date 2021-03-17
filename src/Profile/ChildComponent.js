import React from "react";
import propTypes from "prop-types";

function ChildComponent(props) {
  return (
    <div>
      {props.handleAlert()}
      <h1>{props.fullName}</h1>
      <h2>{props.bio}</h2>
      <h3>{props.profession}</h3>
      {props.children}
    </div>
  );
}
ChildComponent.defaultProps = {
  fullName: "TOUIL Abdelhak",
  bio: "I’m a web developer.",
  profession: "Web Developer",
};
ChildComponent.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  handleAlert: propTypes.func,
};

export default ChildComponent;
