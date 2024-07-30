import vars from '../_vars';

function catalogFilter(){ 
    
    // Развернуть и свернуть список фильтров
    vars.$catalogFiltersTop.forEach(el => {
        el.addEventListener('click', (e)=> {
            e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
        });
    });

    // Выбор фильтра
    vars.$catalogFiltersItems.forEach(el => {
        el.querySelector('input').addEventListener('change', (e)=> {
            let checked = el.querySelector('input').checked;
            
            if (checked) {
                el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active')
            } 
            else {
                el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active')
            }            
        });
    });    

}

export default catalogFilter;
