// import GoogleMapReact from "google-map-react";
// import classes from "../styles/Map.module.css";
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
//     <div className={classes.mapContainer}>
//       <div className={classes.map}>
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

// // useEffect(() => {
// //     const initMap = () => {
// //         const myLatLan = { lat: 22.716471, lng: 90.361313 };
// //         const map = new window.google.maps.map(document.getElementById("map"), {
// //             zoom: 16,
// //             center: myLatLan,
// //         })
// //         const marker = new window.google.maps.Marker({
// //             position: myLatLan,
// //             map: map,
// //             title: "My Shop Location"
// //         });
// //     };

// //     initMap()
// // }, [])
