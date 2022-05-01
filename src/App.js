import React, { useState } from "react";
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
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge
} from "@chakra-ui/react";
import QrCode from 'react-qr-code'
import { useReactToPrint } from "react-to-print";
import { FcPrint, FcBusinessman, FcShipped, FcDocument } from "react-icons/fc";
import QRCode from "react-qr-code";
export default function App() {
  const [print, setPrint] = useState(false);
  const [breakpoints,setBreakpoints] = useState([null,"column", "row"]);
  const [box1,setBox1] = useState([null,"100%","75%"]);
  const [box2,setBox2] = useState([null,"100%","25%"]);
  const componentRef = React.useRef(null);
  const [activeValue,setActiveValue] = useState(null);
  const {isOpen,onClose,onOpen} = useDisclosure();
  const printPage = (e) => {
    setPrint(true);
    setBreakpoints("column")
    setBox1('100%');
    setBox2('100%')
    setTimeout(() => {
      prints(e);
    }, 500);
  };
  const prints = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => {
      setPrint(false);
      setBreakpoints([null,"column", "row"])
      setBox1([null,"100%","75%"]);
      setBox2([null,"100%","25%"])
    },
  });
  return (
    <div ref={componentRef}>
      {print === true ? (
      <Center>
        <Heading>Sipariş Detayları</Heading>
      </Center> ) : ''}
      <Flex w="full" direction={breakpoints}>
        <Box w={box1} display="block">
          <Stack
            direction="column"
            spacing={4}
            m="4"
            borderRadius={4}
            bg="gray.100"
            p="4"
          >
            <Box h="20%">
              <Flex justify={"space-between"}>
                <Box>
                  <Flex align="center">
                    <Heading size="lg">3 Ürün</Heading>
                   
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
                      <Th>#</Th>
                      <Th>Ürün</Th>
                      <Th>Fiyat</Th>
                      <Th>Toplam Tutar</Th>
                      <Th>Barkod</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td><Badge colorScheme="green">Kargolandı</Badge></Td>
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
                      <Td><QrCode onMouseEnter={e => {
                        setActiveValue('furkan');
                        onOpen()
                      }}  value="furkan" size="48"/></Td>
                    </Tr>
                    
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box h="20%">
              {print === false ? (
                <Button
                  colorScheme="blue"
                  onClick={printPage}
                  rightIcon={<FcPrint />}
                  m="2"
                >
                  Yazdır
                </Button>
              ) : (
                ""
              )}
            </Box>
          </Stack>
        </Box>
        <Box w={box2} display="block">
          <Flex direction="column">
            <Box m="4" borderRadius={4} bg="gray.100" p="4" h="full" flex="2">
              <Heading size="md">Sipariş Özeti</Heading>
              <Heading size="xs" color="gray.600" mt="4">
                Bugün 13:06
              </Heading>
              <Heading size="sm" color="gray.700" mt="4" display="flex">
                <FcBusinessman /> <Text ml="2">Oğuz Yılmaz</Text>
              </Heading>
              <Divider my="4" colorScheme="blue" />
              <Box display="flex" my="1" justifyContent={"space-between"}>
                <Text fontWeight={500} color="gray.500">
                  Ara Toplam
                </Text>
                <Text fontWeight={500} color="black">
                  123
                </Text>
              </Box>
              <Box display="flex" my="1" justifyContent={"space-between"}>
                <Text fontWeight={500} color="gray.500">
                  Genel Toplam
                </Text>
                <Text fontWeight={500} color="black">
                  123
                </Text>
              </Box>
              <Divider my="4" colorScheme="blue" />
              <Box display="flex" justifyContent={"space-between"}>
                <Text fontWeight={500} color="gray.500">
                  Vergi Toplam
                </Text>
                <Text fontWeight={500} color="black">
                  123
                </Text>
              </Box>
              <Divider my="4" colorScheme="blue" />
              <Box display="flex" justifyContent={"space-between"}>
                <Text fontWeight={600} color="gray.900">
                  Toplam
                </Text>
                <Text fontWeight={500} color="black">
                  123
                </Text>
              </Box>
            </Box>
            <Box m="4" borderRadius={4} bg="gray.100" p="4" h="full" flex="1">
              <Heading size="md" mb="4">
                Adres Bilgileri
              </Heading>
              <Text fontWeight="500" color="gray.500">
                <Flex alignItems={"center"}>
                  <FcShipped />
                  <Text ml="2" color="gray.900">
                    Teslimat Adresi
                  </Text>
                </Flex>
                Adana
              </Text>
              <Divider my="4" colorScheme="blue" />
              <Text fontWeight="500" color="gray.500">
                <Flex alignItems={"center"}>
                  <FcDocument />
                  <Text ml="2" color="gray.900">
                    Fatura Adresi
                  </Text>
                </Flex>
                Adana
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'/>
        <ModalContent>
         
          <ModalCloseButton />
          <ModalBody>
            <Center mt={4}>
            <QRCode value={activeValue}/>
            </Center>
          </ModalBody>

            <Center mb={2}><Button colorScheme='blue' mr={3} onClick={onClose}>
              Kapat
            </Button></Center>
        </ModalContent>
      </Modal>
    </div>
  );
}
