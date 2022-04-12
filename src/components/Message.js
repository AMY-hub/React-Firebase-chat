
const Message = (props) => {

    return (
    <div className="be-comment" 
        style={{
            margin: 10,
            marginLeft: props.userId === props.data.uid ? 'auto' : '10px',
            padding: 5,
        }}
    >
    <div
        style={{
            display: "flex",
            flexDirection: props.userId === props.data.uid ? 'row-reverse' : 'row',
            padding: 5,
        }}
    >
        <div className="be-img-comment">	
                <a href="#">
                    <img src={props.data.photoURL} alt="avatar" className="be-ava-comment"/>
                </a>
        </div>
        <div className="be-comment-content">
                <div className="be-comment-info">
                    <div className="be-comment-name">
                        {props.data.displayName}
                    </div>
                    <div className="be-comment-time">
                        {props.time}
                    </div>
                </div>
        </div>
    </div>    
    <span className="be-comment-text "
                style={{
                    marginLeft: props.userId === props.data.uid ? 'auto' : '10px', 
                }}
    >
        {props.data.text}
    </span>

    </div>
    )
}

export default Message;