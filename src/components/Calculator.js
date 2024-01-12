import { useState } from 'react';
import Output from './Output';
import Input from './Input';

const Calculator = () => {
    const [value, setValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [prevValue, setPrevValue] = useState(null);
    const [expression, setExpression] = useState('0');

    const handleButtonClick = (nextValue, type, label) => {
        switch (type) {
            case 'number':
                updateValue(nextValue);
                appendToExpression(label);
                break;
            case 'clear':
                clear();
                break;
            case 'calculate':
                calculate();
                break;
            case 'console':
                console.log(value)
                break;
            case 'plus-minus':
                toggleOperator();
                break;
            case 'addition':
            case 'minus':
            case 'multiplication':
            case 'division':
            case 'percentage':
            case 'plus-minus':
                if (!operator) {
                    setPrevValue(value);
                } else {
                    calculate(false);
                }
                setOperator(type);
                appendToExpression(label);
                break;
            default:
                break;
        }
    };

    const appendToExpression = (label) => {
        setExpression((expression === '0' ? '' : expression) + label);
    };

    const calculate = (finalize = true) => {
        let result;
        if (operator && prevValue !== null) {
            switch (operator) {
                case 'addition':
                    result = (parseFloat(prevValue) + parseFloat(value)).toString();
                    break;
                case 'minus':
                    result = (parseFloat(prevValue) - parseFloat(value)).toString();
                    break;
                case 'multiplication':
                    result = (parseFloat(prevValue) * parseFloat(value)).toString();
                    break;
                case 'division':
                    result = parseFloat(value) === 0 ? 'Error' : (parseFloat(prevValue) / parseFloat(value)).toString();
                    break;
                case 'percentage':
                    result = (parseFloat(value) / 100).toString();
                    break;
                default:
                    result = 'Error';
            }
            setValue(result);
            if (finalize) {
                setPrevValue(null);
                setOperator(null);
                appendToExpression('=' + result);
            } else {
                setPrevValue(result);
            }
        }
    };

    const updateValue = (nextValue) => {
        if (operator && value === prevValue) {
            setValue(nextValue);
        } else {
            setValue(value === '0' ? nextValue : value + nextValue);
        }
    };

    const toggleOperator = () => {
        setValue((parseFloat(value) * -1).toString());
    };

    const clear = () => {
        setValue('0');
        setOperator(null);
        setPrevValue(null);
        setExpression('0');
    };

    return (
        <div id="wrapper">
            <div className="calc-body">
                <Output value={value} expression={expression} />
                <Input onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default Calculator;
