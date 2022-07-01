// ----------------------------- PART 1d Coffee shop------------------------------------
import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const points = [0, 1, 2, 3, 4, 5, 6]

    const [selected, setSelected] = useState(0)
    const [pointState, setPoint] = useState(points)

    const new_random_anecdote = () => {
        const random_selec = Math.floor(Math.random() * 7);
        setSelected(random_selec)
    }

    const add_vote = () => {
        const copy = [ ...pointState ]
        copy[selected] += 1
        setPoint(copy)

        max_vote(pointState)
        //console.log(max_vote(pointState))
    }

    const max_vote = (props) => {
        var max_index = 0
        for (var i = 0; i < props.length; i++) {
            if (props[max_index] < props[i]) {
                max_index = i
            }
        }
        return (
            max_index
        )
    } 

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <br></br>
            has {pointState[selected]} votes
            <br></br>
            <button onClick={add_vote}>vote</button>
            <button onClick={new_random_anecdote}>next anecdote</button>

            <h1>Anecdote with most vote</h1>
            {anecdotes[max_vote(pointState)]}
            <br></br>
            has {pointState[max_vote(pointState)]} votes
        </div>
    )
}

export default App

// ----------------------------- PART 1d Coffee shop------------------------------------
// import { useState } from 'react'

// const App = () => {
//     // save clicks of each button to its own state
//     const [clicks, setClicks] = useState({
//         bad: 0,
//         neutral: 0,
//         good: 0,
//     })

//     const all = clicks.good + clicks.bad + clicks.neutral
//     const avarage = (clicks.good - clicks.bad) / all
//     const good_percentage = clicks.good / all * 100


//     return (
//         <div>
//             <Button clicks={clicks} setClicks={setClicks} />

//             <Statistics clicks={clicks} all={all} avarage={avarage} good_percentage={good_percentage} />
//         </div>
//     )
// }

// const Button = (props) => {
//     const setClicks = props.setClicks
//     const clicks = props.clicks

//     const good_review = () => {
//         setClicks({
//             ...clicks,
//             good: clicks.good + 1,
//         })
//     }

//     const neutral_review = () => {
//         setClicks({
//             ...clicks,
//             neutral: clicks.neutral + 1,
//         })
//     }

//     const bad_review = () => {
//         setClicks({
//             ...clicks,
//             bad: clicks.bad + 1,
//         })
//     }

//     return (
//         <div>
//             <h1>give feedback</h1>
//             <button onClick={good_review}>good</button>
//             <button onClick={neutral_review}>neutral</button>
//             <button onClick={bad_review}>bad</button>
//         </div>
//     )

// }

// const Statistics = (props) => {
//     const clicks = props.clicks

//     if (clicks.good == 0 && clicks.neutral == 0 && clicks.bad == 0) {
//         return (
//             <div>
//                 <h1>statistics</h1>
//                 <p>No feedback given</p>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <h1>statistics</h1>
//             <table>
//                 <tbody>
//                     <StatisticLine text="good" value={clicks.good} />
//                     <StatisticLine text="neutral" value={clicks.neutral} />
//                     <StatisticLine text="bad" value={clicks.bad} />
//                     <StatisticLine text="all" value={props.all} />
//                     <StatisticLine text="avarage" value={props.avarage} />
//                     <StatisticLine text="positive" value={props.good_percentage} />
//                 </tbody>
//             </table>

//         </div>
//     )
// }

// const StatisticLine = (props) => {
//     return (
//         <tr>
//             <td>{props.text}</td>
//             <td>{props.value}</td>
//         </tr>
//     )
// }

// export default App

// ----------------------------- PART 1 a,b,c ------------------------------------
// const App = () => {
//     // const-definitions
//     const course = {
//         name: 'Half Stack application development',
//         parts: [
//             {
//                 name: 'Fundamentals of React',
//                 exercises: 10
//             },
//             {
//                 name: 'Using props to pass data',
//                 exercises: 7
//             },
//             {
//                 name: 'State of a component',
//                 exercises: 14
//             }
//         ]
//     }


//     return (
//         <div>
//             <Header course={course} />
//             <Content parts={course.parts} />
//             <Total parts={course.parts} />
//         </div>
//     )
// }

// const Header = (props) => {
//     const name = props.course.name
//     return (
//         <h1>{name}</h1>
//     )
// }

// const Content = (props) => {
//     const parts = props.parts
//     return (
//         <div>
//             <Part part={parts[0].name} exercises={parts[0].exercises} />
//             <Part part={parts[1].name} exercises={parts[1].exercises} />
//             <Part part={parts[2].name} exercises={parts[2].exercises} />
//         </div>
//     )
// }

// const Part = (props) => {
//     return (
//         <p>
//             {props.part} {props.exercises}
//         </p>
//     )
// }

// const Total = (props) => {
//     const parts = props.parts
//     return (
//         <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     )
// }

// export default App
