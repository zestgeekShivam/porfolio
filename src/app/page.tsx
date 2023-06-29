"use client";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import luffy from "../profile.png";
import { keyframes } from "@mui/material/styles";
import AboutSection from "@/component/about";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import welcomePageStyle from "./welcomePage.module.css";
import {
  handleDOMContentLoaded,
  scrollFunction,
  handleScrollToElement,
} from "../utils/welcomePage/index";
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
const NavButton = styled("span")(
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
  color:#777777;
  &:focus {
    color:#000111;
  };
  &:hover {
    color:#111111 !important ;
  }
`
);

const Text = styled(Typography)((props) => ({
  fontWeight: 300,
  letterSpacing: "5px",
  whiteSpace: "nowrap",
  [props.theme.breakpoints.down(450)]: {
    textAlign: "center",
    fontSize: "2.5rem",
  },
}));
const SubText = styled(Typography)((props) => ({
  fontWeight: 300,
  letterSpacing: "5px",
  whiteSpace: "nowrap",
  fontSize: "1.5rem",
  [props.theme.breakpoints.down(450)]: {
    textAlign: "center",
    fontSize: "1.3rem ",
  },
}));

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
const ListText = styled(ListItemText)(
  () => `
  font-weight:300;
  letter-spacing: 3px;
`
);

const ProfilePhoto = styled(Image)({
  animation: `${animation} 25s infinite `,
});

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    scrollFunction();
    if (document.readyState === "complete") {
      handleDOMContentLoaded();
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    }
    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);
  return (
    <Box>
      <Box
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          position: "sticky",
          top: "0px",
        }}
      >
        <MenuIcon
          sx={{
            display: { xs: "block", sm: "none" },
            fontSize: "30px",
            margin: "10px",
          }}
        />
      </Box>
      <NavBar
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <NavWrapper>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "40px",
            }}
          >
            <NavButton
              className="welcomePage"
              onClick={() => handleScrollToElement("welcomePage")}
            >
              WELCOME
            </NavButton>
            <NavButton
              className="aboutPage"
              onClick={() => handleScrollToElement("aboutPage")}
            >
              {" "}
              ABOUT ME{" "}
            </NavButton>
            <NavButton> CONTACT ME </NavButton>
          </Box>
          <Box>
            <OutlinedButton endIcon={<ArrowRightAltIcon />} variant="outlined">
              HIRE ME
            </OutlinedButton>
          </Box>
        </NavWrapper>
      </NavBar>
      <div id="welcomePage">
        <div className={welcomePageStyle.cursor} id="cursoor"></div>
        <Grid
          id="welcomePageContainer"
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
            xs={10}
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
            <SubText variant="h4">I&apos;m a Full Stack Developer</SubText>
            <OutlinedButton
              id="resumeBtn"
              className="btn"
              endIcon={<ArrowRightAltIcon />}
              variant="outlined"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/17qWKA0GC2SqyDYHSVoPiObV9oGsdvCfs/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              RESUME
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
              priority={true}
              loading="eager"
              src={luffy}
              alt="profile_picture"
              width={200}
              height={300}
            />
          </Grid>
        </Grid>
        <Box
          display={"flex"}
          gap={{ xs: 3, md: 5 }}
          p={{ xs: "0px", md: "55px" }}
          justifyContent={{ xs: "center", md: "start" }}
        >
          <SocialButton
            target="_blank"
            href={"https://github.com/zestgeekShivam"}
          >
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
      </div>

      <Drawer
        sx={{
          width: "100%",
        }}
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: "100%",
            minWidth: 260,
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
      <AboutSection />
    </Box>
  );
}
