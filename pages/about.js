import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  Box,
  Image
} from '@chakra-ui/react';
import Container from '../components/Container';
import Contact from '../components/Contact';

const url = 'https://holistichealthwomen.com/about';
const title = 'About Me – Jess ';

const About = () => {
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <SimpleGrid columns={2} spacing={10}>
              <Box>
                <Image 
                src="/static/images/jessica-travel.jpg" 
                alt="Headshot of Jess"
                />
              </Box>
              <Box>
                <Text color="grey.700" mb={4}>
                Hey, I’m Jess. I'm a nature-lover, certified yoga teacher, and plant-based cook. 
                I have a daily meditation practice and love helping others discover the wonder of them mind-body connection. 
                </Text>
              </Box>
            </SimpleGrid>
            <Contact />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
