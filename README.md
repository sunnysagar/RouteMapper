# Route Mapper

## Overview
The Route Mapper is a web application built using **React** and **Google Maps API**. It allows users to plan routes by specifying an **origin**, **destination**, and **multiple stops (waypoints)**. The application calculates the **distance** and **ETA (Estimated Time of Arrival)** between the given locations and displays the information dynamically. Users can choose between different **transit modes** such as driving, biking, and walking. The app is designed to be responsive and works seamlessly on both desktop and mobile devices.

## Deployed URL 
[Netlify](https://routemapper.netlify.app/)

## Objective
The primary objective of the Route Mapper project is to provide an easy-to-use interface for users to calculate routes with multiple stops. The application leverages the Google Maps API to:
1. Plot routes.
2. Calculate distances and ETA.
3. Offer different transit options (driving, biking, and walking).
4. Allow users to add or remove stops dynamically.

This project aims to help users plan their trips or deliveries by providing them with an intuitive interface and reliable distance and time calculations.

## Tech Stack Used
- **Frontend**: 
  - **React**: For building the user interface.
  - **React Google Maps API**: For integrating Google Maps functionalities.
  - **HTML, CSS**: For structure and styling.
  - **JavaScript (ES6+)**: For handling logic and interactions.

- **API**:
  - **Google Maps API**: For rendering maps, calculating routes, distances, and ETA, and handling places search (autocomplete).

- **Tools**:
  - **NPM**: For managing dependencies.
  - **React Hooks**: For managing state and lifecycle methods (useState, useEffect, useRef).
  - **Flexbox and CSS Grid**: For responsive layout design.

## Features
1. **Route Mapping**:
   - Users can set an **origin**, **destination**, and add multiple **stops (waypoints)**.
   - The map dynamically updates as the user adds or removes stops.

2. **Distance and ETA Calculation**:
   - The app calculates and displays the **distance** and **ETA** between the **origin**, **destination**, and **waypoints**.
   - Supports different transit modes: **Driving**, **Biking**, and **Walking**.

3. **Dynamic Stop Addition and Removal**:
   - Users can add and remove stops using a search box that interacts with the Google Places API.
   - Stops are added dynamically to the route, and the distance and ETA are recalculated.

4. **Responsive Design**:
   - The application is responsive and adapts to different screen sizes.
   - On mobile screens, the map is displayed at the top, with the search boxes placed below.

5. **Transit Mode Selection**:
   - Users can choose the transit mode for calculating the ETA (Driving, Walking, or Biking).

## Future Scope
1. **Offline Maps**: Integrate offline maps functionality for users who may not have continuous internet access.
2. **User Authentication**: Implement user login and saving favorite routes or destinations.
3. **Real-Time Traffic Updates**: Add real-time traffic data to ETA calculation.
4. **Custom Map Styling**: Allow users to choose custom map styles for personalization.
5. **Integration with Third-Party Services**: Enable integration with services like Uber, Lyft, or local delivery systems for real-time availability and cost estimates.

## Conclusion
The Route Mapper project provides a user-friendly way to plan and visualize routes with multiple stops. It integrates with the Google Maps API to deliver accurate distance, ETA, and routing functionality. This application is ideal for anyone who needs to plan trips or deliveries, offering flexibility with transit mode options and dynamic stop handling. The responsive design ensures usability across all devices, making it an effective tool for route planning.

---

### Setup Instructions
To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sunnysagar/route-mapper.git
   ```
2. Navigate to projct directory
   ```
   cd route-mapper
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the development server.
   ```
   npm start
   ``` 
 
