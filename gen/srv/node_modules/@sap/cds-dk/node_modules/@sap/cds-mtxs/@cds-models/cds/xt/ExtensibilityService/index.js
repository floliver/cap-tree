// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../../../_')
// service
const ExtensibilityService = { name: 'cds.xt.ExtensibilityService' }
module.exports = ExtensibilityService
module.exports.ExtensibilityService = ExtensibilityService
// MESSAGE
module.exports.MESSAGE = createEntityProxy(['cds.xt.ExtensibilityService', 'MESSAGE'], { target: { is_singular: true }, customProps: ["severity"] })
// VALIDATION_RESULT
module.exports.VALIDATION_RESULT = createEntityProxy(['cds.xt.ExtensibilityService', 'VALIDATION_RESULT'], { target: { is_singular: true } })
// FILE
module.exports.FILE = createEntityProxy(['cds.xt.ExtensibilityService', 'FILE'], { target: { is_singular: true } })
// Extensions
module.exports.Extension = createEntityProxy(['cds.xt.ExtensibilityService', 'Extensions'], { target: { is_singular: true }, customProps: ["status"] })
module.exports.Extensions = createEntityProxy(['cds.xt.ExtensibilityService', 'Extensions'], { target: { is_singular: false }})
// events
// actions
module.exports.set = 'set'
module.exports.activate = 'activate'
module.exports.validate = 'validate'
module.exports.discard = 'discard'
module.exports.pull = 'pull'
module.exports.push = 'push'
module.exports.getMigratedProjects = 'getMigratedProjects'
// enums
module.exports.MESSAGE.severity ??= { error: "error", warning: "warning", info: "info" }
module.exports.Extension.status ??= { draft: 1, active: 2 }
