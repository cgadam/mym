import * as headerImages from '../media/header';
import * as church from '../media/church';
import * as salon from '../media/salon';
import * as icons from '../media/icons';

import moment from 'moment';

export default {
  icons: icons.default,
  novios: {
    novio: 'Lucas Matías Fernández',
    novia: 'Melisa Antonela Agnolon',
  },
  header: {
    images: headerImages.default.carousel,
    marquesina: headerImages.default.marquesina,
    text: '¡Nos casamos!',
  },
  church: {
    rings: church.default.rings,
    poem: {
      text: `
      Dicen que cuando conocés
      al amor de tu vida, el tiempo se para…
      Y es verdad!
      Lo que no dicen es que, cuando vuelve
      a ponerse en marcha,
      se mueve aún más rápido,
      para recuperar el tiempo perdido.`,
    }
  },
  salon: {
    name: 'Bosque de Piedras',
    location: 'https://www.google.com/maps/place/Bosque+De+Piedras/@-31.3321875,-64.2984267,15z/data=!4m12!1m6!3m5!1s0x94329dc9b241c53f:0x9326d58dd5ddb5e3!2sBosque+De+Piedras!8m2!3d-31.332214!4d-64.298428!3m4!1s0x94329dc9b241c53f:0x9326d58dd5ddb5e3!8m2!3d-31.332214!4d-64.298428',
    time: moment('09/02/2020 `12:00:00', 'DD/MM/YYYY hh:mm:ss'),
    time_to: moment('09/02/2020 `19:00:00', 'DD/MM/YYYY hh:mm:ss'),
    photo: salon.default.bosque_de_piedras,
    note1: 'Ceremonia religiosa y civil en el salón',
    note2: 'Se ruega puntualidad',
    note3: 'No se permite tirar arroz ni nada similar'
  },
  gifts: {
    message: 'Como nuestra casa ya tiene de todo, te pedimos nos ayudes con nuestro deseo de ahorrar',
    account: {
      tipo: 'Caja de Ahorro en Pesos*',
      banco: 'Banco Galicia',
      alias: 'Melisa.Agnolon.Gali',
      cbu: '0070148430004023411714',
      note: '(*) Si hacés una tranferencia indicá alguna referencia así sabemos que fuiste vos!'
    },
    account2: {
      tipo: 'Caja de Ahorro en Pesos*',
      banco: 'Banco Santander',
      alias: 'lucas.fernandez',
      cbu: '0720469688000035482840',
      note: '(*) Si hacés una tranferencia indicá alguna referencia así sabemos que fuiste vos!'
    }
  },
  confirmation: {
    message: 'Por favor confirmar asistencia antes del:',
    date: moment('10/01/2020 00:00:00', 'DD/MM/YYYY hh:mm:ss'),
    button: {
      text: 'Confirmar Aquí',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfWajJfcHbv_CsgyJgpLi3cr03Bzlulc18nFppY6IV1nZNQHA/viewform?usp=sf_link',
    }
  }
}