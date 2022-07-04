const Part = (props) => {
    const part = props.part

    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

export default Part