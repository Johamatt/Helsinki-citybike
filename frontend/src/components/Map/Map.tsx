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
          Station name: <b>{data.data.name}</b>
        </p>

        <p className="p-2">
          Station address: <b>{data.data.osoite}</b>
        </p>

        <p className="p-2">
          Total trips started: <b>{data.totalTripsStarted?.[0].count}</b>
        </p>
        <p className="p-2">
          Total trips ended: <b>{data.totalTripsEnded?.[0].count}</b>
        </p>
      </div>
    </div>
  );
};
