import React from "react";

const Header = (props) => {
    return <h1>{props.name}</h1>;
  };
  
  const Part = (props) => {
    return (
      <p>
        {" "}
        {props.name} {props.exercises}{" "}
      </p>
    );
  };
  
  const Content = ({ course }) => {
    console.log(course);
  
    return (
      <div>
        {course.map((part) => (
          <Part name={part.name} key={part.id} exercises={part.exercises} />
        ))}
      </div>
    );
  };
  
  
  
  const Total = ({props}) => {
  
    const exer = props.map(props => props.exercises)
  
    const result = exer.reduce((s, p) => s + p)
  
   return (
     <div>
       <p>Total exercises are {result}</p>
      </div>
   ) 
  }
  
  
  
  
  // Course component declared below
  
  const Course = ({ props }) => {
    console.log(props);
  
    return (
      <div>
        <Header name={props[0].name} />
        <Content course={props[0].parts} />
        <Total props={props[0].parts}/>
  
        <br />
  
        <Header name={props[1].name} />
        <Content course={props[1].parts} />
        <Total props={props[1].parts} />
      </div>
    );
  };

  export default Course