export namespace UitsendingsData {
  const uitsendingsBody: HTMLElement = document.getElementById('uitsendings-body');
  const uitsendingsHeader: HTMLElement = document.getElementById('uitsendings-header');
  const uitsendingsMain: HTMLElement = document.getElementById('uitsendings-main');
  const uitsendingsSidebar: HTMLElement = document.getElementById('uitsendings-sidebar');
  const uitsendingsOverlay: HTMLElement = document.getElementById('uitsendings-overlay');
  const uitsendingsFooter: HTMLElement = document.getElementById('uitsendings-footer');
  const uitsendingsData: HTMLElement = document.getElementById('uitsendings-data');
  export function eventsFor(pageName: String | 'default-data') {
    switch (pageName) {
      case 'default-data':
        uitsendingsBody.querySelector('#loading-screen').remove();
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
