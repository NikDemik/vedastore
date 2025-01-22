import vars from '../_vars';

function productParam() {
    if (document.querySelector('.product-param')) {
        let url = new URL(window.location.href);
        const urlId = url.searchParams.get('id');
        const data = require('../../html/data/veda.json');

        if (typeof data === 'object' && data !== null) {
            for (const key in data) {
                // console.log(`Key: ${key}`);
                if (data[key].id === urlId) {
                    vars.$productParam.forEach((el) => {
                        el.querySelector('.param__voltage').innerHTML = data[key].voltage;
                        el.querySelector('.param__power').innerHTML = data[key].power;
                        el.querySelector('.param__tok').innerHTML = data[key].tok;
                        el.querySelector('.param__weight').innerHTML = data[key].weight;
                        el.querySelector('.param__widht').innerHTML = data[key].widht;
                        el.querySelector('.param__height').innerHTML = data[key].height;
                        el.querySelector('.param__lenght').innerHTML = data[key].length;
                    });
                }
                // iterateJSON(data[key]); // Идем дальше!
            }
        } else {
            console.log(`Value: ${data}`);
        }
    }
}

export default productParam;
