import { StarredAngularProjectsPage } from './app.po';

describe('starred-angular-projects App', () => {
  let page: StarredAngularProjectsPage;

  beforeEach(() => {
    page = new StarredAngularProjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
