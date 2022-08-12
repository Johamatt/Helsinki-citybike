import { useEffect, useRef, useState } from "react";
import { getdataTrips } from "../../axios/getData";

import {
  AiOutlineArrowUp,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { Trip } from "../../types/responseTypes";
import { FileUpload } from "../Upload/FileUpload";

export const Trips: React.FC = () => {
  const [data, setData] = useState<Trip[] | undefined>();
  const [currentPage, setCurrentPage] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getdataTrips(currentPage);
      setData(res);
    };
    fetchData();
  }, [currentPage]);

  if (data === undefined) {
    return <p>loading table</p>;
  }

  const onChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="container">
        <FileUpload modelType="trips" />
      </div>
      {data !== undefined ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((row) => {
                  return (
                    <th>
                      {row}
                      {/* <span>
                        <AiOutlineArrowUp />
                      </span> */}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((row: Trip, index) => {
                console.log(Object.values(row));
                return (
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
        <div>
          <p>no data found</p>
        </div>
      )}
    </div>
  );
};
