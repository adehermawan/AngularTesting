import { browser, by, element, until } from 'protractor';

export class AppPage {
  baseUrl = 'https://angular.io';

  public gotoPage(url: String) {
    return browser.get(this.baseUrl+url);
  }

  public enterSearchInput(text: string) {
    return element(by.css('input[aria-label="search"]'))
      .sendKeys(text);
  }

  public getSearchResultItems() {
    const condition = until.elementsLocated(by.css('.search-results .search-result-item'));
    return browser.wait(condition, 5000);
  }

  public clickMenu(text: string){
    var menu = element(by.cssContainingText('.nav-link-inner',text));
    return menu.click();
  }

  public getFeaturesPageTitle() {
    return element(by.id('features--benefits')).getText();
  }

  public getEventsPageTitle() {
    return browser.getCurrentUrl();
  }

  public clickButtonGetStarted(){
    var btn = element(by.cssContainingText('.button','Get Started'));
    return btn.click();
  }

  public getTutorialPageTitle() {
    return element(by.id('getting-started')).getText();
  }

}