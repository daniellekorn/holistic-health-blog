import React from 'react';
import NextLink from 'next/link';
import topicColors from '../utils/topic-colors';
import { Heading, Text, Flex, Box, Link, Image, Divider, Badge } from '@chakra-ui/react';

const BlogPost = (frontMatter) => {
  const { title, summary, image, topic } = frontMatter;

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={'column'}
          >
            <Image src={image} />
            <Divider />
            <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={'row'}
            >
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text
              color="gray.500"
              minWidth="105px"
              textAlign={['left', 'right']}
              mb={[4, 0]}
            >
            </Text>
            </Flex>
          </Flex>
          <Text color="gray.700">{summary}</Text>
          <Badge variantColor={topicColors[topic]}>{topic}</Badge>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
