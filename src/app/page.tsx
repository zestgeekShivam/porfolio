"use client";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import luffy from "../profile.png";
import { keyframes } from "@mui/material/styles";

const animation = keyframes`0%,
100% {
  border-radius: 30% 70% 70% 30% / 30% 52% 48% 60%;
}

10% {
  border-radius: 50% 50% 20% 80% / 25% 80% 20% 55%;
}

20% {
  border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
}

30% {
  border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;

}

40% {
  border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
}

50% {
  border-radius: 100%;
}

60% {
  border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
}

70% {
  border-radius: 50% 50% 53% 47% / 26% 22% 78% 44%;
}

80% {
  border-radius: 50% 50% 53% 47% / 26% 69% 31% 44%;
}

90% {
  border-radius: 20% 80% 20% 80% / 20% 80% 20% 40%;
}`;

const NavBar = styled(AppBar)(
  () =>
    `
  background-color:white;
  box-shadow:none;
  color:#777777;
  position:sticky;
`
);
const NavWrapper = styled(Toolbar)(
  () =>
    `
   display:flex;
   align-items:center;
   justify-content:space-between;
`
);
const NavButton = styled(Link)(
  () =>
    `
  cursor:pointer;
  white-space:nowrap;
  font-size: 13px ;
  &:focus {
    color:#010111;
  }
`
);
const SocialButton = styled(Link)(
  () =>
    `
  cursor:pointer;
  font-size: 13px ;
  white-space:nowrap;
  letter-spacing:4px;
  &:focus {
    color:#010111;
  }
`
);

const Text = styled(Typography)(
  () => `
  font-weight:300;
  letter-spacing:5px;
  white-space:nowrap;

`
);

const OutlinedButton = styled(Button)(
  () =>
    ` 
  border: 1px solid black;
  color: black;
  margin-right:1.27rem;
  align-self: end;
  &:hover {
    border: 1px solid black;
  }
`
);

const ProfilePhoto = styled(Image)({
  animation: `${animation} 30s infinite `,
});

export default function Home() {
  return (
    <Box>
      <NavBar>
        <NavWrapper>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "40px",
            }}
          >
            <NavButton href="#">WELCOME</NavButton>
            <NavButton href="#"> ABOUT ME </NavButton>
            <NavButton href="#"> CONTACT ME </NavButton>
          </Box>
          <Box>
            <OutlinedButton endIcon={<ArrowRightAltIcon />} variant="outlined">
              Hire Me
            </OutlinedButton>
          </Box>
        </NavWrapper>
      </NavBar>
      <Grid
        container
        sx={{
          height: { xs: "80vh", md: "70vh" },
        }}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        <Grid
          item
          xs={12}
          md={5}
          container
          flexDirection={"column"}
          alignContent={"center"}
          justifyContent={"center"}
          gap={1.2}
        >
          <Text variant="h3">
            <span className="font-semibold"> Hey, </span> I&apos;m Shivam
          </Text>
          <Text variant="h4" className="text-2xl">
            I&apos;m a Full Stack Developer
          </Text>
          <OutlinedButton endIcon={<ArrowRightAltIcon />} variant="outlined">
            Hire Me
          </OutlinedButton>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          container
          sx={{
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <ProfilePhoto
            src={luffy}
            alt="profile_picture"
            width={200}
            height={300}
          />
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        gap={5}
        p={{ xs: "0px", md: "55px" }}
        justifyContent={{ xs: "center", md: "start" }}
      >
        <SocialButton target="_blank" href={"https://about.gitlab.com/"}>
          GIT HUB
        </SocialButton>
        <SocialButton
          target="_blank"
          href={"https://www.linkedin.com/in/shivam-singh-84b16823a/"}
        >
          LINKEDIN
        </SocialButton>
        <SocialButton
          target="_blank"
          href={"https://leetcode.com/sivamsingh7762/"}
        >
          LEET CODE
        </SocialButton>
      </Box>
    </Box>
  );
}
