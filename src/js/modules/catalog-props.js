import vars from '../_vars';

function catalogProps() {
    if (document.querySelector('.catalog')) {
        // Изменение количества колонок
        vars.$catalogColumns.addEventListener('click', (e) => {
            if (
                e.target.classList.contains('.catalog-columns__btn') ||
                e.target.closest('.catalog-columns__item')
            ) {
                let columns = e.target.dataset.columns;
                let $columnsBtn = document.querySelectorAll('.catalog-columns__btn');

                $columnsBtn.forEach((el) => {
                    el.classList.remove('catalog-columns__btn--current');
                });

                e.target.classList.add('catalog-columns__btn--current');

                vars.$catalogGridContent.dataset.gridColumns = columns;
            }
        });

        //Сохраняем data-id карточки в localStorage
        vars.$cardLink.forEach((el) => {
            el.addEventListener('click', (e) => {
                let id = e.target.getAttribute('data-id');
                localStorage.setItem('data-id', id);
                console.log('localStorage:', localStorage.getItem('data-id'));
            });
        });
    }
}

export default catalogProps;
