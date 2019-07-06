var recipes = {
};

function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
  //recipes[key] = value
  //return recipes;
  return Object.assign({}, {key: 'value' })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //return Object[assign]({}, {key: 'value' });
  recipes[key] = value
  return recipes;
}

//function deleteFromObjectByKey(object, key)
>>>>>>> f4ddedd42aa2f7f0607584718f0e05d862bb9d01
