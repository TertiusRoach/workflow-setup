import { GetEvents } from './GetEvents';
export namespace GetDesign {
  export class forPage {
    constructor(pageName: String) {
      const page: String = window.location.href.split('/').pop().split('.')[0];
      const block: String = pageName.split('-')[1];
      const dist: String = '../../../dist';

      let blockElement: HTMLElement = document.querySelector(`#${page}-${block}`);
      $.get(`${dist}/design/html/${blockElement.id}/${pageName}.html`, function (callback) {
        applyStyle(blockElement, pageName);
        $(blockElement).html(callback);
        new GetEvents.forPage(pageName);
      });
    }
  }
  function applyStyle(block: HTMLElement, pageName: String) {
    block.className = '';
    block.className = `${pageName}`;
  }
}
