# CADR-Conscious---storybook

The Air Quality Calculator is a web application built with React that allows you to calculate the Clean Air Delivery Rate (CADR) based on the Air Changes per Hour (ACH), Room Area, and Ceiling Height of a room.

## Features

- Input fields for ACH, Room Area, and Ceiling Height to enter the necessary parameters.
- Calculate CADR button to perform the CADR calculation.
- Display of CADR in two units: CFM (Cubic Feet per Minute) and m³/h (Cubic Meters per Hour).

## Installation

1. Clone the repository or download the source code.
   ```bash
   git clone [repository_url]


2. Navigate to the project directory in your terminal.

cd CADR-Conscious---storybook

3. Run the following command to install the dependencies:

npm install

4. Rename the `storybook` directory to `.storybook` to enable Storybook.

mv storybook .storybook

## Usage

1. Start the development server by running the following command:

npm start


2. Open your web browser and visit `http://localhost:3000` to access the Air Quality Calculator.

3. Enter the desired values for ACH, Room Area, and Ceiling Height.

4. Click the "Calculate CADR" button to perform the CADR calculation.

5. The calculated CADR values in CFM and m³/h will be displayed below.

## Storybook

1. To view the Storybook for the CADR-Conscious project, run the following command:

npm run storybook


2. Open your web browser and visit `http://localhost:6006` to access the Storybook interface.

3. Explore the different components and their variations in Storybook.

## Testing

1. There is a Jest testing file in the `stores` folder.

2. To ensure the calculator is running properly, run this command:

npm run test


## Contributing

Contributions to the Air Quality Calculator are welcome! If you find any issues or would like to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
