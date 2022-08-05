import axios from "axios";
import { useEffect, useState } from "react";

export const Table: React.FC<any> = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return <div className="container"></div>;
};
