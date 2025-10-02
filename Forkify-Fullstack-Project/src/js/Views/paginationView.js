import View from './View.js';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
    _parentElement = document.querySelector('.pagination');

// helper to create a button: type = 'prev' | 'next'
    _generateButton(page, type) {
        return `
          <button class="btn--inline pagination__btn--${type}" data-goto="${page}">
            ${type === 'prev' ? `
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${page}</span>
            ` : `
              <span>Page ${page}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            `}
          </button>
        `;
    }

    _generateMarkup() {
        const currPage = this._data.page;
        const numPage = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and NO other pages
        if (numPage <= 1) 
            return '';

        // Page 1, and other pages
        if (currPage === 1) 
            return this._generateButton(currPage + 1, 'next');

        // Last Page
        if (currPage === numPage) 
            return this._generateButton(currPage - 1, 'prev');

        // Other Page (both buttons)
        return this._generateButton(currPage - 1, 'prev') + this._generateButton(currPage + 1, 'next');
    };

    // handle click events on pagination buttons
    addHandlerClick(handler) {
      this._parentElement.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn--inline');
        if (!btn) return;

        const goToPage = +btn.dataset.goto;
        console.log(goToPage)
        if (Number.isNaN(goToPage)) return;
        handler(goToPage);
      });
    }
};

export default new paginationView()