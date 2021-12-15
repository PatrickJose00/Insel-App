// const { mergeTypeDefs } = require('@graphql-tools/merge')
// const patientType = require('../graphql/types/patientType')
// const studiesType = require('../graphql/types/studiesType')
//const types = [patientType, studiesType]
//module.exports = mergeTypeDefs(types)

import patientType from "./shemas/patientType"
import studiesType from "./shemas/studiesType"
import modalityType from "./shemas/modalityType"


export default [patientType, studiesType, modalityType]
