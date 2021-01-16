import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  Flex,
  Box,
  Image
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg="rgba(255, 255, 255, 0.8)"
        as="nav"
        p={8}
        mt={[0, 2]}
        mb={2}
        mx="auto"
      >
        <Image
          src="/static/images/logo.png"
          alt="Holistic Health Women Logo"
          style={{ height: '100px' }}
        />
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        flexDirection="row"
        flexWrap="wrap"
        bg="white"
        color="black"
        px={8}
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Container;
