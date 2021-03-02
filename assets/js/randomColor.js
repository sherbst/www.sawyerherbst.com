var options = [
    'is-link',
    'is-primary',
    'is-warning',
    'is-success',
    'is-info',
    'is-danger'
];

console.log(options.length);

var option = options[Math.floor(Math.random() * options.length)];

var targets = document.getElementsByClassName('randomColor');

for(let i = 0; i < targets.length; i++) {
    targets[i].classList.add(option);
}