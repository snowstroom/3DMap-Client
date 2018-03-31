import { First3DPage } from './app.po';

describe('first3-d App', function() {
  let page: First3DPage;

  beforeEach(() => {
    page = new First3DPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
