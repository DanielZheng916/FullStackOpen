const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [{id:1, ...part1}, {id:2, ...part2}, {id:3, ...part3}];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts = {parts}></Total>
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
          <Part key={item.id} partExercise={item}></Part>
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
