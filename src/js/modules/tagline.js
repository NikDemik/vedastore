async function tagline (){
    if (document.querySelector('.hero')) {
        const closeTagLineBtn = document.querySelector('.tagline__close');
        const tagline = document.querySelector('.tagline');
        
        closeTagLineBtn.onclick = function() {
            tagline.remove();
        };
    }
}

export default tagline;