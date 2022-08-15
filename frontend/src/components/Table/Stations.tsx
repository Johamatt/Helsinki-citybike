import { useEffect, useState } from "react";
import { getStationsPagination } from "../../axios/getData";
import "./table.css";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Station } from "../../types/responseTypes";
import { FileUpload } from "../Upload/FileUpload";
import StationModal from "../Modals/StationModal";

export const Stations: React.FC = () => {
  const [data, setData] = useState<Station[] | undefined>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [modalID, setModalID] = useState<number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStationsPagination(currentPage);
      setData(res);
    };
    fetchData();
  }, [currentPage]);

  if (data === undefined) {
    return <p>loading table</p>;
  }

  function showModal(ID: number) {
    setModalID(ID);
    setIsModalOpen(true);
  }

  return (
    <div className="container">
      <div className="container">
        <FileUpload modelType="stations" />
      </div>

      {data !== undefined ? (
        <div>
          <StationModal ID={modalID} isOpen={isModalOpen} />
          <table className="table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((row, index) => {
                  return (
                    <th key={index}>
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
                return (
                  <tr
                    key={index}
                    onClick={() => showModal(row.id)}
                    className="cursor-pointer"
                    role="button"
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
