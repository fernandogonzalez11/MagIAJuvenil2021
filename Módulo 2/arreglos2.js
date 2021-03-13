const { log } = console;

// Array#sort (esto muta el array)
const frutas1 = ['Mandarina', 'Piña', 'Sandía', 'Sandia', 'Durazno'],
    frutas2 = ['Mandarina', 'Piña', 'Pera', 'Durazno'],
    nums = [5000, 10, 200, 1000, 400],
    bools1 = [true, false]; // becomes [false, true]

log(frutas1.sort());
log(frutas2.sort());
log(nums.sort());
log(bools1.sort());

// Ciclos: for
for (let i = 1; i <= 5; i++) {
    log(`número ${i}`);
}
for (let i = 0; i < nums.length; i++) log(`Posición ${i}: ${nums[i]}`);
// nums.forEach((elem, index) => log(`Posición ${index}: ${elem}`));