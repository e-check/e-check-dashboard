import { ECheckDashboardPage } from './app.po';

describe('e-check-dashboard App', () => {
  let page: ECheckDashboardPage;

  beforeEach(() => {
    page = new ECheckDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
