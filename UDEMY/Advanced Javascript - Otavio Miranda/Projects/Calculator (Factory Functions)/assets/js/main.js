function createCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.buttonClick();
      this.pressBackSpace();
      this.pressEnter();
    },

    pressBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.performAccount();
        }
      });
    },

    performAccount() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('Invalid Input');
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Invalid Input');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },


    buttonClick() {
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.displayButton(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if (el.classList.contains('btn-eq')) {
          this.performAccount();
        }

        this.display.focus();
      });
    },

    displayButton(valor) {
      this.display.value += valor;
    }

  };
}

const calculator = createCalculator();
calculator.start();
