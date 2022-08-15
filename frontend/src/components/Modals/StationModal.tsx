import React, { useEffect, useState } from "react";
import { getSingleStation } from "../../axios/getData";
import { Station } from "../../types/responseTypes";
import { Map } from "./Map";
interface Props {
  isOpen: boolean;
  ID: number | undefined;
}
export const StationModal: React.FC<Props> = ({ ID, isOpen }) => {
  const [data, setData] = useState<Station | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      await getSingleStation(ID).then((resp) => {
        setData(resp);
      });
    };
    if (isOpen) {
      fetchData();
    }
  }, [ID]);

  if (isOpen === true && data !== undefined) {
    return (
      <div>
        <Map data={data} />
      </div>
    );
  }
  return <div />;
};

export default StationModal;
