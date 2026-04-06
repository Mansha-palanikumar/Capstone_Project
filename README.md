# Welcome to your CropSense AI project

🌱 AI-Based Crop Recommendation System

📌Capstone Project
        This project is developed as part of a final year capstone project by a team of undergraduate students in the field of Information Technology. 
        The objective of this project is to apply concepts of Machine Learning, IoT, and Web Development to solve real-world agricultural problems.

👥 Team Members
      Mansha P
      Janani B
      Kaushik Mahesh
      Kavisrivysya C
      
🎯 Project Overview

  The AI-Based Crop Recommendation System is designed to assist farmers in selecting the most suitable crops based on soil and environmental conditions. 
  The system uses Machine Learning algorithms (Decision Tree and Gradient Boosting) to analyze parameters such as soil nutrients, pH level, temperature, rainfall, and humidity.
  The project integrates simulated sensor data with machine learning models to demonstrate how real-time agricultural data can be used to improve crop
productivity and reduce the risk of crop failure.

🚀 Key Objectives
  - To provide data-driven crop recommendations
  - To improve agricultural productivity
  - To demonstrate integration of ML + Sensor-based systems
  - To support smart and sustainable farming practices
    
🚀 Features
    - Crop recommendation based on soil & weather data
    - Machine Learning-based prediction
    - Displays multiple suitable crops with confidence (%)
    -  Simulated real-time sensor data (N, P, K, pH, temperature, moisture)
    -   Highlights highly suitable crops
    -   User-friendly responsive UI
    -   Technologies Used
       
🔹 Frontend
    React.js
    Tailwind CSS
🔹 Backend
    Python
    Flask / FastAPI
🔹 Machine Learning
    Scikit-learn
    Decision Tree
    Gradient Boosting
🔹 Data Processing
    Pandas
    NumPy
⚙️ How It Works
        Sensor Data (Simulated) 
                  ↓
        Data Preprocessing 
                  ↓
        Machine Learning Model 
                  ↓
        Crop Prediction 
                  ↓
        UI Display (Recommendations)
        
📡 Sensor Data (Simulation)

  Currently, the system uses simulated sensor data:

  -Temperature
  -Moisture
  -pH level
  -Nitrogen (N)
  -Phosphorus (P)
  -Potassium (K)

The system is designed to integrate with real IoT sensors (e.g., ESP32, NPK sensors) in future.

📊 Sample Output
      Wheat – 100%
      Maize – 100%
      Cotton – 100%
      Rice – 96%
      Sugarcane – 93%
      
🛠️ Installation & Setup
    1️⃣ Clone the Repository
        -> git clone https://github.com/your-username/crop-recommendation.git
        -> cd crop-recommendation
    2️⃣ Backend Setup
        -> pip install -r requirements.txt
        -> python app.py
3️⃣ Frontend Setup
        -> npm install
        -> npm start
        
📈 Model Details
   Algorithm Used:
      - Decision Tree
      - Gradient Boosting
   Input Features:
      - N, P, K
      - pH
      - Temperature
      - Humidity
      - Rainfall
    Output:
      -  Recommended crops with suitability percentage
      
⚠️ Limitations
      Uses simulated sensor data (no real hardware integration)
      Depends on dataset quality
      Limited crop dataset
      
🔮 Future Enhancements
       Real-time IoT sensor integration
       Weather API integration
       Mobile application
       Fertilizer & irrigation recommendation
       Multi-language support

🎯 Use Case
    Farmers
    Agricultural researchers
    Smart farming applications
    
📜 License
      This project is for academic and educational purposes.


  
