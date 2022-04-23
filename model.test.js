import Model from './model.js'

describe('Model', () => {
  it('can create new', () => {
    expect(new Model).toBeInstanceOf(Model)
  })

  it('creates with correct structure', () => {
    expect(new Model).toEqual(expect.objectContaining({
      $collection: expect.any(Array),
      record: expect.any(Function),
      all: expect.any(Function),
      update: expect.any(Function),
      find: expect.any(Function)
    }))
  })
})
