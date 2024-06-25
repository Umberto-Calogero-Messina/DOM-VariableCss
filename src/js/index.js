// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// # Ejercicios

// ## VARIABLES CSS

// - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

// - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

// - Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón

// - Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.

const boxScrollElement = document.getElementById('box-scroll');
const titleElement = document.getElementById('title');
const rgbButtonElement = document.getElementById('button-rgb');
const hexButtonElement = document.getElementById('button-hex');
const rootStyle = document.documentElement.style;

const percScrollSize = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  rootStyle.setProperty('--width-perc', scrollPercent * 100 + '%');

  setHeigthPosition();
};

const setHeigthPosition = () => {
  const scrollTop = window.scrollY;
  titleElement.textContent = `Te has desplazado de ${scrollTop} px`;
};

const randomRGBValue = () => {
  const colorArray = [];
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 255);
    colorArray.push(randomNumber);
  }
  rootStyle.setProperty('--bg-primary', `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`);
};
const randomHEXValue = () => {
  const hexLetter = '0123456789ABCDEF';
  let randomColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hexLetter.length);
    randomColor += hexLetter[randomNumber];
  }

  rootStyle.setProperty('--bg-primary', randomColor);
};

const mouseMovePosition = ev => {
  const xMousePosition = ev.x;
  const yMousePosition = ev.y;
  console.log(ev.x, ev.y);

  rootStyle.setProperty('--box-x-position', xMousePosition + 'px');
  rootStyle.setProperty('--box-y-position', yMousePosition + 'px');
};

window.addEventListener('scroll', percScrollSize);
window.addEventListener('mousemove', mouseMovePosition);
rgbButtonElement.addEventListener('click', randomRGBValue);
hexButtonElement.addEventListener('click', randomHEXValue);
