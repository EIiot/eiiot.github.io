import '../css/tailwind.css';
import '../css/style.css';
import '../css/jacket-font.css'

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// localStorage.removeItem('theme')

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}

window.onload = function() {
  document.querySelector('#hello-svg').style.display = 'block';
};

function convertRemToPixels(rem) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// * Scroll Trigger *//

ScrollTrigger.create({
  trigger: "#pin-1",
  start: 0,
  end: 1600,
  pin: true,

  onUpdate: self => {
    // set stroke-dashoffset to - 1859.777587890625 * (1 - self.progress)
    document.querySelector('#hello').style.strokeDashoffset = (1859.777587890625 * (1 - self.progress));
    // translate #hello-svg from 40vh to 0vh
    const vw = window.innerWidth/ 100;
    document.querySelector('#hello-svg').style.transform = `translateX(${0.01 + (vw * 40 * (1 - self.progress))}px)`;
  },
  onLeave: self => {
    document.querySelector('#pin-1').style.transform = `translateY(1600px)`;
    document.querySelector('#hello').style.strokeDashoffset = 0;
  },
});

ScrollTrigger.create({
  trigger: "#intro",
  start: "top bottom",
  end: "bottom top",
  pin: false,
  onUpdate: self => {
    console.log(self.progress)
    // ease div opacity using -4\left(x-0.5\right)^{2}+1
    const ease = -16 * (self.progress - 0.5) * (self.progress - 0.5) + 1;
    document.querySelector('#intro').style.opacity = ease;
  },
})

ScrollTrigger.create({
  trigger: "#interests",
  start: "top center",
  end: "bottom center",
  pin: false,
  onUpdate: self => {
    // ease div opacity using -4\left(x-0.5\right)^{2}+1
    const ease = -2 * (self.progress - 0.5) * (self.progress - 0.5) + 1;
    document.querySelector('#interests').style.opacity = ease;
  },
})

ScrollTrigger.create({
  trigger: "#developer-link",
  start: 'top bottom',
  end: 'bottom center',
  pin: false,
  onUpdate: self => {
    // fly in from left
    const vw = window.innerWidth/ 100;
    document.querySelector('#developer-link').style.transform = `translateX(${(vw * 40 * (1 - self.progress))}px)`;
    // set opacity from 0 to 1
    document.querySelector('#developer-link').style.opacity = self.progress;
  }
});

ScrollTrigger.create({
  trigger: "#journalist-link",
  start: 'top bottom',
  end: 'bottom center',
  pin: false,
  onUpdate: self => {
    // fly in from left
    const vw = window.innerWidth/ 100;
    document.querySelector('#journalist-link').style.transform = `translateX(${0.01 + (vw * 40 * (1 - self.progress))}px)`;
    // set opacity from 0 to 1
    document.querySelector('#journalist-link').style.opacity = self.progress;
  }
});

ScrollTrigger.create({
  trigger: "#cyclist-link",
  start: 'top bottom',
  end: 'bottom center',
  pin: false,
  onUpdate: self => {
    // fly in from left
    const vw = window.innerWidth/ 100;
    document.querySelector('#cyclist-link').style.transform = `translateX(${0.01 + (vw * 40 * (1 - self.progress))}px)`;
    // set opacity from 0 to 1
    document.querySelector('#cyclist-link').style.opacity = self.progress;
  }
});

// * Toggles *//
document.querySelector('#dynamic-toggle').addEventListener('click', function() {
  toggleDarkMode();
});