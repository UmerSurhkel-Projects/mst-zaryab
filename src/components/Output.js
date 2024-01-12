const Output = ({ value, expression }) => {
    return (
        <div className="result">
            <div className="expression">{expression}</div> 
            <input type='text' value={value} className="btn calc-screen" readOnly />
        </div>
    );
};

export default Output;
