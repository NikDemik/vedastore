import vars from '../_vars';

function cardLink() {}
if (document.querySelector('.catalog')) {
    //Добавляем ID к ссылке (на страницу товара) в карточке
    vars.$cardLink.forEach((el) => {
        el.href = 'product.html?' + 'id=' + el.getAttribute('data-id');

        //Сохраняем data-id карточки в localStorage
        // el.addEventListener('click', (e) => {
        //     let id = e.target.getAttribute('data-id');
        //     // e.target.href = 'product.html' + '?' + id;
        //     localStorage.setItem('data-id', id);
        //     console.log('localStorage:', localStorage.getItem('data-id'));
        // });
    });
}
export default cardLink;
