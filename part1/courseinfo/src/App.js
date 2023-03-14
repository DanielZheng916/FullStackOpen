const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exs = [exercises1, exercises2, exercises3]
  const partExercises = [{id:1, part:part1, exercises:exercises1}, {id:2, part:part2, exercises:exercises2}, {id:3, part:part3, exercises:exercises3}];

  return (
    <div>
      <Header course={course}></Header>
      <Content partExercises={partExercises}></Content>
      <Total exs = {exs}></Total>
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
        {props.partExercises.map((item) => (
          <Part key={item.id} partExercise={item}></Part>
        ))}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.partExercise.part} {props.partExercise.exercises}
    </p>
  )
}

const Total = (props) => {
  let sum = 0;
  for (let i = 0; i < props.exs.length; i++) {
    sum += props.exs[i];
  }
  return (
    <p>
        Number of exercises {sum}
    </p>
  )
}

export default App
