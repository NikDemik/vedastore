import vars from '../_vars';

function productSelect () {
    if (document.querySelector('.product')) {
        vars.$voltageSelect.addEventListener('click', (e) => {
            if (e.target.classList.contains('voltage-select__btn')) {
                
                document.querySelectorAll('.voltage-select__btn').forEach(el => el.classList.remove('voltage-select__btn--active'));
        
                e.target.classList.add('voltage-select__btn--active');
            }
        });

        vars.$powerSelect.addEventListener('click', (e) => {
            if (e.target.classList.contains('power-select__btn')) {
                
                document.querySelectorAll('.power-select__btn').forEach(el => el.classList.remove('power-select__btn--active'));
        
                e.target.classList.add('power-select__btn--active');
            }
        });
    }
}

export default productSelect;
