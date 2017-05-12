import { SolusekPage } from './app.po';

describe('solusek App', () => {
  let page: SolusekPage;

  beforeEach(() => {
    page = new SolusekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
