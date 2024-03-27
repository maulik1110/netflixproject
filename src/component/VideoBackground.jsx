import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const selector = useSelector((store) => store.movies.trailerVideo);


  //hooks
  useMovieTrailer(movieId);
  return (
    <div className="flex justify-center items-center">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + selector?.key+ "?&autoplay=1&mute=1&loop=1&controls=0"}
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;




// import React from "react";
// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   const selector = useSelector((store) => store.movies.trailerVideo);

//   //hooks
//   useMovieTrailer(movieId);

//   const iframeStyle = {
//     width: "100vw",
//     height: "100vh",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     zIndex: -1,
//     transform: "scale(1.2)", // Adjust the zoom level as needed
//     transformOrigin: "center",
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <iframe
//         style={iframeStyle}
//         src={"https://www.youtube.com/embed/" + selector?.key + "?&autoplay=1&mute=1&loop=1&controls=0"}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;
