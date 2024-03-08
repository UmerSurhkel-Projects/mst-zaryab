
const Title = (props) => {
    return (
        <div className="sidebar-body" id="chatsidebar">
        <div className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
            <div className="chat-title">
                <h4>{props.heading}</h4>
            </div>
            {/* <div className="add-section">
                <Link to="#"><FontAwesomeIcon icon={faEdit} /></Link>
            </div> */}
        </div>
        </div>
    )
}

export default Title