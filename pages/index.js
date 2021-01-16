import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  SimpleGrid,
  Image,
  Divider
} from '@chakra-ui/react';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { frontMatter as blogPosts } from './blog/**/*.mdx';

const url = 'https://holistichealthwomen.com/blog';
const title = 'Blog';
const description =
  'Health, wellness, fitness, inspiration, diet, clean, detox, free, healthy, women.';

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  console.log(filteredBlogPosts);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="800px"
          m="0 auto 1rem auto"
        >
          <Stack
            as="main"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            maxWidth="800px"
          >
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="800px"
            >
              <Image
                width="100%"
                src="static/images/camp-blog.png"
                alt="Book with coffee"
              />
              <Divider />
              <Text color="gray.700">
                {`Find everything here from fitness inspiration to relationship advice to healthy eating info. Thus far, our community of health conscious ladies have posted ${blogPosts.length} articles on this site. Use the search below to filter by title.`}
              </Text>
              <InputGroup my={4} mr={4} w="100%">
                <Input
                  aria-label="Search articles"
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search articles"
                />
                <InputRightElement>
                  <Icon name="search" color="gray.300" />
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="800px"
              mt={8}
            >
              <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                All Blog Posts
              </Heading>
              {!filteredBlogPosts.length && 'No posts found.'}
              <SimpleGrid columns={2} minChildWidth="250px" spacing="40px">
                {filteredBlogPosts.map((frontMatter) => (
                  <BlogPost key={frontMatter.title} {...frontMatter} />
                ))}
              </SimpleGrid>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default Blog;
