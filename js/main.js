import "../css/tailwind.css";
import "../css/style.css";
import "../css/jacket-font.css";

// No it's not JQuery
const $ = document.querySelector.bind(document);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

window.onload = function () {
  $("#hello-svg").style.display = "block";
};

// * Scroll Trigger *//

ScrollTrigger.create({
  trigger: "#pin-1",
  start: 0,
  end: 1600,
  pin: true,
  pinSpacing: false,
  onUpdate: (self) => {
    $("#hello").style.opacity = self.progress * 5 - 2;
    // set stroke-dashoffset to - 1859.777587890625 * (1 - self.progress)
    $("#hello").style.strokeDashoffset =
      1859.777587890625 * (1 - self.progress);
    // translate #hello-svg from 40vh to 0vh
    const vw = window.innerWidth / 100;
    $("#hello-svg").style.transform = `translateX(${
      0.01 + (vw * 40 - (80 * vw * 7.5) / 480) * (1 - self.progress)
    }px)`;
    // hide the scroll indicator after 20%
    $("#scroll-indicator-div").children[0].style.opacity =
      self.progress > 0.1 ? 0 : 1 - 10 * self.progress;
  },
  onLeave: (self) => {
    $("#pin-1").style.transform = `translateY(1600px)`;
    $("#hello").style.strokeDashoffset = 0;
  },
});

ScrollTrigger.create({
  trigger: "#intro",
  start: "top bottom",
  end: "bottom top",
  // pin: "#intro-text",
  onUpdate: (self) => {
    // ease div opacity using -4\left(x-0.5\right)^{2}+1
    const ease = -16 * (self.progress - 0.5) * (self.progress - 0.5) + 1;
    $("#intro").style.opacity = ease;
  },
});

ScrollTrigger.create({
  trigger: "#interests",
  start: "top center",
  end: "bottom center",
  pin: false,
  onUpdate: (self) => {
    // ease div opacity using -4\left(x-0.5\right)^{2}+1
    const ease = -2 * (self.progress - 0.5) * (self.progress - 0.5) + 1;
    $("#interests").style.opacity = ease;
  },
});

ScrollTrigger.create({
  trigger: "#developer-link",
  start: "top bottom",
  end: "bottom center",
  pin: false,
  onUpdate: (self) => {
    // fly in from left
    const vw = window.innerWidth / 100;
    $("#developer-link").style.transform = `translateX(${
      vw * 40 * (1 - self.progress)
    }px)`;
    // set opacity from 0 to 1
    $("#developer-link").style.opacity = self.progress;
  },
});

ScrollTrigger.create({
  trigger: "#journalist-link",
  start: "top bottom",
  end: "bottom center",
  pin: false,
  onUpdate: (self) => {
    // fly in from left
    const vw = window.innerWidth / 100;
    $("#journalist-link").style.transform = `translateX(${
      0.01 + vw * 40 * (1 - self.progress)
    }px)`;
    // set opacity from 0 to 1
    $("#journalist-link").style.opacity = self.progress;
  },
});

ScrollTrigger.create({
  trigger: "#cyclist-link",
  start: "top bottom",
  end: "bottom center",
  pin: false,
  onUpdate: (self) => {
    // fly in from left
    const vw = window.innerWidth / 100;
    $("#cyclist-link").style.transform = `translateX(${
      0.01 + vw * 40 * (1 - self.progress)
    }px)`;
    // set opacity from 0 to 1
    $("#cyclist-link").style.opacity = self.progress;
  },
});

ScrollTrigger.create({
  trigger: "#worked",
  start: "top center",
  end: "bottom top",
  pin: false,
  onUpdate: (self) => {
    // ease div opacity using -4\left(x-0.5\right)^{2}+1
    const ease = -2 * (self.progress - 0.5) * (self.progress - 0.5) + 1;
    $("#worked").style.opacity = ease;
  },
});

