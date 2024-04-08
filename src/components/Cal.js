import React, { useState } from 'react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [feetMessage, setFeetMessage] = useState('');

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(2));

    // Determine feet message
    if (bmiValue < 18.5) {
      setFeetMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setFeetMessage('Normal weight');
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      setFeetMessage('Overweight');
    } else {
      setFeetMessage('Enter valid input');
    }
  };

  const resetBMI = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setFeetMessage('');
  };

  return (
    <div className="background">
      <div className="container py-5">
        <h2 className="text-center mb-4">BMI Calculator</h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">Weight (kg):</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="weight" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight in KG" 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="height" className="form-label">Height (cm):</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="height" 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height in CM" 
                />
              </div>
              <div className="d-grid gap-2">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={calculateBMI}
                >
                  Submit
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={resetBMI}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        {bmi !== null && (
          <div className="row justify-content-center mt-4">
            <div className="col-md-4">
              <div className="alert alert-info" role="alert">
                Your BMI is: {bmi}
              </div>
              <div className="alert alert-success" role="alert">
                {feetMessage}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
