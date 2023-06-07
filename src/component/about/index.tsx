"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Skill from "./Skill";

const RoundedBox = styled(Box)((props) => ({
  height: "fit-content",
  backgroundColor: "#f5f7f7",
  borderRadius: "50px",
  overflow: "hidden",
  padding: "20px",
  margin: "20px",
  [props.theme.breakpoints.up("sm")]: {
    margin: "50px",
    height: "85vh",
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

const Text = styled(Typography)({
  marginTop: "20px",
  fontWeight: "300px",
  letterSpacing: "2px",
});

const educationDetails = [
  {
    class: "10",
    description: `In 2022, I successfully completed my <strong>10th</strong> standard at <strong> GA High School Bhagwanpur, Vaishali,</strong/>  with a passing percentage of <strong>56%</strong>. It was a formative year where I gained a solid academic foundation and valuable life skills.`,
  },
  {
    class: "11-12",
    description:
      "Started <strong>11th</strong> and <strong>12th</strong> standard in 2022 with a focus on <strong> Physics, Chemistry,</strong> and <strong>Math</strong>. Completed 11th standard in 2023 and continued into 12th at <strong>Adarsh Intermediate College</strong>, fueling my passion for STEM subjects.",
  },
  {
    class: "COLLEGE",
    description: "PENDING...",
  },
];

const AboutSection = () => {
  return (
    <>
      <RoundedBox id="aboutPage">
        <Heading variant="h3">EDUCATION</Heading>
        <Box
          height={"90%"}
          display={"flex"}
          mt={{ xs: "10px", md: "70px" }}
          justifyContent={"space-around"}
          flexDirection={{ xs: "column", md: "row" }}
        >
          {educationDetails?.map((details, i) => {
            return (
              <Box key={i} width={{ xs: "100%", md: "30%" }}>
                <SubHeading variant="h5">
                  {details.class}
                  {details.class !== "COLLEGE" ? (
                    <>
                      <sup>th</sup> STANDARD{" "}
                    </>
                  ) : null}
                </SubHeading>
                <Text
                  dangerouslySetInnerHTML={{ __html: details.description }}
                />
              </Box>
            );
          })}
        </Box>
      </RoundedBox>
      <Skill />
    </>
  );
};

export default AboutSection;
