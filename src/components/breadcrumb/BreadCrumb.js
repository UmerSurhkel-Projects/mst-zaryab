const BreadCrumb = ({ heading, button, onClick }) => {
    return (
        <div className="left-chat-title d-flex justify-content-between align-items-center">
            <div className="chat-title">
                <h4>{heading}</h4>
            </div>
            <div className="btn-section">
                <button className=" logout-btn" onClick={onClick}>{button}</button>
            </div>
        </div>
    );
};

export default BreadCrumb;
