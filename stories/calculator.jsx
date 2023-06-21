import React, { useState } from "react";

const AirQualityCalculator = () => {
  let [ach, setACH] = useState("");
  let [roomArea, setRoomArea] = useState("");
  let [ceilingHeight, setCeilingHeight] = useState("");

  let handleACHChange = (event) => {
    let value = event.target.value;
    if (value >= 0) {
      setACH(value);
    }
  };

  let handleRoomAreaChange = (event) => {
    let value = event.target.value;
    if (value >= 0) {
      setRoomArea(value);
    }
  };

  let handleCeilingHeightChange = (event) => {
    let value = event.target.value;
    if (value >= 0) {
      setCeilingHeight(value);
    }
  };

  let calculateCADR = () => {
    let cadrValueCFM = (ach * roomArea * ceilingHeight) / 60;
    let cadrValueM3H = cadrValueCFM * 1.699;

    return {
      cadrCFM: cadrValueCFM.toFixed(2),
      cadrM3H: cadrValueM3H.toFixed(2)
    };
  };

  return (
    <div className="AirQualityCalculator">
      <h2>Air Quality Calculator</h2>
      <div>
        <label>
          ACH (Air Changes per Hour):
          <input type="number" value={ach} onChange={handleACHChange} />
        </label>
      </div>
      <div>
        <label>
          Room Area (sq. ft.):
          <input type="number" value={roomArea} onChange={handleRoomAreaChange} />
        </label>
      </div>
      <div>
        <label>
          Ceiling Height (ft.):
          <input
            type="number"
            value={ceilingHeight}
            onChange={handleCeilingHeightChange}
          />
        </label>
      </div>
      <button data-testid="calculate-button" onClick={calculateCADR}>
        Calculate CADR
      </button>
      {ach && roomArea && ceilingHeight && (
        <>
          <p data-testid="cadr-cfm">CADR (CFM): {calculateCADR().cadrCFM}</p>
          <p data-testid="cadr-m3h">CADR (m³/h): {calculateCADR().cadrM3H}</p>
        </>
      )}
    </div>
  );
};

export default AirQualityCalculator;
