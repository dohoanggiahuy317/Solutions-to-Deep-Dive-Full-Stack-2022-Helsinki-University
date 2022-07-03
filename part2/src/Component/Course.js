import Content from "./Content"
import Header from "./Header"

const Course = (props) => {
    const course = props.course

    const sum = course.parts.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.exercises;
    }, 0)


    return (
        <div>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <p style={{ fontWeight: 'bold' }} >Total of {sum} exercises</p>
        </div>
    )
}

export default Course