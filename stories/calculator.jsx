import React, { useState } from "react";

const AirQualityCalculator = () => {
  let [ach, setACH] = useState("");
  let [roomArea, setRoomArea] = useState("");
  let [ceilingHeight, setCeilingHeight] = useState("");
  let [cadrCFM, setCADRCFM] = useState("");
  let [cadrM3H, setCADRM3H] = useState("");

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
    setCADRCFM(cadrValueCFM.toFixed(2));

    let cadrValueM3H = cadrValueCFM * 1.699;
    setCADRM3H(cadrValueM3H.toFixed(2));
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
      <button onClick={calculateCADR}>Calculate CADR</button>
      {cadrCFM && <p>CADR (CFM): {cadrCFM}</p>}
      {cadrM3H && <p>CADR (m³/h): {cadrM3H}</p>}
    </div>
  );
};

export default AirQualityCalculator;
