import User from './user.js'

describe('User', () => {
  it('name returns full name', () => {
    const user = new User({ firstName: 'John', lastName: 'Cap' })
    expect(user.name).toBe('John Cap')
  })
})
