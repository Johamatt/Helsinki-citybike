import { useEffect, useState } from "react";
import {
  getStationsFilterPagination,
  getStationsPagination,
} from "../../axios/getData";
import "./table.css";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { Station } from "../../types/responseTypes";
import { FileUpload } from "../Upload/FileUpload";
import StationModal from "./Modals/StationSingleView";

export const Stations: React.FC = () => {
  const [data, setData] = useState<Station[] | undefined>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [columnFilter, setColumnFilter] = useState<string>();

  const [modalID, setModalID] = useState<number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      let res;
      if (columnFilter !== undefined) {
        res = await getStationsFilterPagination(
          currentPage,
          columnFilter,
          "ASC"
        );
      } else {
        res = await getStationsPagination(currentPage);
      }
      setData(res);
    };

    fetchData();
  }, [currentPage, columnFilter]);

  console.log(columnFilter);

  console.log(data);

  if (data === undefined) {
    return <p>loading table</p>;
  }

  function showModal(ID: number) {
    setModalID(ID);
    setIsModalOpen(true);
  }

  function toggleFilter(row: string) {
    setColumnFilter(row);
  }

  return (
    <div className="container">
      <div className="container">
        <FileUpload modelType="stations" />
      </div>

      {data.length !== 0 ? (
        <div>
          <StationModal ID={modalID} isOpen={isModalOpen} />
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
              {data.map((row: Station, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => showModal(row.id)}
                    role="button"
                    className="line-highlight"
                  >
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
                onClick={() => setCurrentPage(currentPage + 1)}
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
