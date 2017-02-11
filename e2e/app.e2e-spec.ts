import { Angular2CliSamplePage } from './app.po';

describe('angular2-cli-sample App', function() {
  let page: Angular2CliSamplePage;

  beforeEach(() => {
    page = new Angular2CliSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
