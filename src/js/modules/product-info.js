import vars from '../_vars';

function catalogInfo() {
    if (document.querySelector('.product-info')) {
        vars.$productInfo.forEach((el) => {
            let prodId = el.getAttribute('data-id');

            if (prodId === localStorage.getItem('data-id')) {
                console.log(prodId);
                el.classList.add('product-info--visible');
            } else {
                el.remove();
            }
        });
    }
}

export default catalogInfo;
