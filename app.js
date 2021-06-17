const HEX_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function getHEXRandomColor() {
   let hexCod = '';
   for (let i = 0; i < 6; i++) {
      const INDEX = Math.floor(Math.random() * (HEX_NUMBERS.length - 1));
      hexCod += HEX_NUMBERS[INDEX];
   }
   return `#${hexCod}`;
}
