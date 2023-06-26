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

const handleScrollToAbout = () => {
  const element: HTMLElement | null = document.getElementById("aboutPage");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

const calculateRotate = (elem: HTMLDivElement, to: any): number => {
  const offset = elem.getBoundingClientRect();
  const toOffset = to.getBoundingClientRect();
  const center = {
    x: offset.left + elem.offsetWidth / 2,
    y: offset.top + elem.offsetHeight / 2,
  };
  const toCenter = {
    x: toOffset.left + to.offsetWidth / 2,
    y: toOffset.top + to.offsetHeight / 2,
  };
  const radians = Math.atan2(toCenter.x - center.x, toCenter.y - center.y);
  const degree = radians * (180 / Math.PI) * -1 + 180;
  return degree;
};

const handleDOMContentLoaded = () => {
  const container: HTMLElement | null = document.getElementById(
    "welcomePageContainer"
  );
  const resumeBtn: HTMLElement | null = document.getElementById("resumeBtn");
  const element: HTMLElement | null = document.querySelector(".btn");

  if (!container || !element) return;

  const cursor: HTMLElement | null = document.getElementById("cursoor");
  if (!cursor) return;

  cursor.innerHTML =
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><polygon fill="#FFFFFF" points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "/><polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "/><rect x="12.5" y="13.6" transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)" width="2" height="8"/><polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "/></svg>';
  container.appendChild(cursor);

  container.style.cursor = "none";

  const handleMouseMove = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isContainer = container.contains(target);
    cursor.style.display =
      isContainer && resumeBtn !== target ? "block" : "none";
    cursor.style.setProperty("--x", e.pageX + "px");
    cursor.style.setProperty("--y", e.pageY + "px");
    cursor.style.setProperty(
      "--r",
      calculateRotate(cursor as HTMLDivElement, element) + 20 + "deg"
    );
  };

  document.addEventListener("mousemove", handleMouseMove);

  return () => {
    // Clean up the event listener
    document.removeEventListener("mousemove", handleMouseMove);
  };
};

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("div");
    const navLi = document.querySelectorAll("a");
    window.onscroll = () => {
      var current: string | null = "welcomePage";
      sections.forEach((section) => {
        const sectionTop: number = section.offsetTop;
        if (pageYOffset >= sectionTop - 30) {
          if (pageYOffset > 680) {
            current = "aboutPage";
          } else {
            current = section.getAttribute("id") || current;
          }
        }
      });
      navLi.forEach((li) => {
        if (li.classList.contains(current as string)) {
          li.style.color = "black";
        } else {
          li.style.color = "#777777";
        }
      });
    };

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
            <NavButton className="welcomePage" href="#">
              WELCOME
            </NavButton>
            <NavButton
              href=""
              className="aboutPage"
              onClick={handleScrollToAbout}
            >
              {" "}
              ABOUT ME{" "}
            </NavButton>
            <NavButton href="#"> CONTACT ME </NavButton>
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
