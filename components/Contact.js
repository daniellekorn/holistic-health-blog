import React, { useState, useRef } from 'react';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const inputElMsg = useRef(null);
  const toast = useToast();

  const contact = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    toast({
      title: 'Success!',
      description: 'Message sent. Looking forward to talking!',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box
      border="1px solid"
      borderColor="red.200"
      bg="red.50"
      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
      <Heading as="h5" size="lg" mb={2}>
        Contact Me
      </Heading>
      <Text>
        Have questions about how to improve your health? Reach out!
      </Text>
      <InputGroup size="md" mt={4}>
        <Input
          aria-label="Your Email"
          placeholder="Email"
          ref={inputEl}
          type="email"
        />
      </InputGroup>
      <InputGroup size="md" mt={8}>
      <Input
          aria-label="Your Message"
          placeholder="Your message here ... "
          ref={inputElMsg}
          type="text"
          h="6rem"
        />
      </InputGroup>
      <InputGroup size="md" mt={8}>
        <Button
              isLoading={loading}
              fontWeight="bold"
              h="1.75rem"
              size="md"
              onClick={contact}
              bg="white"
        >
            Send
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Contact;