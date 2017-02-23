import { AplicacionEjemploPage } from './app.po';

describe('aplicacion-ejemplo App', () => {
  let page: AplicacionEjemploPage;

  beforeEach(() => {
    page = new AplicacionEjemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
