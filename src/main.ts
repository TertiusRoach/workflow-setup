import { Administrasie } from './code/events/administrasie';
import { Operasioneel } from './code/events/operasioneel';
import { Uitsendings } from './code/events/uitsendings';
import { Akademici } from './code/events/akademici';
import { Index } from './code/events/index';
namespace GetPage {
  const page: String = window.location.href.split('/').pop().split('.')[0];
  switch (page) {
    case 'index':
      new Index.LoadDesign(page);
      break;
    case 'uitsendings':
      new Uitsendings.LoadDesign(page);
      break;
    case 'akademici':
      new Akademici.LoadDesign(page);
      break;
    case 'administrasie':
      new Administrasie.LoadDesign(page);
      break;
    case 'operasioneel':
      new Operasioneel.LoadDesign(page);
      break;
  }
}
