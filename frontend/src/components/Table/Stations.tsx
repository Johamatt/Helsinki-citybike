import { useEffect, useRef, useState } from "react";
import { getdataStations } from "../../axios/getData";
import "./Stations.css";

import {
  AiOutlineArrowUp,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { Station } from "../../types/responseTypes";

export const Stations: React.FC = () => {
  const [data, setData] = useState<Station[] | undefined>();
  const [currentPage, setCurrentPage] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getdataStations(currentPage);
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
              {data.map((row: Station, index) => {
                console.log(Object.values(row));
                return (
                  <tr key={index}>
                    <td>{row.FID}</td>
                    <td>{row.id}</td>
                    <td>{row.nimi}</td>
                    <td>{row.namn}</td>
                    <td>{row.name}</td>
                    <td>{row.osoite}</td>
                    <td>{row.adress}</td>
                    <td>{row.kaupunki}</td>
                    <td>{row.stad}</td>
                    <td>{row.operaattor}</td>
                    <td>{row.kapasiteet}</td>
                    <td>{row.x}</td>
                    <td>{row.y}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav className="d-flex justify-content-center">
            <ul className="pagination">
              <li
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <AiOutlineArrowLeft />
              </li>
              <li className="page-link">{currentPage}</li>
              <li
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
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
