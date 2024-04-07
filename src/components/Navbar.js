import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

// import Logo from "./Logo";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Text w="100px" color={"black"}>
        Theozinho
      </Text>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It works </MenuItem>
        <MenuItem to="/faetures">Features </MenuItem>
        <MenuItem to="/pricing">Pricing </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={"black"}
            bg={"white"}
            _hover={{
              bg: ["gray.100"]
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      maxW="container.xl"
      position="fixed" // Add position fixed here
      top="0" // Stick the navbar to the top of the viewport
      zIndex="100"
      mb={8}
      p={8}
      bg="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(20px)" 
      color={"black"}
      {...props}
    >
      {children}
    </Flex>

    // <Flex
    //   as="nav"
    //   align="center"
    //   justify="center" // Center the inner container horizontally
    //   wrap="wrap"
    //   w="100vw" // Set width to 100vw for full viewport width
    //   bg="gray.200" // Set background color for the outer container
    //   {...props}
    // >
    //   <Box
    //     maxW="container.lg" // Set max-width for the inner container
    //     w="100%" // Ensure inner container spans full width of the outer container
    //     px={{ base: "4", md: "0" }} // Add padding to inner container for responsiveness
    //   >
    //     {children}
    //   </Box>
    // </Flex>
  );
};

export default Navbar;





// import React, { useState } from 'react';
// import { Box, Flex, Heading, Spacer, Link, IconButton, useDisclosure } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box py="4" px="4" bg="blue.500" color="white">
//       <Flex maxW="container.xl" mx="auto" alignItems="center">
//         <Heading as="h1" size="md" mr="4" fontSize="2xl">
//           My Website
//         </Heading>
//         <Spacer />
//         <Box display={{ base: 'none', md: 'flex' }}>
//           <Link as={RouterLink} to="/" fontSize={{ base: 'sm', md: 'md' }} mr={{ base: '2', md: '4' }}>
//             Home
//           </Link>
//           <Link as={RouterLink} to="/about" fontSize={{ base: 'sm', md: 'md' }} mr={{ base: '2', md: '4' }}>
//             About
//           </Link>
//           <Link as={RouterLink} to="/contact" fontSize={{ base: 'sm', md: 'md' }}>
//             Contact
//           </Link>
//         </Box>
//         <IconButton
//           display={{ base: 'flex', md: 'none' }}
//           aria-label="Toggle navigation"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           onClick={onToggle}
//           variant="ghost"
//           fontSize="lg"
//         />
//       </Flex>
//       <Box
//         display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
//         bg="blue.500"
//         color="white"
//         p={4}
//         mt={4}
//         borderRadius="md"
//       >
//         <Flex direction="column">
//           <Link as={RouterLink} to="/" fontSize="md" mb="2">
//             Home
//           </Link>
//           <Link as={RouterLink} to="/about" fontSize="md" mb="2">
//             About
//           </Link>
//           <Link as={RouterLink} to="/contact" fontSize="md">
//             Contact
//           </Link>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;






// import React, { useState } from 'react';
// import { Box, Flex, Heading, Spacer, Link, IconButton, useDisclosure } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box py="4" bg="blue.500" color="white">
//       <Flex maxW="container.xl" mx="auto" alignItems="center">
//         <Heading as="h1" size="lg">
//           My Website
//         </Heading>
//         <Spacer />
//         <Box display={{ base: 'none', md: 'flex' }}>
//           <Link as={RouterLink} to="/" mr="4">
//             Home
//           </Link>
//           <Link as={RouterLink} to="/about" mr="4">
//             About
//           </Link>
//           <Link as={RouterLink} to="/contact">
//             Contact
//           </Link>
//         </Box>
//         <IconButton
//           display={{ base: 'flex', md: 'none' }}
//           aria-label="Toggle navigation"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           onClick={onToggle}
//           variant="ghost"
//         />
//       </Flex>
//       <Box
//         display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
//         bg="blue.500"
//         color="white"
//         p={4}
//         mt={4}
//         borderRadius="md"
//       >
//         <Flex direction="column">
//           <Link as={RouterLink} to="/" mb="2">
//             Home
//           </Link>
//           <Link as={RouterLink} to="/about" mb="2">
//             About
//           </Link>
//           <Link as={RouterLink} to="/contact">
//             Contact
//           </Link>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;


// // // Navbar.jsx
// // import React from 'react';
// // import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
// // import { Link as RouterLink } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <Box py="4" bg="blue.500" color="white">
// //       <Flex maxW="container.xl" mx="auto" alignItems="center">
// //         <Heading as="h1" size="lg">
// //           Theo Ikedenha
// //         </Heading>
// //         <Spacer />
// //         <Box>
// //           <Link as={RouterLink} to="/" mr="4">
// //             Home
// //           </Link>
// //           <Link as={RouterLink} to="/" mr="4">
// //           {/* <Link as={RouterLink} to="/about" mr="4"> */}
// //             About
// //           </Link>
// //           <Link as={RouterLink} to="/">
// //             Contact
// //           </Link>
// //         </Box>
// //       </Flex>
// //     </Box>
// //   );
// // };

// // export default Navbar;
