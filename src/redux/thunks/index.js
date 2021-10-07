export function adminUpdator(
  update,
  id,
  updateFunction,
  validator,
  errorPublisher
) {
  const outData = {
    ...update,
    id
  };

  console.log('going to run validation');
  const ytrValidation = validator(outData);
  console.log('validated?');
  console.log(ytrValidation.isOk);
  console.log('outData');
  Object.keys(outData).forEach((k) => {
    console.log(k);
    console.log(outData[k]);
  });
  console.log('oooooo');
  if (!ytrValidation.isOk) {
    console.log('not ok');
    console.log(ytrValidation.error);
    errorPublisher(ytrValidation.error);
    return;
  }
  if (id) {
    console.log('has id, running update function');
    updateFunction(outData);
  } else {
    console.log('no id');
    errorPublisher('no id');
  }
}

// export function adminDeletor(
//     id,
//     deleteFunction,
//     validator,
//     errorPublisher
// ) {
//
// }
