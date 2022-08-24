import { Search2Icon } from "@chakra-ui/icons";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsMinecartLoaded } from "react-icons/bs";

import {
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "./NavBar.module.css";

import { useNavigate } from "react-router-dom";
import NavBarMenu from "./NavBarMenu";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const [state, dispatch ,handleLogout]=useContext(AuthContext)
  const navigate = useNavigate();

  const handleOnClick = (a) => {
    navigate(a);
  };
  console.log(state)
  return (
    <div className={styles.NavMainCont}>
      <div className={styles.NavInnerCont}>
        <div className={styles.NavLogodiv}>
          <img
            src="https://s1.thcdn.com/enterprise/assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg"
            alt=""
            onClick={() => handleOnClick("/")}
          />
        </div>
        <div className={styles.NavInputdiv}>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon />}
            />
            <Input type="tel" placeholder="Search for a product ot brand..." />
          </InputGroup>
        </div>
        <div className={styles.Nav_Acc_Cart_div}>
          <div className={styles.Nav_Acc_div}>
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Button bg="white" _hover={{ bg: "#F2F2F2" }}>
                  <MdOutlineAccountCircle size="22px" />
                  Account
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Login / Register</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody bg="#F2F2F2">

                    {state.isAuth?<Stack direction="column" spacing={4}>
                      <Button
                        backgroundColor="#2E3337"
                        color="white"
                        borderRadius={0}
                        _hover={{ bg: "teal.600" }}
                        onClick={handleLogout}
                      >
                        LOGOUT
                      </Button>
                    </Stack>:<Stack direction="column" spacing={4}>
                      <Button
                        backgroundColor="#2E3337"
                        color="white"
                        borderRadius={0}
                        _hover={{ bg: "teal.600" }}
                        onClick={() => handleOnClick("/login")}
                      >
                        LOGIN
                      </Button>
                      <Button
                        colorScheme="blue"
                        borderRadius={0}
                        bg="white"
                        border="1px"
                        borderColor="#2E3337"
                        color="#2E3337"
                        _hover={{ bg: "teal.50" }}
                        onClick={() => handleOnClick("/register")}
                      >
                        REGISTER
                      </Button>
                    </Stack>}



                    {/* <Stack direction="column" spacing={4}>
                      <Button
                        backgroundColor="#2E3337"
                        color="white"
                        borderRadius={0}
                        _hover={{ bg: "teal.600" }}
                        onClick={() => handleOnClick("/login")}
                      >
                        LOGIN
                      </Button>
                      <Button
                        colorScheme="blue"
                        borderRadius={0}
                        bg="white"
                        border="1px"
                        borderColor="#2E3337"
                        color="#2E3337"
                        _hover={{ bg: "teal.50" }}
                        onClick={() => handleOnClick("/register")}
                      >
                        REGISTER
                      </Button>
                    </Stack> */}
                  </PopoverBody>
                  <PopoverFooter>
                    <Stack direction="column" spacing={4}>
                      <Text>Wishlist</Text>
                      <Text>Your Order</Text>
                      <Text>Your Referrals</Text>
                    </Stack>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
          <div className={styles.Nav_Cart_div}>
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Button bg="white" _hover={{ bg: "#F2F2F2" }}>
                  <BsMinecartLoaded size="22px" />
                  Cart
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Cart</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Stack direction="column" spacing={4}>
                      <Text>There are currently no items in your Cart</Text>
                    </Stack>
                  </PopoverBody>
                  <PopoverFooter>
                    <Stack direction="column" spacing={4}>
                      {/* <Text>There are currently no items in your Cart</Text> */}
                    </Stack>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
        </div>
      </div>
      <div className="NavHr">
        <hr style={{ border: "1px solid #333" }} />
      </div>
      <div>{/* <NavBarMenu /> */}</div>
    </div>
  );
};
export default Navbar;
