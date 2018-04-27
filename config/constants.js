var jsonProvider = {facebook: "Facebook",google:"Google",local:"Local"}
var jsonProviderArray = Object.keys(jsonProvider).map(function (k) {
    return jsonProvider[k]
  })
module.exports = {
    bcryptSecret: 's0/\/\P4$$w0rD',
    jsonProvider:jsonProvider,
    jsonProviderArray:jsonProviderArray
}
