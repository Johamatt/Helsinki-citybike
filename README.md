# Helsinki-citybike


This project allows user to upload trip or station csv data (Example files: https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv, https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv ) to database and view the uploaded data from the front-end interface.  



## How to install:

### Backend:

1. Go to Helsinki-citybike/backend-ts -folder

2. Run `npm install`

3. Run `npm start` (creates dist folder)

4. Run `docker build -t backend .`

5. Run `docker compose up`

### Frontend:

1. Go to Helsinki-citybike/frontend/ -folder

2. Run `npm install`

3. Run `npm start`
