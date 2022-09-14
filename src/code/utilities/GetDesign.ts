import { GetEvents } from './GetEvents';
export namespace GetDesign {
  export class forPage {
    constructor(pageName: String) {
      const page: String = window.location.href.split('/').pop().split('.')[0];
      const block: String = pageName.split('-')[1];

      //--|►| '../../../dist/design/html/' |◄|--//
      const distLocal: String = '../../../dist';
      //--|►| 'https://tertiusroach.github.io/workflow-setup/dist/design/html' |◄|--//
      const distOnline: String = 'https://tertiusroach.github.io/workflow-setup/dist/design/html';

      console.log(window.location.href);

      let blockElement: HTMLElement = document.querySelector(`#${page}-${block}`);
      $.get(
        /*`${distOnline}/design/html/${blockElement.id}/${pageName}.html`*/
        `https://tertiusroach.github.io/workflow-setup/dist/design/html/${blockElement.id}/${pageName}.html`,
        function (callback) {
          applyStyle(blockElement, pageName);
          $(blockElement).html(callback);

          switch (page) {
            case 'index':
              new GetEvents.forIndex(pageName);
              break;
            case 'uitsendings':
              new GetEvents.forUitsendings(pageName);
              break;
            case 'akademici':
              new GetEvents.forAkademici(pageName);
              break;
            case 'administrasie':
              new GetEvents.forAdministrasie(pageName);
              break;
            case 'operasioneel':
              new GetEvents.forOperasioneel(pageName);
              break;
          }
        }
      );
    }
  }
  function applyStyle(block: HTMLElement, pageName: String) {
    block.className = '';
    block.className = `${pageName}`;
  }
}
