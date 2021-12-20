// 5 falsy values 0, '', undifined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jazmine'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('Get a job ');
}

let height = 0;
if (height) {
    console.log('Height is defined');
} else {
    console.log('bruh height is undefined')
}

// Video 21