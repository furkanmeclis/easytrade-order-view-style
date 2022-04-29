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
  Divider,
  Image,
  Button,
} from '@chakra-ui/react';
import { FcPrint, FcBusinessman, FcShipped, FcDocument } from 'react-icons/fc';
export default function App() {
  const printPage = () => {
    window.print()
  }
  return (
    <>
      <Flex w="full" direction={['column', 'column','row']} id="contentArea">
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
              <Button colorScheme="blue" onClick={printPage} rightIcon={<FcPrint />} m="2">
                Yazdır
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box flex={1} >
          <Flex direction="column">

            <Box
              m="4"
              borderRadius={4}
              bg="gray.100"
              p="4"
              w="full"
              h="full"
              flex="2">
              <Heading size="md">Sipariş Özeti</Heading>
              <Heading size="xs" color="gray.600" mt="4">Bugün 13:06</Heading>
              <Heading size="sm" color="gray.700" mt="4" display="flex"><FcBusinessman /> <Text ml="2">Oğuz Yılmaz</Text></Heading>
              <Divider my="4" colorScheme="blue" />
              <Box display="flex" my="1" justifyContent={"space-between"}>
                <Text fontWeight={500} color="gray.500">Ara Toplam</Text>
                <Text fontWeight={500} color="black">123</Text>
              </Box>
              <Box display="flex" my="1" justifyContent={"space-between"}>
                <Text fontWeight={500} color="gray.500">Genel Toplam</Text>
                <Text fontWeight={500} color="black">123</Text>
              </Box>
              <Divider my="4" colorScheme="blue" />
              <Box display="flex" justifyContent={"space-between"}>
                <Text fontWeight={500} color="gray.500">Vergi Toplam</Text>
                <Text fontWeight={500} color="black">123</Text>
              </Box>
              <Divider my="4" colorScheme="blue" />
              <Box display="flex" justifyContent={"space-between"}>
                <Text fontWeight={600} color="gray.900">Toplam</Text>
                <Text fontWeight={500} color="black">123</Text>
              </Box>
            </Box>
            <Box
              m="4"
              borderRadius={4}
              bg="gray.100"
              p="4"
              w="full"
              h="full"
              flex="1">
              <Heading size="md" mb="4">Adres Bilgileri</Heading><Text fontWeight="500" color="gray.500">
               
                <Flex alignItems={"center"}><FcShipped  /><Text ml="2" color="gray.900">Teslimat Adresi</Text>
                </Flex>
                  Adana
              </Text>
              <Divider my="4" colorScheme="blue" />
              <Text fontWeight="500" color="gray.500">
               
               <Flex alignItems={"center"}><FcDocument  /><Text ml="2" color="gray.900">Fatura Adresi</Text>
               </Flex>
                 Adana
             </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
