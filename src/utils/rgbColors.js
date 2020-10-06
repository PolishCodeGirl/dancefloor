import getRandomArbitrary from "./getRandomArbitrary";

export default function rgbColors() {
  return `rgb(${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(
    0,
    255
  )}, ${getRandomArbitrary(0, 255)})`;
}
