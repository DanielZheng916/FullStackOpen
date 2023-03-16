const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </>
  )
}

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

export default App
