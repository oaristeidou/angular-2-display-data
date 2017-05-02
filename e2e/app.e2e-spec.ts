import { Angular2DisplayDataPage } from './app.po';

describe('angular-2-display-data App', function() {
  let page: Angular2DisplayDataPage;

  beforeEach(() => {
    page = new Angular2DisplayDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
