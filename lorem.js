const PI = 3.1415;

const average = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
};

exports.average = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
};

exports.pi = PI;

// << ECMAscript modules >>
// export default App
// import App from './...' <--- expresion literales

// << Commonjs modules >>
// exports <<<---
// module.exports = value | func
// exports.key = value | func
// module.exports.key = value | func
// require() <--- funcion

//console.log(module);

console.log('Aqui en Lorem');

// module.exports.average = average;
// module.exports.pi = PI;

//console.log(module);
