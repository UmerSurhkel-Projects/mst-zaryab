const Options = ({ option, isSelected, handleOptionChange }) => {
    return (
        <label className="custom-checkbox">
            <input
                type="checkbox"
                name="option"
                value={option}
                checked={isSelected}
                onChange={() => handleOptionChange(option)}
            />
            <span className="checkmark"></span>
            {option}
        </label>
    );
};

export default Options