const Course = (props) => {
    const {course} = props
    return (
      <div>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <>
        <h1>{props.name}</h1>
      </>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
          {props.parts.map((item) => (
            <Part key={item.id} part={item}></Part>
          ))}
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
          {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
  const Total = (props) => {
    let sum = 0;
    for (let i = 0; i < props.parts.length; i++) {
      sum += props.parts[i].exercises;
    }
    return (
      <p>
          <b>Number of exercises {sum}</b>
      </p>
    )
  }

  export default Course