const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const input = document.getElementById('number');

btn.addEventListener('click', () => {
    const number = Number(input.value);

    if (input.value === '') {
        output.textContent = 'Please enter a valid number';
    } else if (number <= 0) {
        output.textContent = 'Please enter a number greater than or equal to 1';
    } else if (number >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
    } else {
        
        function converter(number) {
            const romanNumerals = [
                { value: 1000, numeral: 'M' },
                { value: 900, numeral: 'CM' },
                { value: 500, numeral: 'D' },
                { value: 400, numeral: 'CD' },
                { value: 100, numeral: 'C' },
                { value: 90, numeral: 'XC' },
                { value: 50, numeral: 'L' },
                { value: 40, numeral: 'XL' },
                { value: 10, numeral: 'X' },
                { value: 9, numeral: 'IX' },
                { value: 5, numeral: 'V' },
                { value: 4, numeral: 'IV' },
                { value: 1, numeral: 'I' }
            ];

            let result = '';
            for (const item of romanNumerals) {
                while (number >= item.value) {
                    result += item.numeral;
                    number -= item.value;
                }
            }
            return result;
        }

        output.textContent = converter(number);
    }
});
