const ChatPlaceHolder = () => {
  return (
    <div className="chat d-flex align-items-center justify-content-center" id="middle">
      <div className="slimscroll">
        <div className="placeholder-content text-center">
          <h3 className=" fw-bold text-purple">Please select a contact to start a chat.</h3>
        </div>
      </div>
    </div>
  );
};

export default ChatPlaceHolder;