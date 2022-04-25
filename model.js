export default class Model {
  constructor(data = []) {
    this.$collection = []
    if (data.length) {
      this.record(data)
    }
  }

  record (data) {
    const mappedData = data.map(entry => {
      if (entry.id) {
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

  update(id, data) {
    const index = this.$collection.findIndex(entry => entry.id === id)
    if (index != -1) {
      this.$collection[index] = {
        ...this.$collection[index],
        ...data
      }
    } else {
      return false
    }
  }

  find (id) {
    const result = this.$collection.find(entry => entry.id === id)
    return result ? result : null
  }
}
