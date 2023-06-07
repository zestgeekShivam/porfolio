"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Skill from "./Skill";
import EducationStyle from "../../app/Educatioon.module.css";
const RoundedBox = styled(Box)((props) => ({
  height: "fit-content",
  backgroundColor: "#f5f7f7",
  borderRadius: "50px",
  // overflow: "hidden",
  padding: "20px",
  margin: "20px",
  [props.theme.breakpoints.up("sm")]: {
    margin: "50px",
    height: "fit-content",
  },
}));
const Heading = styled(Typography)((props) => ({
  fontWeight: "300",
  letterSpacing: "5px",
  marginLeft: "16px",
  whiteSpace: "nowrap",
  [props.theme.breakpoints.down(430)]: {
    marginLeft: "0px",
    fontSize: "2.6rem",
    marginBottom: "20px",
  },
}));
const SubHeading = styled(Typography)((props) => ({
  fontWeight: "400",
  letterSpacing: "2px",
  whiteSpace: "nowrap",
  [props.theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },
}));

const Text = styled(Typography)((props) => ({
  letterSpacing: "3px",
  whiteSpace: "nowrap",
  [props.theme.breakpoints.down(450)]: {
    textAlign: "center",
    // fontSize: "2.5rem",
  },
}));

const Description = styled(Typography)((props) => ({
  [props.theme.breakpoints.up(900)]: {
    fontSize: "12px",
  },
  [props.theme.breakpoints.up(1100)]: {
    fontSize: "13px",
  },
}));

const educationDetails = [
  {
    class: "10",
    description: `In 2022, I completed my 10th standard at GA High School Bhagwanpur, Vaishali, with a 56% passing percentage. It provided me a strong academic foundation and valuable life skills.    .`,
    duration: "2021 - 2022",
  },
  {
    class: "11",
    description:
      "Started 11th standard in 2022, focusing on Physics, Chemistry, and Math. Completed 11th in 2023 with a strong foundation",
    duration: "2022 - 2023",
  },
  {
    class: "12",
    description:
      "Continued into 12th at Adarsh Intermediate College, fueling my passion for STEM subjects.",
    duration: "2023 - 2024",
  },
  {
    class: "COLLEGE",
    description: "PENDING...",
    duration: "2024 - 2028",
  },
];

const AboutSection = () => {
  return (
    <>
      <RoundedBox id="aboutPage">
        <Heading variant="h3">EDUCATION</Heading>
        <Grid container justifyContent={"space-around"}>
          {educationDetails?.map((details, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                md={5.5}
                // sx={}
                className={`${EducationStyle.timeline__event}  ${
                  EducationStyle.fadeInUp
                } ${EducationStyle[`timeline__event--type${i + 1}`]}`}
              >
                <Box className={EducationStyle.timeline__event__date}>
                  {details.duration}
                </Box>
                <Box className={EducationStyle.timeline__event__content}>
                  <Box className={EducationStyle.timeline__event__title}>
                    <Text>
                      {details?.class}
                      {details.class !== "COLLEGE" ? (
                        <>
                          <sup>th</sup> STANDARD{" "}
                        </>
                      ) : null}
                    </Text>
                  </Box>
                  <Box className={EducationStyle.timeline__event__description}>
                    <Description
                      dangerouslySetInnerHTML={{ __html: details.description }}
                    />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </RoundedBox>
      <Skill />
    </>
  );
};

export default AboutSection;
