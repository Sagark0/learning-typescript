const form = document.querySelector('.new-item-form') as HTMLFormElement
// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
    console.log(tofrom.value);
})