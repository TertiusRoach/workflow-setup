import { IndexBody } from 'code/events/index-body';
import { IndexHeader } from 'code/events/index-header';
import { IndexMain } from 'code/events/index-main';
import { IndexSidebar } from 'code/events/index-sidebar';
import { IndexFooter } from 'code/events/index-footer';
import { IndexOverlay } from 'code/events/index-overlay';
import { IndexData } from 'code/events/index-data';

export namespace GetEvents {
  export class forPage {
    constructor(pageName: String) {
      const block: String = pageName.split('-')[1];
      switch (block) {
        case 'body':
          IndexBody.eventsFor(pageName);
          break;
        case 'header':
          IndexHeader.eventsFor(pageName);
          break;
        case 'main':
          IndexMain.eventsFor(pageName);
          break;
        case 'sidebar':
          IndexSidebar.eventsFor(pageName);
          break;
        case 'footer':
          IndexFooter.eventsFor(pageName);
          break;
        case 'overlay':
          IndexOverlay.eventsFor(pageName);
          break;
        case 'data':
          IndexData.eventsFor(pageName);
          break;
      }
    }
  }
}
