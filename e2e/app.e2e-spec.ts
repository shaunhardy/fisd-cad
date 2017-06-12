import { CadPage } from './app.po';

describe('cad App', () => {
  let page: CadPage;

  beforeEach(() => {
    page = new CadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
