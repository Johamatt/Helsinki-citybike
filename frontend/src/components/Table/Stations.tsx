import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getdata } from "../../axios/getData";
import "./Stations.css";
import { useReactTable } from "@tanstack/react-table";

import { ResponseData } from "../../types/responseTypes";

export const Stations: React.FC = () => {
  const [data, setData] = useState<ResponseData | undefined>();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getdata(currentPage, "stations");
      setData(res);
    };
    fetchData();
  }, []);

  if (data === undefined) {
    return <p>loading table</p>;
  }

  return (
    <div>
      {data !== undefined ? (
        <div className="fontColor">
          <table>
            <thead>
              <tr>
                {Object.keys(data.rows[0]).map((row) => {
                  console.log(row);
                  return <td key={row}>{row}</td>;
                })}
              </tr>
            </thead>

            <tbody>
              {data.rows.map((row: any) => {
                return (
                  <tr key={row.FID}>
                    <td>{row.id}</td>
                    <td>{row.osoite}</td>
                    <td>{row.kaupunki}</td>
                    <td>{row.kapasiteet}</td>
                    <td>{row.name}</td>
                    <td>{row.nimi}</td>
                    <td>{row.namn}</td>
                    <td>{row.stad}</td>
                    <td>{row.adress}</td>
                    <td>{row.operaattor}</td>
                    <td>{row.x}</td>
                    <td>{row.y}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p>total number of rows: {data.count}</p>
        </div>
      ) : (
        <div>
          <p>no data inserted</p>
        </div>
      )}
    </div>
  );
};
