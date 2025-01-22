import vars from '../_vars';

async function catalogInfo() {
    if (document.querySelector('.product-info')) {
        let url = new URL(window.location.href);
        const urlId = url.searchParams.get('id');
        const data = require('../../html/data/veda.json');

        if (typeof data === 'object' && data !== null) {
            for (const key in data) {
                // console.log(`Key: ${key}`);
                if (data[key].id === urlId) {
                    console.log(vars.$productImgId.src);
                    vars.$productImgId.src = data[key].img;

                    vars.$productInfo.forEach((el) => {
                        el.querySelector('.product-info__title').innerHTML = data[key].title;
                        el.querySelector('.info-price__current').innerHTML = data[key].price;
                        el.querySelector('.info-price__old').innerHTML = data[key].price_old;
                        el.querySelector('.info-stock__quantity').innerHTML = data[key].stock;
                        el.querySelector('.info-sku__text').innerHTML = data[key].id;
                    });
                }
                // iterateJSON(data[key]); // Идем дальше!
            }
        } else {
            console.log(`Value: ${data}`);
        }
    }
}

export default catalogInfo;
