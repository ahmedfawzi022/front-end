import { TaskFrontPage } from './app.po';

describe('task-front App', () => {
  let page: TaskFrontPage;

  beforeEach(() => {
    page = new TaskFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
