import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import bannerBG from "../images/banner-background.jpg";
import bannerFG from "../images/banner-foreground.png";
import "./Parallax.css";

const Parallax = () => {
  return (
    <ParallaxProvider className="container-body">
    <ParallaxBanner
      layers={[
        { image: bannerBG, speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image: bannerFG, speed: -10 },
      ]}
      className="bg-container aspect-[2/1]"
    />
    </ParallaxProvider>
  );
};

export default Parallax;




// import { Parallax } from 'react-scroll-parallax';
// import { ParallaxBanner } from 'react-scroll-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import bannerBG from "../images/banner-background.jpg";
// import bannerFG from "../images/banner-foreground.png";
// // import Atropos from "atropos/react";
// // import atroCat from "../images/cat_no_bg.png";
// // import atroCatBg from "../images/manyCats_orangeBg.png";
// // import "./Atrocat.css";

// const Parapara = () => {
//     return (
//       <ParallaxBanner
//         layers={[
//           { image: bannerBG, speed: -20 },
//           {
//             speed: -15,
//             children: (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <h1 className="text-8xl text-white font-thin">Hello World!</h1>
//               </div>
//             ),
//           },
//           { image: bannerFG, speed: -10 },
//         ]}
//         className="aspect-[2/1]"
//       />
//     );
//   };

// export default Parapara;