ScrollTrigger.create({
  trigger: "#big-text",
  start: "center center",
  end: "+=100%",
  pin: true,
  pinType: "fixed",
  onUpdate: (self) => {
    console.log(self.progress);
    // scale from center
    $("#big-text").style.transform = `scale(${
      1 + 140 * (self.progress * self.progress)
    })`;
  },
  onEnter: (self) => {
    document.body.classList.remove("transition-colors", "duration-300");
  },
  onLeave: (self) => {
    $("#small-text-wrapper").classList.remove("text-white", "dark:text-black");
    $("#small-text-wrapper").classList.add("text-black", "dark:text-white");
    toggleDarkMode();
    // delay by 1 event loop
    setTimeout(() => {
      document.body.classList.add("transition-colors", "duration-300");
    }, 0);
  },
  onEnterBack: (self) => {
    $("#small-text-wrapper").classList.remove("text-black", "dark:text-white");
    $("#small-text-wrapper").classList.add("text-white", "dark:text-black");
    document.body.classList.remove("transition-colors", "duration-300");
    toggleDarkMode();
  },
  onLeaveBack: (self) => {
    document.body.classList.add("transition-colors", "duration-300");
  },
});

ScrollTrigger.create({
  trigger: "#small-text",
  start: "center 80%",
  end: "center top",
  pin: false,
  onUpdate: (self) => {
    // stretch font inwards
    $("#small-text").style.transform = `scale(${1 - self.progress * 0.7},1)`;
  },
});

ScrollTrigger.create({
  trigger: "#fun",
  start: "top center",
  end: "bottom center",
  pin: false,
  onUpdate: (self) => {
    // ease div opacity using -4\left(x-0.5\right)^{2}+1
    const ease = -2 * (self.progress - 0.5) * (self.progress - 0.5) + 1;
    $("#fun").style.opacity = ease;
  },
});

ScrollTrigger.create({
  trigger: "#contact",
  start: "top center",
  end: "bottom center",
  pin: false,
  onUpdate: (self) => {
    // ease div opacity using -4\left(x-0.5\right)^{2}+1
    const ease = -2 * (self.progress - 0.5) * (self.progress - 0.5) + 1;
    $("#contact").style.opacity = ease;
  },
});

// * Fun! *//
var funCount = 0;
$("#fun").addEventListener("click", () => {
  funCount++;
  // launch a few confetti from the left edge
  confetti({
    particleCount: 25,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 25,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  });
  if (funCount == 5) {
    $("#super-confetti-button").style.opacity = 1;
    $("#super-confetti-button").style.transform = "translateY(0)";
    setTimeout(() => {
      const x =
        ($("#super-confetti-button").getBoundingClientRect().x +
          $("#super-confetti-button").getBoundingClientRect().width / 2) /
        window.innerWidth;
      const y =
        ($("#super-confetti-button").getBoundingClientRect().y +
          $("#super-confetti-button").getBoundingClientRect().height / 2) /
        window.innerHeight;
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        zIndex: -1,
        origin: {
          x: x,
          // since they fall down, start a bit higher than random
          y: y,
        },
      });
    }, 300);
  }
});

var numClicks = 0;

$("#super-confetti-button").addEventListener("click", () => {
  numClicks++;
  // get center x and y of the button
  const x =
    ($("#super-confetti-button").getBoundingClientRect().x +
      $("#super-confetti-button").getBoundingClientRect().width / 2) /
    window.innerWidth;
  const y =
    ($("#super-confetti-button").getBoundingClientRect().y +
      $("#super-confetti-button").getBoundingClientRect().height / 2) /
    window.innerHeight;
  for (let i = 0; i < numClicks; i++) {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
  }
});

// * Translate Contact Button Based on Mouse Position *//
addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  // get center of #contact-button
  const xCenter =
    ($("#contact-button").getBoundingClientRect().x +
      $("#contact-button").getBoundingClientRect().width / 2) /
    window.innerWidth;
  const yCenter =
    ($("#contact-button").getBoundingClientRect().y +
      $("#contact-button").getBoundingClientRect().height / 2) /
    window.innerHeight;

  // set dist to x-xCenter unless it's > 1, then set it to 1
  const xDist =
    Math.abs(x - xCenter) > 1 ? Math.sign(x - xCenter) : x - xCenter;
  const yDist =
    Math.abs(y - yCenter) > 1 ? Math.sign(y - yCenter) : y - yCenter;

  // translate the button towards the mouse, but don't go too far using percent = =-0.9^{(y-yCenter)}+1
  $("#contact-button").style.transform = `translate(${xDist * 50}%, ${
    yDist * 50
  }%)`;
});
