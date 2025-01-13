import vars from '../_vars';

function stepper () {
    const $stepperInput = vars.$stepper.querySelector('.stepper__input'),
        $stepperMinus = vars.$stepper.querySelector('.stepper__btn--minus'),
        $stepperPlus = vars.$stepper.querySelector('.stepper__btn--plus');

    $stepperInput.addEventListener('keydown', (e) => {
        console.log(e.currentTarget.value)
        if (e.currentTarget.value <= 1) {
            $stepperMinus.disabled = true;
            $stepperPlus.disabled = false;
        }
        else {
            $stepperMinus.disabled = false;
        }

        if (e.currentTarget.value > 998) {
            $stepperMinus.disabled = false;
            $stepperPlus.disabled = true;
        }
        else {
            $stepperPlus.disabled = false;
        }
    })
};

export default stepper;