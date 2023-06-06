import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../../app/skill.module.css";
// import luffy from "../../profile.png";
import javaScript from "../../assets/image/javaScript.jpeg";
import TypeScript from "../../assets/image/typescript2.svg";
import ReactIMG from "../../assets/image/react.jpeg";
import NExtIMG from "../../assets/image/next2.png";
import NodeIMG from "../../assets/image/nodeJs.jpeg";
import htmlIMG from "../../assets/image/html5.png";
import CssIMG from "../../assets/image/css3.png";
import GraphQl from "../../assets/image/graphql4.png";
import NestJs from "../../assets/image/nestjs.png";
const RoundedBox = styled(Box)((props) => ({
  height: "fit-content",
  backgroundColor: "#f5f7f7",
  borderRadius: "50px",
  overflow: "hidden",
  padding: "20px",
  margin: "20px",
  // [props.theme.breakpoints.up("sm")]: {
  //   margin: "50px",
  //   height: "85vh",
  // },
}));
const Heading = styled(Typography)({
  fontWeight: "300",
  letterSpacing: "5px",
  margin: "40px 20px ",
});
const SkillLogo = styled(Image)({
  width: "100%",
  height: "fitContent",
  objectFit: "fill",
});

const skills = [
  {
    card: "card-left",
    image: javaScript,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "1 YEAR",
  },
  {
    card: "card-top",
    image: ReactIMG,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "1 YEAR",
  },
  {
    card: "card-right",
    image: NodeIMG,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "3-4 MONTHS ",
  },
  {
    card: "card-top",
    image: NExtIMG,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "6 MONTHS",
  },
  {
    card: "card-top",
    image: TypeScript,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "6 MONTHS",
  },
  {
    card: "card-top",
    image: htmlIMG,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "1 YEAR",
  },
  {
    card: "card-right",
    image: CssIMG,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "1 YEAR",
  },
  {
    card: "card-right",
    image: GraphQl,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "6 MONTHS",
  },
  {
    card: "card-left",
    image: NestJs,
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    experience: "6 MONTHS",
  },
];

const Skill = () => {
  const getExperienceClassName = (card: string) => {
    if (card === "card-left") {
      return styles["left-card-experience"];
    } else if (card === "card-right") {
      return styles["right-card-experience"];
    } else {
      return styles["top-card-experience"];
    }
  };

  return (
    <RoundedBox className={styles["global-style"]}>
      <Heading ml={2} variant="h3">
        TECH STACK
      </Heading>
      <Box className={styles.container}>
        {skills?.map((cardDetails, i) => {
          const { card, image, cardText, experience } = cardDetails || {};
          return (
            <Box key={i} className={`${styles[card]}`}>
              <Box className={styles["card-image"]}>
                <SkillLogo alt="skill_logo" src={image} />
              </Box>
              <Box
                className={
                  styles["card-text"] +
                  " " +
                  `${
                    card !== "card-top"
                      ? styles.rightLeftCardText
                      : styles.topCardText
                  }`
                }
              >
                <Typography className={getExperienceClassName(card)}>
                  {experience}
                </Typography>
                <Typography
                  className={card == "card-top" ? styles.marginT : ""}
                >
                  {cardText}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </RoundedBox>
  );
};

export default Skill;
