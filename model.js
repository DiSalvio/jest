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
  }
  update() {
  }

  find (value) {
    const result = this.$collection.find(entry => entry.id === value)
    return result ? result : null
  }
}
