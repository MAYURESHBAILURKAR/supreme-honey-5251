import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function ProductPageModal({ isOpen, setIsOpen, item }) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const onClose = () => {
    setIsOpen(false);
  };
  console.log(item);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Added to Your Cart</ModalHeader>
          <ModalHeader>{item.productBlock_productName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <div>
                <img src={item.imageURL} alt="" />
              </div>
              <div>
                <p>{`$ ${item.productBlock_priceValue}`}</p>
              </div>
            </div>
            <div>
              <div>
                <p>Subtotal:</p>
                (1 item in Your Cart)
              </div>
              <div>
                <p>{`$ ${item.productBlock_priceValue}`}</p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductPageModal;
