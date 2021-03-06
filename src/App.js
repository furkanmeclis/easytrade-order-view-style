import React, { useState } from "react";
import { useBarcode } from "react-barcodes";
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
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  useToast,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import QrCode from "react-qr-code";
import { useReactToPrint } from "react-to-print";
import {
  FcPrint,
  FcBusinessman,
  FcDisplay,
  FcShipped,
  FcDocument,
  FcClock,
  FcLink,
  FcInTransit,
} from "react-icons/fc";
import statusHelper from "./StatusData";
import QRCode from "react-qr-code";
export default function App({ order }) {
  const toast = useToast();
  const [print, setPrint] = useState(false);
  const [ticket, setTicket] = useState(false);
  const [breakpoints, setBreakpoints] = useState([null, "column", "row"]);
  const [box1, setBox1] = useState("column");
  const [box2, setBox2] = useState([null, "100%", "25%"]);
  const componentRef = React.useRef(null);
  const [activeValue, setActiveValue] = useState(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  React.useEffect(() => {
    order.packageHistories.reverse();
  });

  const printPage = (e) => {
    setPrint(true);
    setBreakpoints("column");
    setBox1("row");
    setBox2("100%");
    setTimeout(() => {
      prints(e);
    }, 500);
  };
  const printTicket = (e) => {
    setPrint(true);
    setTicket(true);
    setBreakpoints("column");
    setBox1("row");
    setBox2("100%");
    setTimeout(() => {
      prints(e);
    }, 500);
  };
  const prints = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => {
      setPrint(false);
      setTicket(false);
      setBreakpoints([null, "column", "row"]);
      setBox1("column");
      setBox2([null, "100%", "25%"]);
    },
  });
  const Barcode = () => {
    const { inputRef } = useBarcode({
      value: order.cargoTrackingNumber,
      options: {
        background: "#EDF2F7",
        displayValue: true,
        height: 32,
        width: 1,
      },
    });
    return (
      <>
        <canvas ref={inputRef} />
      </>
    );
  };
  return (
    <div ref={componentRef}>
      {print === true ? (
        <Center>
          <Heading>Sipari?? Detaylar??</Heading>
        </Center>
      ) : (
        ""
      )}
      <Flex w="full" direction={breakpoints}>
        <Box w={[null, "100%", "75%"]} display="block" hidden={print}>
          <Flex direction="column">
            <Stack
              direction="column"
              spacing={4}
              m="4"
              borderRadius={4}
              bg="gray.100"
              p="4"
            >
              <Box h="20%">
                <Flex justify={"space-between"} alignItems="center">
                  <Box>
                    <Flex align="center">
                      <Heading size="lg" mr="2">
                        {order.lines.length} ??r??n
                      </Heading>
                      <Badge
                        size="lg"
                        colorScheme={
                          statusHelper.getStatus(order.shipmentPackageStatus)
                            .colorScheme
                        }
                      >
                        {
                          statusHelper.getStatus(order.shipmentPackageStatus)
                            .text
                        }
                      </Badge>
                    </Flex>
                  </Box>
                  <Box>
                    <QrCode
                      bgColor="var(--chakra-colors-gray-100)"
                      value={order.id}
                      size="64"
                      onClick={(e) => {
                        setActiveValue(order.id);
                        onOpen();
                      }}
                      title={"G??nderi Paket Kimli??i"}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box h="60%">
                <TableContainer bg="white" borderRadius="md">
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>
                          <Center>Durum</Center>
                        </Th>
                        <Th>
                          <Center>??r??n</Center>
                        </Th>
                        <Th>
                          <Center>Adet</Center>
                        </Th>
                        <Th>
                          <Center>Fiyat(Birim)</Center>
                        </Th>
                        <Th>
                          <Center>Toplam({order.currencyCode})</Center>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {order.lines.map((line) => {
                        return (
                          <Tr>
                            <Td>
                              <Badge
                                colorScheme={
                                  statusHelper.getStatus(
                                    line.orderLineItemStatusName
                                  ).colorScheme
                                }
                              >
                                <Center>
                                  {
                                    statusHelper.getStatus(
                                      line.orderLineItemStatusName
                                    ).text
                                  }
                                </Center>
                              </Badge>
                            </Td>
                            <Td>
                              <Center>
                                <Flex direction="column">
                                  <Box>
                                    <Heading size="xs">
                                      {line.productName.substring(0, 20)}
                                      {line.productName.length > 20
                                        ? "..."
                                        : ""}
                                    </Heading>
                                  </Box>
                                  <Box>
                                    <Text size="xs" color="gray.500">
                                      {line.sku}-{line.productSize}
                                    </Text>
                                  </Box>
                                </Flex>
                              </Center>
                            </Td>
                            <Td>
                              <Center>{line.quantity}</Center>
                            </Td>
                            <Td>
                              <Center>
                                {line.price} {line.currencyCode}
                              </Center>
                            </Td>
                            <Td>
                              <Center>
                                {Math.round(line.price * line.quantity)}{" "}
                                {line.currencyCode}
                              </Center>
                            </Td>
                          </Tr>
                        );
                      })}
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
                    Yazd??r
                  </Button>
                ) : (
                  ""
                )}{" "}
                {print === false ? (
                  <Button
                    colorScheme="orange"
                    onClick={printTicket}
                    rightIcon={<FcInTransit />}
                    m="2"
                  >
                    Kargo Etiketi Yazd??r
                  </Button>
                ) : (
                  ""
                )}
              </Box>
            </Stack>
            <Box m="4" borderRadius={4} bg="gray.100" p="4">
              <Heading size="md" mb="4">
                Sipari?? Ge??mi??i
              </Heading>
              <TableContainer bg="white" borderRadius="md">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Durum</Th>
                      <Th>Tarih</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {order.packageHistories.map((e) => {
                      return (
                        <Tr>
                          <Td>
                            <Badge
                              colorScheme={
                                statusHelper.getStatus(e.status).colorScheme
                              }
                            >
                              {statusHelper.getStatus(e.status).text}
                            </Badge>
                          </Td>
                          <Td>{new Date(e.createdDate).toLocaleString()}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        </Box>
        <Box w={box2} display="block">
          <Flex direction={box1}>
            <Box m="4" flex="1" borderRadius={4} bg="gray.100" p="4" h="full">
              <Heading size="md">Sipari?? ??zeti</Heading>
              <Heading size="xs" color="gray.600" mt="4">
                {new Date(order.orderDate).toLocaleDateString()}
              </Heading>
              <Heading size="sm" color="gray.700" mt="4" display="flex">
                <FcBusinessman />{" "}
                <Text ml="2">
                  {order.customerFirstName} {order.customerLastName}
                </Text>
              </Heading>
              <Divider my="4" colorScheme="blue" />
              <Box display="flex" my="1" justifyContent={"space-between"}>
                <Text fontWeight={500} color="gray.500">
                  Ara Toplam
                </Text>
                <Text fontWeight={500} color="black">
                  {order.grossAmount} {order.currencyCode}
                </Text>
              </Box>

              <Divider my="4" colorScheme="blue" />
              <Box display="flex" justifyContent={"space-between"}>
                <Text fontWeight={600} color="gray.900">
                  Toplam
                </Text>
                <Text fontWeight={500} color="black">
                  {order.totalPrice} {order.currencyCode}
                </Text>
              </Box>

              
              <Box hidden={!ticket}>
                <Divider my="4" colorScheme="blue" />
                <Flex
                  my="1"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Text fontWeight={600} color="gray.900">
                    Sipari?? No
                  </Text>
                  <Text>{order.id}</Text>
                </Flex>
                <Divider my="4" colorScheme="blue" />
                <Flex
                  my="1"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Text fontWeight={600} color="gray.900">
                    Kargo Takip No
                  </Text>
                  <Barcode />
                </Flex>
              </Box>
            </Box>
            <Box
              m="4"
              flex="1"
              hidden={ticket}
              borderRadius={4}
              bg="gray.100"
              p="4"
              h="full"
            >
              <Heading size="md" mb="4">
                Teslimat Bilgileri
              </Heading>

              {order.cargoTrackingLink !== undefined ? (
                <>
                  <Flex
                    fontWeight="500"
                    justifyContent={"space-between"}
                    color="gray.500"
                    hidden={print}
                  >
                    <Flex alignItems={"center"}>
                      <FcLink />
                      <Text ml="2" color="gray.900">
                        Kargo Takip
                      </Text>
                    </Flex>
                    <QrCode
                      bgColor="var(--chakra-colors-gray-100)"
                      onClick={(e) => {
                        navigator.clipboard.writeText(order.cargoTrackingLink);
                        toast({
                          description: "Kargo Takip Linki Panoya Kopyaland??",

                          status: "success",
                          duration: 12000,
                          isClosable: true,
                        });
                        setActiveValue(order.cargoTrackingLink);
                        onOpen();
                      }}
                      value={order.cargoTrackingLink}
                      size="64"
                      title={order.cargoTrackingNumber}
                    />
                  </Flex>
                  <Divider hidden={print} my="4" colorScheme="blue" />
                  <Text hidden={!print} fontWeight="500" color="gray.500">
                    <Flex alignItems={"center"}>
                      <FcInTransit />
                      <Text ml="2" color="gray.900">
                        Kargo Firmas??
                      </Text>
                    </Flex>
                    {order.cargoProviderName}
                  </Text>
                  <Divider hidden={!print} my="4" colorScheme="blue" />
                  <Text hidden={!print} fontWeight="500" color="gray.500">
                    <Flex alignItems={"center"}>
                      <FcDisplay />
                      <Text ml="2" color="gray.900">
                        Takip Numaras??
                      </Text>
                    </Flex>
                    <Center>
                      <Barcode />
                    </Center>
                  </Text>
                  <Divider hidden={!print} my="4" colorScheme="blue" />
                </>
              ) : (
                ""
              )}
              <Text fontWeight="500" color="gray.500">
                <Flex alignItems={"center"}>
                  <FcClock />
                  <Text ml="2" color="gray.900">
                    Tahmini Teslim Tarihi
                  </Text>
                </Flex>
                {new Date(order.agreedDeliveryDate).toLocaleDateString()}
              </Text>
              <Divider my="4" colorScheme="blue" />
              <Text fontWeight="500" color="gray.500">
                <Flex alignItems={"center"}>
                  <FcShipped />
                  <Text ml="2" color="gray.900">
                    Teslimat Adresi
                  </Text>
                </Flex>
                {order.shipmentAddress.fullAddress}
              </Text>
              <Divider my="4" colorScheme="blue" />
              <Text fontWeight="500" color="gray.500">
                <Flex alignItems={"center"}>
                  <FcDocument />
                  <Text ml="2" color="gray.900">
                    Fatura Adresi
                  </Text>
                </Flex>
                {order.invoiceAddress.fullAddress}
              </Text>
            </Box>
            {ticket && <Box flex="3" /> }
          </Flex>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Center mt={4}>
              <QRCode value={activeValue} />
            </Center>
          </ModalBody>

          <Center mb={2}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Kapat
            </Button>
          </Center>
        </ModalContent>
      </Modal>
    </div>
  );
}
