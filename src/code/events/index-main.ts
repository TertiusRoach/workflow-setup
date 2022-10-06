export namespace IndexMain {
  export function eventsFor(pageName: String | 'default-main' | 'opdatering-main' | 'rooster-main' | 'statistieke-main' | 'rain-main') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');

    switch (pageName) {
      case 'default-main':
        break;
      case 'opdatering-main':
        const toggleHeader = (indexMain: HTMLElement) => {
          let button: HTMLDivElement = indexMain.querySelector('#opdatering-date div:nth-child(3)');
          let navigation: HTMLElement = indexMain.querySelector('#opdatering-buttons nav');
          let information: HTMLIFrameElement = indexMain.querySelector('#opdatering-sheets header iframe');
          $(button).on('click', () => {
            switch (information.id) {
              case 'original':
                button.classList.remove('hide-original');
                button.classList.add('hide-additional');

                navigation.classList.remove('show-original');
                navigation.classList.add('show-additional');

                information.id = 'additional';
                break;
              case 'additional':
                button.classList.remove('hide-additional');
                button.classList.add('hide-original');

                navigation.classList.remove('show-additional');
                navigation.classList.add('show-original');

                information.id = 'original';
                break;
            }
          });
        };
        toggleHeader(indexMain);
        break;
      case 'rooster-main':
        break;
      case 'statistieke-main':
        break;
      case 'rain-main':
        //--|▼| Adds rain effect |▼|--//
        const rainEffect = (indexMain: HTMLElement) => {
          let topContainer: HTMLElement = document.querySelector('body .rain-main .rain-top');
          let bottomContainer: HTMLElement = document.querySelector('body .rain-main .rain-bottom');
          function addRain(container: HTMLElement) {
            let i = 0;
            let amount = 25;
            while (i < amount) {
              var drop = document.createElement('i');

              var size = Math.random() * 5;
              var posX = Math.floor(Math.random() * window.innerWidth);

              var delay = Math.random() * -20;
              var duration = Math.random() * 5;

              drop.style.width = 0.2 + size + 'px';
              drop.style.left = posX + 'px';
              drop.style.animationDelay = delay + 's';
              drop.style.animationDuration = 4 + duration + 's';

              container.appendChild(drop);

              i++;
            }
          }
          addRain(topContainer);
          addRain(bottomContainer);
        };
        rainEffect(indexMain);
        console.log(`--${pageName} Loaded`);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
