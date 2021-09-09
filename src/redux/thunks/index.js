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

  const ytrValidation = validator(outData);
  if (!ytrValidation.isOk) {
    errorPublisher(ytrValidation.error);
    return;
  }
  if (id) {
    updateFunction(outData);
  }
}
