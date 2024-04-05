import React, { useState } from 'react';

const SettingsCard = ({ setState }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        setState(newState);
    };

    return (
        <div className="settings-card">
            <div className="settings-control">
                <ul>
                    <li className="d-flex align-items-center">
                        <div>
                            <span>Two-step security verification</span>
                        </div>
                        <label className="switch ms-auto">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleChange}
                            />
                            <span className="slider round"></span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SettingsCard;
