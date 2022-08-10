# This API service is responsible for retrieving data from the database for the frontend.

---

## Stack:

- Typescript
- Express
- Node.js
- Csv-parse
- Jest
- Postgresql (Docker)
- Sequelize (ORM)

---

## Service contains:

- Csv data, file extension and api route validation (src/utils/validation)

- Upload folder for imported csv files (src/utils/upload)

- Tests (src/tests)

- Routes for stations and trips (src/routes)

- Models for station and trip (src/models)

- Controller for station and trip (src/controller)

- Database orm connection (src/db)


---


## API routes:


### Trips

http://localhost:4000/trips/{id}
- returns information from single trip

http://localhost:4000/trips/upload
- for posting csv file that contains data about trips. Returns amount of successfully  imported rows and information about rows that could not be imported.

http://localhost:4000/trips/pagination?page={PageNumber}&size={NumberOfRecords}
- returns data from multiple trips. (For example `page=0&size=10`) returns first ten records by id

http://localhost:4000/trips/paginationfiltering?page={PageNumber}&size={NumberOfRecords}&col={ColumnName}&order={Asc/Desc}

- returns data from multiple trips (For example `page=0&size=10&col=departureTime
&order=asc`) sorts entire database in ascending order by departureTime and returns the first ten records.

___

### Stations (The parameters work in the same way as in the previous one)

http://localhost:4000/stations/{id}

http://localhost:4000/stations/upload

http://localhost:4000/stations/pagination?page={PageNumber}&size={NumberOfRecords}

http://localhost:4000/stations/paginationfiltering?page={PageNumber}&size={NumberOfRecords}&col={ColumnName}&order={Asc/Desc}
