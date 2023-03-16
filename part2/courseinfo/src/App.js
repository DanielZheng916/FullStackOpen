const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts = {course.parts}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
        {props.parts.map((item) => (
          <Part key={item.name} partExercise={item}></Part>
        ))}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.partExercise.name} {props.partExercise.exercises}
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
        Number of exercises {sum}
    </p>
  )
}

export default App
