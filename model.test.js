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

describe('Model record', () => {
  const heroes = [{name: 'Batman'}, {name: 'Spiderman'}]

  it('can add new data to collections', () => {
    const model = new Model()
    model.record(heroes)
    expect(model.$collection).toEqual(heroes)
  })

  it('gets called when data is passed to constructor', () => {
    const spy = jest.spyOn(Model.prototype, 'record')
    const model = new Model(heroes)
    expect(spy).toHaveBeenCalled()
    expect(model.$collection).toEqual(heroes)
    spy.mockRestore()
  })
})
