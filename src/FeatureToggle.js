import { React, useState } from 'react';


export const FeatureToggle = ({ isEnabled: initialState = false, featureName = "" }) => {
    const [isEnabled, setIsEnabled] = useState(initialState);
    const toggleFeature = () => {
        setIsEnabled((prevState) => !prevState);
    };

    return (
        <div>
            <div>
                <p>{isEnabled ? `[${featureName}]` : `Feature ${featureName} is disabled`}</p>
                <button onClick={toggleFeature}>
                    {isEnabled ? "Disable" : "Enable"} {featureName}
                </button>
            </div>
        </div>
    )
}
