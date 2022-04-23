import User from './user.js'

const user = new User({
  firstName: 'Joey',
  LastName: 'Baggadonuts',
  age: 42,
  job: 'chief'
})

it('matches user snapshot', () => {
  expect(user).toMatchSnapshot()
})
