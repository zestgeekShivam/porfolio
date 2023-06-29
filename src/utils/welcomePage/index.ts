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

export const handleDOMContentLoaded = () => {
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
      isContainer && !resumeBtn?.contains(target) ? "block" : "none";
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

export const scrollFunction = () => {
  const sections: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");
  const navLi: NodeListOf<HTMLElement> = document.querySelectorAll(
    "span.welcomePage , span.aboutPage"
  );
  window.onscroll = () => {
    var current: string | null = "welcomePage";
    sections.forEach((section) => {
      const sectionTop: number = section.offsetTop;
      if (pageYOffset >= sectionTop - 30) {
        if (pageYOffset >= 630) {
          current = "aboutPage";
        } else if (pageYOffset < 630) {
          current = "welcomePage";
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
};

export const handleScrollToElement = (elementId: string) => {
  const element: HTMLElement | null = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
