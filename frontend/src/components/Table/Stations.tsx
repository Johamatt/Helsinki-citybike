import axios from "axios";
import { useEffect, useState } from "react";
import "./Stations.css";
interface Props {
    data: any;
    loading: Boolean;
}

export const Stations: React.FC<Props> = ({ data, loading }) => {
  if (loading) {
    return <p>loading</p>;
  }
  console.log(data.data.rows[0]);
  const headers = Object.keys(data.data.rows[0]);

  console.log(headers);

  return (
    <div className="fontColor">
      <table>
        <thead>
          <tr>
            {headers.map((row) => {
              console.log(row);
              return <td key={row}>{row}</td>;
            })}
          </tr>
        </thead>

        <tbody>
          {data.data.rows.map((row: any) => {
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
      <p>total number of rows: {data.data.count}</p>
    </div>
  );
};
