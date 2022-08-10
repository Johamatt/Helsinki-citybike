import axios from "axios";
import { useEffect, useState } from "react";
import { Stations } from "./Stations";

export const Table: React.FC<any> = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:4000/stations/pagination/?page=${currentPage}&size=10`
      );
      setData(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <Stations data={data} loading={loading} />
    </div>
  );
};
