import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexHeader {
  export function eventsFor(pageName: String | 'default-header') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    let headerUitsendings: HTMLElement = indexHeader.querySelector('#uitsendings-button div button');
    let headerDepartemente: HTMLElement = indexHeader.querySelector('#departemente-button div button');

    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');

    let toggleButtons = (visible: HTMLElement, hidden: HTMLElement) => {
      hidden.parentElement.className = '';
      visible.parentElement.className = 'active';
      indexOverlay.style.display = 'grid';
    };

    switch (pageName) {
      case 'default-header':
        $(indexHeader).on('mouseenter', () => {
          if (indexOverlay.className !== 'header-overlay') {
            indexOverlay.style.display = 'none';
            new GetDesign.forPage('header-overlay');
          }
        });
        $(headerUitsendings).on('mouseenter', () => {
          toggleButtons(headerUitsendings, headerDepartemente);
        });
        $(headerDepartemente).on('mouseenter', () => {
          toggleButtons(headerDepartemente, headerUitsendings);
        });
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
