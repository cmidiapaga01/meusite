import React from 'react';
import { Button } from '@chakra-ui/react';
import { animated } from '@react-spring/web';
import styles from '../styles.module.css';

const TagLoadButton = ({ onClick, props }) => {
  return (
    <Button onClick={onClick} className={styles.main}>
      <animated.div className={styles.fill} style={props} />
      <animated.div className={styles.content}>
        {props.width.to((x) =>
          x === 0 ? 'Start' : x === 200 ? 'Finish' : ''
        )}
      </animated.div>
    </Button>
  );
};

export default TagLoadButton;


// import React, { useState } from "react";
// import { Button, Box } from "@chakra-ui/react";
// import { useSpring, animated } from "@react-spring/web";
// import styles from "../styles.module.css";

// const TagLoadButton = ({ onClick }) => {
//   const [colorChanged, setColorChanged] = useState(false);
//   const props = useSpring({ width: colorChanged ? 200 : 0 });

//   return (
//     <Box p="4" className={styles.container}>
//       <Button onClick={onClick} className={styles.main}>
//         <animated.div className={styles.fill} style={props} />
//         <animated.div className={styles.content}>
//           {props.width.to((x) =>
//             x === 0 ? "Start" : x === 200 ? "Finish" : ""
//           )}
//         </animated.div>
//       </Button>
//     </Box>
//   );
// };

// export default TagLoadButton;
