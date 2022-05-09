export default class Model {
  constructor(options = {}) {
    const data = options.data || []
    delete options.data
    this.$collection = []
    this.$options = { primaryKey: 'id', ...options }
    if (data.length) {
      this.record(data)
    }
  }

  record (data) {
    const mappedData = data.map(entry => {
      if (entry[this.$options.primaryKey]) {
        return entry
      } else {
        return {
          id: 2,
          ...entry
        }
      }
    })
    this.$collection.push(...mappedData)
  }

  all() {
    return this.$collection.map(entry => Object.assign({}, entry))
  }

  update(primaryKey, data) {
    const index = this.$collection.findIndex(entry => entry[this.$options.primaryKey] === primaryKey)
    if (index != -1) {
      this.$collection[index] = {
        ...this.$collection[index],
        ...data
      }
    } else {
      return false
    }
  }

  find (primaryKey) {
    const result = this.$collection.find(entry => entry[this.$options.primaryKey] === primaryKey)
    return result ? result : null
  }
}
