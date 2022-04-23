export default class User {
  constructor(details) {
    const { firstName, lastName, age, job } = details
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.job = job
  }

  get name() {
    return `${this.firstName} ${this.lastName}`
  }
}
