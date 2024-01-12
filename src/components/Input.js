import inputOfCalculator from "./CalculatorData";

const Input = ({ onClick }) => {

    const styles = (type) => {
        switch (type) {
            case 'number':
            case 'percentage':
            case 'plus-minus':
                return 'btn numeric-style';
            case 'clear':
                return 'btn bg-danger circle';
            case 'console':
                return 'btn bg-danger console';
            case 'addition':
            case 'multiplication':
            case 'division':
            case 'minus':
                return 'btn arathamatic-style';
            case 'calculate':
                return 'btn calculate-style';
            default:
                return 'btn';
        }
    };

    return (
        <div className="row d-flex">
            {inputOfCalculator.map((e) => (
                <button
                    key={e.id}
                    onClick={() => onClick(e.value, e.type, e.label)}
                    className={styles(e.type)}>
                    {e.label}
                </button>
            ))}
        </div>
    );
};

export default Input;
