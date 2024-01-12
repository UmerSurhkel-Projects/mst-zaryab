import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const TimerComponent = ({ shouldStart }) => {
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useEffect(() => {
        if (shouldStart) {
            setIsActive(true);
        }
    }, [shouldStart]);

    const formatTime = () => {
        const getSeconds = `0${(seconds % 60)}`.slice(-2);
        const minutes = `${Math.floor(seconds / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    };


    const exitQuiz = () => {
        setIsActive(false); // Stop the timer

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to quit the quiz?",
            icon: null, // Set icon to null
            iconHtml: '<img src="https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg" alt="Quiz Icon" style="width: 200px; height: px;">', // Use iconHtml to insert your image
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: '#3aafa9',
            confirmButtonText: 'Yes, quit!',
            cancelButtonText: 'Continue'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/'); // Navigate to home if "Yes"
            } else {
                setIsActive(true); // Continue the timer
            }
        });
    };

    // Function to show the confirmation popup when trying to close the tab
    const showConfirmationPopup = (event) => {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    };

    useEffect(() => {
        window.addEventListener('beforeunload', showConfirmationPopup);

        return () => {
            window.removeEventListener('beforeunload', showConfirmationPopup);
        };
    }, []);


    return (
        <div className='d-flex align-items-center justify-content-center quiz-tracker'>
            <div className="timer-container">
                <div className="timer">{formatTime()}</div>
            </div>
            <button className='btn btn-danger ms-5 exit-btn' onClick={exitQuiz}>Quit</button>
        </div>
    );
};

export default TimerComponent;
