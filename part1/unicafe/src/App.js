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

  let all = good + neutral + bad;
  let allScore = good - bad;
  let average = allScore/all;
  let positive = 100*good/all + '%';
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button commentType="good" handler={addGood}></Button>
      <Button commentType="neutral" handler={addNeutral}></Button>
      <Button commentType="bad" handler={addBad}></Button>
      <h1>statistics</h1>
      <Statistics commentType="good" num={good}></Statistics>
      <Statistics commentType="neutral" num={neutral}></Statistics>
      <Statistics commentType="bad" num={bad}></Statistics>
      <Statistics commentType="all" num={all}></Statistics>
      <Statistics commentType="average" num={average}></Statistics>
      <Statistics commentType="positive" num={positive}></Statistics>
    </div>
  )
}

const Button = ({commentType, handler}) => {
  return (
  <button onClick={handler}>{commentType}</button>
  )
}

const Statistics = ({commentType, num}) => {
  return (
    <div>
      {commentType} {num}
    </div>
  )
}

export default App
