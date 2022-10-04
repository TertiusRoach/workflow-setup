import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');

    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    let sidebarButtons: Object = document.querySelectorAll('#index-sidebar > div > button > a > h1');

    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    let overlayBackground: HTMLElement = indexOverlay.querySelector('.background');

    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');

    switch (pageName) {
      case 'default-sidebar':
        //--|▼| Highlights the present month |▼|--//
        const defaultSidebarHighlight = (pageName: String, indexSidebar: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];
          switch (month) {
            case 'Jan':
              indexSidebar.querySelector(`.${pageName} #january-button button`).classList.add('active');
              break;
            case 'Feb':
              indexSidebar.querySelector(`.${pageName} #february-button button`).classList.add('active');
              break;
            case 'Mar':
              indexSidebar.querySelector(`.${pageName} #march-button button`).classList.add('active');
              break;
            case 'Apr':
              indexSidebar.querySelector(`.${pageName} #april-button button`).classList.add('active');
              break;
            case 'May':
              indexSidebar.querySelector(`.${pageName} #may-button button`).classList.add('active');
              break;
            case 'Jun':
              indexSidebar.querySelector(`.${pageName} #june-button button`).classList.add('active');
              break;
            case 'Jul':
              indexSidebar.querySelector(`.${pageName} #july-button button`).classList.add('active');
              break;
            case 'Aug':
              indexSidebar.querySelector(`.${pageName} #august-button button`).classList.add('active');
              break;
            case 'Sep':
              indexSidebar.querySelector(`.${pageName} #september-button button`).classList.add('active');
              break;
            case 'Oct':
              indexSidebar.querySelector(`.${pageName} #october-button button`).classList.add('active');
              break;
            case 'Nov':
              indexSidebar.querySelector(`.${pageName} #november-button button`).classList.add('active');
              break;
            case 'Dec':
              indexSidebar.querySelector(`.${pageName} #december-button button`).classList.add('active');
              break;
          }
        };
        defaultSidebarHighlight(pageName, indexSidebar);

        //--|▼| Removes highlighted buttons from inside the header |▼|--//
        const defaultHeaderReset = (indexHeader: HTMLElement) => {
          function downplayHeader(headerButtons: Object) {
            for (let i = 0; i < Object.keys(headerButtons).length; i++) {
              headerButtons[i].className = '';
            }
          }

          $(indexSidebar).on('mouseenter', () => {
            downplayHeader(indexHeader.querySelectorAll('nav[id*="button"] div'));
            if (indexOverlay.className !== 'sidebar-overlay') {
              new GetDesign.forPage(`sidebar-overlay`);
            }
          });
        };
        defaultHeaderReset(indexHeader);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
