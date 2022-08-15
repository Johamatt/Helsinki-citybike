import { useEffect, useState } from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Station } from "../../types/responseTypes";

interface Props {
  data: Station;
}

export const Map: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ height: "50vh" }}>
      <MapContainer
        center={[data.data.y, data.data.x]}
        zoom={13}
        style={{ height: "50%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a "href=http://osm.org/
        copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/
        {z}/{x}/{y}.png"
        />
        <Marker position={[data.data.y, data.data.x]}>
          <Popup>{data.data.osoite}</Popup>
        </Marker>
      </MapContainer>

      <div className="d-flex flex-column container-sm">
        <p className="p-2">
          Total trips started: {data.totalTripsStarted?.[0].count}
        </p>
        <p className="p-2">
          Total trips ended: {data.totalTripsEnded?.[0].count}
        </p>
      </div>
    </div>
  );
};
