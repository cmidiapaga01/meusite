import React from 'react';
import { Button } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles.module.css';

const TagLoadButton = ({ onClick }) => {
  const props = useSpring({ width: 200 });

  return (
    <Button onClick={onClick} className={styles.main}>
      <animated.div className={styles.fill} style={props} />
      <animated.div className={styles.content}>
        {props.width.to(x => (x === 0 ? 'Start' : x === 200 ? 'Finish' : ''))}
      </animated.div>
    </Button>
  );
};

export default TagLoadButton;
