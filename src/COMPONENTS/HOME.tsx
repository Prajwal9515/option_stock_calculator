import React, { useState } from 'react';

const HOME = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    capital: '',
    currentPrice: '',
    lotSize: '',
    buyingPrice: '',
    target: '',
    stopLoss: '',
  });

  // State to store calculated results
  const [calculatedResults, setCalculatedResults] = useState<{
    approx_qty: number;
    lots: number;
    right_qty: number;
    profit_point: number;
    loss_points: number;
    profit: number;
    loss: number;
  } | null>(null);

  // Function to handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const {
      capital,
      currentPrice,
      lotSize,
      buyingPrice,
      target,
      stopLoss,
    } = formData;

    // Perform calculations based on provided formulas
    const approx_qty = parseFloat(capital) / parseFloat(currentPrice);
    const lots = Math.floor(approx_qty / parseFloat(lotSize));
    const right_qty = lots * parseFloat(lotSize);
    const profit_point = parseFloat(target) - parseFloat(buyingPrice);
    const loss_points = parseFloat(buyingPrice) - parseFloat(stopLoss);
    const profit = right_qty * profit_point;
    const loss = right_qty * loss_points;

    // Update the state with the calculated results
    setCalculatedResults({
      approx_qty,
      lots,
      right_qty,
      profit_point,
      loss_points,
      profit,
      loss,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Left Column: Input Form */}
          <div className="col-6">
            <div className="card ">
              {/* Form for user input */}
              <form action="" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="capital" className="form-label">
                    Capital
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="capital"
                    name="capital"
                    value={formData.capital}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Add similar input fields for other form data */}
                <div className="mb-3">
                  <label htmlFor="currentPrice" className="form-label">
                    Current Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="currentPrice"
                    name="currentPrice"
                    value={formData.currentPrice}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lotSize" className="form-label">
                    Lot Size
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lotSize"
                    name="lotSize"
                    value={formData.lotSize}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="buyingPrice" className="form-label">
                    Buying Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="buyingPrice"
                    name="buyingPrice"
                    value={formData.buyingPrice}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="target" className="form-label">
                    Target
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="target"
                    name="target"
                    value={formData.target}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="stopLoss" className="form-label">
                    Stop Loss
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="stopLoss"
                    name="stopLoss"
                    value={formData.stopLoss}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary">
                  Calculate
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Calculated Results */}
          <div className="col-6">
            <div className="card shadow-lg">
              {/* Display calculated results */}
              <h3 className="card-title">Calculated Results</h3>
              {calculatedResults && (
                <div>
                  {/* Display calculated results */}
                  <p> Quantity: {calculatedResults.right_qty}</p>
                  <p>Lots: {calculatedResults.lots}</p>
          
                  <p>Profit Point: {calculatedResults.profit_point}</p>
                  <p>Loss Points: {calculatedResults.loss_points}</p>
                  <p>Profit: {calculatedResults.profit}</p>
                  <p>Loss: {calculatedResults.loss}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOME;
