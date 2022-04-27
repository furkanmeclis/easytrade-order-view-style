import React from 'react';
import {
  Flex,
  Box,
  Stack,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { FcPrint } from 'react-icons/fc';
export default function App() {
  return (
    <>
      <Flex w="full" direction={['column', 'row']}>
        <Box flex={3}>
          <Stack
            direction="column"
            spacing={4}
            m="4"
            borderRadius={4}
            bg="gray.100"
            p="4"
          >
            <Box h="20%">
              <Flex justify={'space-between'}>
                <Box>
                  <Flex align="center">
                    <Heading size="lg">Gönderilmeyen</Heading>
                    <Text size="lg" ml="2" color="gray.500">
                      3 Ürün
                    </Text>
                  </Flex>
                </Box>
                <Box></Box>
              </Flex>
            </Box>
            <Box h="60%">
              <TableContainer bg="white" borderRadius="md">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Ürün</Th>
                      <Th>Fiyat</Th>
                      <Th>Toplam Tutar</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Flex>
                          <Box flex="1">
                            <Image
                              src="https://cdn-gap.akinon.net/products/2019/04/30/130670/83e94720-da74-47ca-9608-0e907cf70a46_size520x693_cropCenter.jpg"
                              boxSize="60px"
                            />
                          </Box>
                          <Box flex="2">
                            <Flex direction="column">
                              <Box>
                                <Heading size="xs">T-shirt</Heading>
                              </Box>
                              <Box>
                                <Text size="xs" color="gray.500">
                                  ABCDEFGHIJKL-XS
                                </Text>
                              </Box>
                            </Flex>
                          </Box>
                        </Flex>
                      </Td>
                      <Td>millimetres (mm)</Td>
                      <Td>25.4</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box h="20%">
              <Button colorScheme="blue" rightIcon={<FcPrint />} m="2">
                Yazdır
              </Button>
              <Button colorScheme="blue" rightIcon={<FcPrint />} m="2">
                Fiş Yazdır
              </Button>
              <Button colorScheme="blue" rightIcon={<FcPrint />} m="2">
                Kargo Fişi Yazdır
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box flex={1}></Box>
      </Flex>
    </>
  );
}