// Instructions can be found in rest_parameters.md

function add(...arr) {  
  return arr.reduce((acc, curr) => acc + curr);
}

//add(1, 2, 3, 4, 5);

module.exports.add = add;