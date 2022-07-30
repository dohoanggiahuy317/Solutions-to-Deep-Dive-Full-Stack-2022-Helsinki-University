import './CSS/index.css'

const Notification = (props) => {
    const message = props.message

    if (message == null) {
        return null
    } else if (message == "add" || message == "update" || message == "delete") {
        return <div className="notification" >Success</div>
    } else if (message == "error") {
        return <div className="error" >{message}</div>
    }
}

export default Notification