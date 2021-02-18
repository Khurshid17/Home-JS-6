const obj = receipt();
let order  = '';
let price = 0;
const delivery = 9000;
for (key in obj) {
    for (keyid in obj[key]) {
        // console.log(obj[key][keyid]);
        if (keyid == 'info') {
            order += key + ': ' + obj[key][keyid] +  ', ';
        } else {
            price += obj[key][keyid];
        }
    }
}
console.log("Вы заказали " + order + "\n" +  "Общая стоимость " + (price + delivery) + " сумм с доставкой (9000)");