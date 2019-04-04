import _ from 'lodash'

export default (string) => {
  string = _.capitalize(string.toString())
  return string
}
