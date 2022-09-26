import { DateTime } from '../node_modules/luxon/src/luxon.js';
class Navigation {
  _listLink = document.querySelectorAll('.nav__items');
  _nav = document.querySelector('.nav');
  _contianer = document.querySelector('.contianer');
  _parentElement = document.querySelector('.books');

  timeMath() {
    const now = DateTime.now();
    document.querySelector('.date_value').textContent = now.toLocaleString(
      DateTime.DATETIME_MED
    );
  }

  link() {
    this._listLink.forEach((item, i) =>
      item.setAttribute('id', `item-${i + 1}`)
    );
    const linkOne = document.querySelector('#item-1');
    const linkTwo = document.querySelector('#item-2');
    const linkThree = document.querySelector('#item-3');

    window.addEventListener('load', () => {
      document.querySelector('.book__add').classList.add('hidden');
    });

    linkOne.addEventListener('click', (e) => {
      if (!linkOne.classList.contains('active')) {
        linkOne.classList.add('active');
        linkTwo.classList.remove('active');
        linkThree.classList.remove('active');
        document.querySelector('.book__heading').classList.remove('hidden');
        document.querySelector('.book__add').classList.add('hidden');
        document.querySelector('.contact').classList.add('hidden');
        document.querySelector('.book').classList.remove('hidden');
      } else {
        linkOne.classList.remove('active');
        // document.querySelector('.book__add').classList.remove('hidden');
      }
    });
    linkTwo.addEventListener('click', (e) => {
      if (!linkTwo.classList.contains('active')) {
        linkOne.classList.remove('active');
        linkTwo.classList.add('active');
        linkThree.classList.remove('active');
        document.querySelector('.book__heading').classList.add('hidden');
        document.querySelector('.book').classList.add('hidden');
        document.querySelector('.contact').classList.add('hidden');
        document.querySelector('.book__add').classList.remove('hidden');
      } else {
        linkTwo.classList.remove('active');
        // document.querySelector('.book').classList.remove('hidden');
      }
    });
    linkThree.addEventListener('click', (e) => {
      if (!linkThree.classList.contains('active')) {
        linkOne.classList.remove('active');
        linkTwo.classList.remove('active');
        linkThree.classList.add('active');
        document.querySelector('.book__heading').classList.add('hidden');
        document.querySelector('.contact').classList.remove('hidden');
        document.querySelector('.book__add').classList.add('hidden');
      } else {
        linkThree.classList.remove('active');
      }
    });
  }
}

export default new Navigation();
