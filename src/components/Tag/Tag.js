// Tag.js
import React, { useState } from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import { Element, scroller } from 'react-scroll';
import TagData from './TagData';
import TagLoadButton from './TagLoadButton';
import TagModal from './TagModal';
import TagConfetti from './TagConfetti';

const Tag = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentTag, setCurrentTag] = useState(null);
  const [colorChanged, setColorChanged] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const props = useSpring({ width: colorChanged ? 200 : 0 });

  const openModal = (tag) => {
    setCurrentTag(tag);
    setAnimationStarted(false);
    onOpen();
  };

  const handleModalClose = () => {
    onClose();
    setAnimationStarted(true);
    setColorChanged(true);
  };

  const handleAnimationFinish = () => {
    // Handle actions after animation finishes, like showing confetti
    console.log('Animation finished! Show confetti here...');

    // Scroll to Tag2 after animation finishes
    setTimeout(() => {
      console.log('Scrolling to Tag2...');
      scroller.scrollTo('tag2Section', {
        duration: 500,
        smooth: true,
        offset: 0 // Adjust the offset as needed to accommodate any fixed header
      });
    }, 3000); // Scroll after 3 seconds
  };

  const tag = TagData;

  return (
    <Box backgroundColor="orange" id="tagSection">
      <Box key="tag1" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="2">
        <Box textAlign="center">
          <img src={tag.imageSrcCard} alt="Tag Image" />
        </Box>
        <Box p="4">
          <TagLoadButton onClick={() => openModal(tag)} props={props}/>
        </Box>
      </Box>
      <TagModal
        isOpen={isOpen}
        onClose={handleModalClose}
        currentTag={currentTag}
        props={props}
        handleAnimationFinish={handleAnimationFinish}
      />


      {/* <TagConfetti animationStarted={animationStarted} /> */}

      {animationStarted && (
        <TagConfetti onFinish={handleAnimationFinish} />
      )}
      
    </Box>
  );
};

export default Tag;



// // Tag.js
// import React from 'react';
// import { Box } from '@chakra-ui/react';
// import tagData from './TagData'; // Importing the TagData component
// import TagLoadButton from './TagLoadButton'; // Importing the TagLoadButton component

// const Tag = ({ onClick }) => {
//   // TagData.js
// const tagData = {
//     imageSrc: '../../images/cat_no_bg.png', // Replace with the actual path to your image
//     description: 'GTM tag was fired bitch!!!!!',
//     category: 'Analytics'
//   };

//   const handleClick = () => {
//     // Handle button click
//     onClick();
//   };

//   return (
//     <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="2">
//       <Box textAlign="center">
//         <image src={Tag.imageSrc} alt="Tag Image" />
//       </Box>
//       <Box p="4">
//         <TagLoadButton onClick={handleClick} />
//       </Box>
//     </Box>
//   );
// };

// export default Tag;
