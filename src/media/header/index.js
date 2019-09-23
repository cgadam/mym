import marquesina from './marquesina.png'

const carouselContext = require.context('./tarjeta', true);

export default {
  carousel: carouselContext.keys().map((key) => {
    return carouselContext(key);
  }),
  marquesina,
}