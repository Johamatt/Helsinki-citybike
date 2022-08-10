# Helsinki-citybike


This project allows user to upload trip or station csv data (Example files: https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv, https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv ) to database and view the uploaded data from the front-end interface.  



How to install:

1. Git clone https://github.com/Johamatt/Helsinki-citybike.git

Backend:

2. Go to Helsinki-citybike/backend-ts -folder

3. Run npm install

4. Run npm start (creates dist folder)

5. Run docker build -t backend .

6. Run docker compose up

Frontend:

2. Go to Helsinki-citybike/frontend/ -folder

3. Run npm install

4. Run npm start
