import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const doNothing = () => {}
  const addGood = () => setGood(good+1)
  const addNeutral = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button commentType="good" handler={addGood}></Button>
      <Button commentType="neutral" handler={addNeutral}></Button>
      <Button commentType="bad" handler={addBad}></Button>
      <h1>statistics</h1>
      <Comment commentType="good" num={good}></Comment>
      <Comment commentType="neutral" num={neutral}></Comment>
      <Comment commentType="bad" num={bad}></Comment>
    </div>
  )
}

const Button = ({commentType, handler}) => {
  return (
  <button onClick={handler}>{commentType}</button>
  )
}

const Comment = ({commentType, num}) => {
  return (
    <div>
      {commentType} {num}
    </div>
  )
}

export default App
