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
  console.log(ytrValidation);
  if (!ytrValidation.isOk) {
    errorPublisher(ytrValidation.error);
    return;
  }
  if (id) {
    updateFunction(outData);
  } else {
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
