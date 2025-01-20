import vars from '../_vars';

function stepper() {
    if (document.querySelector('.product-info')) {
        const $stepperInput = vars.$stepper.querySelector('.stepper__input'),
            $stepperMinus = vars.$stepper.querySelector('.stepper__btn--minus'),
            $stepperPlus = vars.$stepper.querySelector('.stepper__btn--plus');

        $stepperInput.addEventListener('keydown', (e) => {
            // console.log(e.currentTarget.value)
            if (e.currentTarget.value <= 1) {
                $stepperMinus.disabled = true;
                $stepperPlus.disabled = false;
            } else {
                $stepperMinus.disabled = false;
            }

            if (e.currentTarget.value > 998) {
                $stepperMinus.disabled = false;
                $stepperPlus.disabled = true;
            } else {
                $stepperPlus.disabled = false;
            }
        });

        $stepperPlus.addEventListener('click', (e) => {
            let currentValue = parseInt($stepperInput.value);
            currentValue++;
            $stepperInput.value = currentValue;
            $stepperMinus.disabled = false;

            if ($stepperInput.value > 998) {
                $stepperInput.value = 999;
                $stepperPlus.disabled = true;
            } else {
                $stepperPlus.disabled = false;
            }
        });

        $stepperMinus.addEventListener('click', (e) => {
            let currentValue = parseInt($stepperInput.value);
            currentValue--;
            $stepperInput.value = currentValue;

            $stepperPlus.disabled = false;

            if ($stepperInput.value <= 1) {
                $stepperInput.value = 1;
                $stepperMinus.disabled = true;
            } else {
                $stepperMinus.disabled = false;
            }
        });
    }
}

export default stepper;
