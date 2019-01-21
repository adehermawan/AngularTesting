import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { AppPage } from '../pages/app.po';

defineSupportCode(({Given, When, Then, Before}) => {
  let app: AppPage;

  Before(() => {
    app = new AppPage();
  });

  Given('I am on the angular.io site',{timeout: 60 * 1000},
    () => app.gotoPage('/'));

  When('I type {string} into the search input field',{timeout: 60 * 1000},
    (text: string) => app.enterSearchInput(text));

  Then('I should see some results in the search overlay',{timeout: 60 * 1000},
    () => app.getSearchResultItems()
      .then(elems => expect(elems.length).to.be.greaterThan(0)));

});