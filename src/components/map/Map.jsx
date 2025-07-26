import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

function LocationMap() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <Map
        mapId={"993c69e6518a9efb5df3d7e3"}
        style={{ width: "100%", height: "50vh" }}
        defaultCenter={{ lat: 59.4009, lng: 13.55562 }}
        defaultZoom={13}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
      >
        <AdvancedMarker position={{ lat: 59.4009, lng: 13.55562 }} title="Gillesstugan" />
      </Map>
    </APIProvider>
  );
}

export default LocationMap;
