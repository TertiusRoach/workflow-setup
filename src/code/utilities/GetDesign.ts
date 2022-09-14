import { GetEvents } from './GetEvents';
export namespace GetDesign {
  export class forPage {
    constructor(pageName: String) {
      const page: String = window.location.href.split('/').pop().split('.')[0];
      const block: String = pageName.split('-')[1];
      const dist: String = fetchURI(window.location.href);
      const blockElement: HTMLElement = document.querySelector(`#${page}-${block}`);
      $.get(`${dist}/design/html/${blockElement.id}/${pageName}.html`, function (callback) {
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
      });
    }
  }
  function applyStyle(block: HTMLElement, pageName: String) {
    block.className = '';
    block.className = `${pageName}`;
  }
  function fetchURI(url: String) {
    // let onlineSample = 'https://tertiusroach.github.io/workflow-setup/dist/index.html';
    // let offlineSample = 'http://127.0.0.1:5500/dist/index.html';

    // console.log();

    // let onlineTest = onlineSample;
    // let offlineTest = offlineSample.slice(0, 5);

    // console.log(`Online = ${onlineTest}`);
    // console.log(`Offline = ${offlineTest}`);

    switch (url.slice(0, 5)) {
      case 'https':
        console.log(`Test: This page is Online`);
        //--|►| Online |◄|--//
        let href = url.split('/');
        return `${href[0]}//${href[2]}/${href[3]}/dist`;
      case 'http:':
        console.log(`Test: This page is Local`);
        //--|►| Local |◄|--//
        return '../../../dist';
    }
  }
}
