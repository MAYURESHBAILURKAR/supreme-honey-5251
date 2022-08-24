import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { BsHandbag } from "react-icons/bs";
import styles from "./WhatpeopleArebuyingSec.module.css";

const WhatpeopleArebuyingSec = () => {
  const WhatpeopleArebuyingSecProd = [
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/13927356-2104980626498655.jpg",
      title: "SkinCeuticals Anti-Aging Hyaluronic Acid Set ($242 Value)",
      price: 212.96,
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/12596429-3594871019700125.jpg",
      title: "SkinMedica TNS Advanced+ Serum 1oz",
      price: 265.5,
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg",
      title: "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (1.7oz)",
      price: 91.5,
    },
    {
      imageUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/13339906-1564915031255922.jpg",
      title: "Revision Skincare D.E.J eye cream 0.5 oz.",
      price: 109.0,
    },
  ];

  return (
    <div className={styles.WhatPeopleBuy_mainCont}>
      <div>
        <p>Shop by Category</p>
      </div>
      <div className={styles.WhatPeopleBuy_ProdDiv}>
        <Flex justify="space-between" alignItems="center">
          {WhatpeopleArebuyingSecProd.map((el) => {
            return (
              <div key={el.title}>
                <div
                  key={el.imageUrl}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={el.imageUrl} alt="" width="70%" />
                </div>
                <div className={styles.WhatPeopleBuy_ProdPriceDiv}>
                  <p>{el.title}</p>
                  <p>{`$ ${el.price}`}</p>
                </div>
                <div className={styles.WhatPeopleBuy_BtnDiv}>
                  <Button
                    colorScheme="blue"
                    borderRadius={0}
                    bg="#2E3337"
                    border="1px"
                    borderColor="#2E3337"
                    color="white"
                    _hover={{ bg: "teal.300" }}
                    size="sm"
                    padding="20px 10px"
                    marginTop="15px"
                    w="full"
                  >
                    <BsHandbag
                      style={{ marginRight: "10px", color: "white" }}
                    />
                    SHOP NOW
                  </Button>
                </div>
              </div>
            );
          })}
        </Flex>
      </div>
    </div>
  );
};

export default WhatpeopleArebuyingSec;
