import { useEffect, useState } from "react";
import {
  getStationsFilterPagination,
  getTripsFilterPagination,
  getTripsPagination,
} from "../../axios/getData";
import "./table.css";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";

import { Trip } from "../../types/responseTypes";
import { FileUpload } from "../Upload/FileUpload";

interface columnFilter {
  col: string;
  order: "ASC" | "DESC";
}

export const Trips: React.FC = () => {
  const [data, setData] = useState<Trip[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [columnFilter, setColumnFilter] = useState<columnFilter>({
    col: "id",
    order: "ASC",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTripsFilterPagination(
        currentPage,
        columnFilter.col,
        columnFilter.order
      );
      setData(res);
    };

    fetchData();
  }, [currentPage, columnFilter]);

  function toggleFilter(row: string) {
    if (columnFilter.col === row && columnFilter.order === "ASC") {
      setColumnFilter({ col: row, order: "DESC" });
    } else {
      setColumnFilter({ col: row, order: "ASC" });
    }
  }

  if (data === undefined) {
    return <p>loading table</p>;
  }

  return (
    <div className="container">
      <div className="container">
        <FileUpload modelType="trips" />
      </div>
      {data.length !== 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((row, index) => {
                  return (
                    <th key={index} className="text-center ">
                      <span className="d-flex flex-column ">
                        <AiOutlineArrowUp
                          className="d-block mx-auto"
                          onClick={() => {
                            toggleFilter(row);
                          }}
                        />
                      </span>
                      {row}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((row: Trip, index) => {
                return (
                  // className="line-highlight">
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.departureTime.toString()}</td>
                    <td>{row.returnTime.toString()}</td>
                    <td>{row.departureStationId}</td>
                    <td>{row.departureStationName}</td>
                    <td>{row.returnStationId}</td>
                    <td>{row.returnStationName}</td>
                    <td>{row.distanceInMeters}</td>
                    <td>{row.durationInSeconds}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav className="d-flex justify-content-center">
            <ul className="pagination">
              <li
                className="page-link"
                onClick={() => {
                  if (currentPage !== 0) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              >
                <AiOutlineArrowLeft />
              </li>
              <li className="page-link">{currentPage}</li>
              <li
                className="page-link"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                <AiOutlineArrowRight />
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="w-100% p-3 h-25  text-center">
          <h2>No Data found</h2>
        </div>
      )}
    </div>
  );
};
