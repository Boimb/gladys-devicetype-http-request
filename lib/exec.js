module.exports = function (params) {

  // Check if params OK
  if(!params.deviceType || !params.deviceType.identifier) {
    return Promise.reject(`Please, provide a valid IP as device identifier`)
  }

  let request = params.deviceType.identifier
  // if deviceTypeIdentifier append it + state
  request += params.deviceType.deviceTypeIdentifier !== null ||
    params.deviceType.deviceTypeIdentifier !== undefined
  ? `${params.deviceType.deviceTypeIdentifier}${params.state.value}`
    : ''

  return gladys.utils.request(request);
};