class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = '';
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
    }

    choseoperations(operation) {
        if (this.currentOperand != '') {
            if (this.previousOperand) {
                this.calculate();

            }
            // else {
            //     this.previousOperand = this.currentOperand;
            //     this.currentOperand = '';
            // }
            this.previousOperand = this.currentOperand;
            this.currentOperand = '';
            this.operation = operation;
        }

        if (!this.currentOperand && this.previousOperand) {
            this.operation = operation;
        }
    }

    getDisplayNumber(numberString) {
        if (numberString.includes('.')) {
            return Number(numberString.split('.')[0]).toLocaleString('en') + '.' + numberString.split('.')[1];
        }
        return Number(numberString).toLocaleString('en');
    }

    updateDisplay() {
        if (this.currentOperand) {

            this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
        }
        else {
            this.currentOperandElement.innerText = '';
        }

        if (this.previousOperand) {
            this.previousOperandElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
        else {
            this.previousOperandElement.innerText = '';
        }
    }

    apendNumber(number) {
        if (number == '.' && this.currentOperand.includes('.')) {
            return
        }
        this.currentOperand = this.currentOperand + number;

    }

    calculate() {
        if (this.previousOperand && this.currentOperand && this.operation) {
            let result;
            console.log(this.currentOperand);
            if (this.currentOperand == '.') this.currentOperand = '0';
            result = eval(`${Number(this.previousOperand)} ${this.operation} ${Number(this.currentOperand)}`);
            this.clear();
            this.currentOperand = result.toString();

        }
    }
}

const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const equalBtn = document.querySelector('[data-equal]');

const previousOperand = document.querySelector('[data-previous]');
const currentOperand = document.querySelector('[data-current]');


const calculator = new Calculator(previousOperand, currentOperand);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.apendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})


operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choseoperations(button.dataset.operation);
        calculator.updateDisplay();
    })
})


equalBtn.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

window.addEventListener('keydown', (e) => {
    // console.log(e.key)
    if (e.key === 'Backspace') {
        calculator.delete();
    }

    if (e.key === 'Delete') {
        calculator.clear();
    }

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(e.key)) {
        calculator.apendNumber(e.key);
    }

    if (['/', '*', '+', '-'].includes(e.key)) {
        calculator.choseoperations(e.key);
    }

    if (e.key === 'Enter') {
        calculator.calculate();
    }

    calculator.updateDisplay();

})

