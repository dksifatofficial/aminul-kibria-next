"use client";

import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo } from "react";

const Home: NextPage = () => {
  const libraries = useMemo(() => ["placec"], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <p>This is sidebar...</p>
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onLoad={() => console.log("Map Component Loaded...")}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
        />
        {[1000, 2500].map((radius, idx) => {
          return (
            <CircleF
              key={idx}
              center={mapCenter}
              radius={radius}
              onLoad={() => console.log("Circle Load...")}
              options={{
                fillColor: radius > 1000 ? "red" : "green",
                strokeColor: radius > 1000 ? "red" : "green",
                strokeOpacity: 0.8,
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Home;

// import GoogleMapReact from "google-map-react";
// import LocationPin from "./LocationPin";
// import { getAuth } from 'firebase/auth'
// import { Loader } from "@googlemaps/js-api-loader";

// function Map({ location, zoomLevel}) {
//    const auth = getAuth();
//    const defaultProps = {
//     center: {
//       lat: 22.716471,
//       lng: 90.361313
//     },
//     zoom: 14
//   };
//   return (
//     <div className="w-full px-5 py-[100px] lg:px-[200px] lg:py-[100px]">
//       <div className="h-[400px] rounded-[10px]">
//         <GoogleMapReact
//         bootstrapURLKeys={auth}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         >
//             <LocationPin
//           lat={22.716471}
//           lng={90.361313}
//           text='Raiment Gallery'
//         />

//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// }

// export default Map;
