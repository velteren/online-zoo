const ANOTHER_AMOUNT = document.querySelector('.another-amount');
const RANGE_DOTS = document.querySelectorAll('input');

ANOTHER_AMOUNT.oninput = function() {
  if (this.value.length > 4) {
    this.value = this.value.slice(0,4); 
  }
}
