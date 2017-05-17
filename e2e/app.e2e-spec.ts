import { BacklogPage } from './app.po';

describe('backlog App', () => {
  let page: BacklogPage;

  beforeEach(() => {
    page = new BacklogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
