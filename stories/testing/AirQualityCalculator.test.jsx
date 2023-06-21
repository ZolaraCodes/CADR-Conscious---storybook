import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AirQualityCalculator from "../calculator.jsx";

test("calculates correct CADR values", () => {
  let { getByLabelText, getByTestId } = render(<AirQualityCalculator />);

  let achInput = getByLabelText("ACH (Air Changes per Hour):");
  let roomAreaInput = getByLabelText("Room Area (sq. ft.):");
  let ceilingHeightInput = getByLabelText("Ceiling Height (ft.):");
  let calculateButton = getByTestId("calculate-button");

  fireEvent.change(achInput, { target: { value: "6" } });
  fireEvent.change(roomAreaInput, { target: { value: "200" } });
  fireEvent.change(ceilingHeightInput, { target: { value: "10" } });
  fireEvent.click(calculateButton);

  let cadrCFM = getByTestId("cadr-cfm");
  let cadrM3H = getByTestId("cadr-m3h");

  expect(cadrCFM.textContent).toBe("CADR (CFM): 200.00");
  expect(cadrM3H.textContent).toBe("CADR (m³/h): 339.80");
});