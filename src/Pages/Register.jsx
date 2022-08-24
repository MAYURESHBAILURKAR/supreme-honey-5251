import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Pages_Css/Register.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";

import axios from "axios";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `https://reqres.in/api/register`,
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        navigate("/login");
        console.log(res);
      })
      .catch((err) => {
        // alert("TRY AGAIN");
        setState(true);
        console.log(err);
      });
  };
  const handleOnClick = (a) => {
    navigate(a);
  };
  return (
    <div>
      <div className={styles.registerPage_LogoMainOutCon}>
        <div className={styles.registerPage_LogoMainCon}>
          <div className={styles.registerPage_Logodiv}>
            <img
              src="https://s1.thcdn.com/enterprise/assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg"
              alt=""
              onClick={() => handleOnClick("/")}
            />
          </div>
        </div>

        <div className={styles.registerForm_mainCont}>
          <div className={styles.registerForm}>
            <p>About You</p>
            <p
              style={{ textAlign: "left", marginTop: "30px", fontSize: "15px" }}
            >
              Sign Up With
            </p>
            <ButtonGroup
              variant="outline"
              spacing="30"
              width="100%"
              marginBottom="30px"
            >
              <Button
                borderRadius={0}
                border="1px"
                borderColor="#2E3337"
                padding="25px"
                _hover={{ backgroundColor: "#f2f2f2", border: "none" }}
                w="full"
              >
                <GrFacebook className={styles.reacticons} />
                Facebook
              </Button>
              <Button
                borderRadius={0}
                border="1px"
                borderColor="#2E3337"
                _hover={{ backgroundColor: "#f2f2f2", border: "none" }}
                padding="25px"
                w="full"
              >
                <FcGoogle className={styles.reacticons} />
                Google
              </Button>
            </ButtonGroup>
            <br />
            <hr />
            <p
              style={{ textAlign: "left", marginTop: "10px", fontSize: "15px" }}
            >
              Or create an email account
            </p>
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={state} isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Enter Full Name" />
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
                {!state ? (
                  <FormHelperText marginTop="-10px" marginBottom="20px">
                    Enter the registered Email.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Invalid Email.</FormErrorMessage>
                )}
                <FormLabel>Confirm Email address</FormLabel>
                <Input type="email" placeholder="Enter Email" />
                {!state ? (
                  <FormHelperText marginTop="-10px" marginBottom="20px">
                    Confirm Email.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Invalid Email.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={state} isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {!state.isError ? (
                  <FormHelperText marginTop="-10px" marginBottom="20px">
                    Enter the correct password.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {!state ? (
                  <FormHelperText marginTop="-10px" marginBottom="30px">
                    Confirm password.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
              </FormControl>

              <Button
                type="submit"
                backgroundColor="#2E3337"
                color="white"
                borderRadius={0}
                _hover={{ bg: "teal.600" }}
                w="full"
                marginTop="30px"
              >
                CONTINUE
              </Button>
              <p
                style={{
                  textAlign: "left",
                  marginTop: "30px",
                  fontSize: "15px",
                }}
              >
                By proceeding, you are confirming that you agree to our Terms
                and Conditions and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
