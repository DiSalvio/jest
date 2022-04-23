import User from './user.js'

const user = new User({
  firstName: 'Joey',
  lastName: 'Spumoni',
  age: 42,
  job: null
})

it('matches user snapshot', () => {
  expect(user).toMatchSnapshot()
})
