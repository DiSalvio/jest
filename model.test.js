import Model from './model.js'

describe('Model', () => {
  it('can create new', () => {
    expect(new Model).toBeInstanceOf(Model)
  })

  it('creates with correct structure', () => {
    expect(new Model).toEqual(expect.objectContaining({
      $collection: expect.any(Array),
      $options: expect.any(Object),
      record: expect.any(Function),
      all: expect.any(Function),
      update: expect.any(Function),
      find: expect.any(Function)
    }))
  })
})

describe('Model record', () => {
  const heroes = [{id: 1, name: 'Batman'}, {name: 'Spiderman'}]

  it('can add new data to collections', () => {
    const model = new Model()
    model.record(heroes)
    expect(model.$collection).toEqual([
      heroes[0],
      {
        id: expect.any(Number),
        ...heroes[1]
      }
    ])
  })

  it('gets called when data is passed to constructor', () => {
    const spy = jest.spyOn(Model.prototype, 'record')
    const model = new Model({ data: heroes })
    expect(spy).toHaveBeenCalled()
    expect(model.$collection).toEqual([
      heroes[0],
      {
        id: expect.any(Number),
        ...heroes[1]
      }
    ])
    spy.mockRestore()
  })
})

describe('Model find', () => {
  const heroes = [{id: 1, name: 'Batman'}, {id: 2, name: 'Spiderman'}]
  const model = new Model({ data: heroes })

  it('returns nothing if id does not exist', () => {
    expect(model.find(4)).toEqual(null)
  })

  it('returns something if id exists', () => {
    expect(model.find(1)).toEqual(heroes[0])
  })
})

describe('Model all', () => {
  const heroes = [{id: 1, name: 'Batman'}, {id: 2, name: 'Spiderman'}]

  it('returns empty model', () => {
    const model = new Model()
    expect(model.all()).toEqual([])
  })

  it('returns all model data', () => {
    const model = new Model({ data: heroes })
    expect(model.all()).toEqual(heroes)
  })

  it('original data stays intact', () => {
    const model = new Model({ data: heroes })
    const data = model.all()
    data[0].name = 'Joker'

    expect(model.$collection[0].name).toBe('Batman')
  })
})

describe('Model update', () => {
  const heroes = [{id: 1, name: 'Batman'}]
  let model

  beforeEach(() => {
    model = new Model({ data: heroes })
  })

  it('updates an entry by id', () => {
    model.update(1, { name: 'Joker' })
    expect(model.find(1).name).toBe('Joker')
  })

  it('extends an entry by id', () => {
    model.update(1, { cape: true })
    expect(model.find(1)).toEqual(expect.objectContaining({
      id: 1,
      name: 'Batman',
      cape: true
    }))
  })

  it('returns false if no entry matches id', () => {
    expect(model.update(4, {})).toBe(false)
  })
})

describe('customizations', () => {
  test('can customize the primary key', () => {
    const model = new Model({
      primaryKey: 'name'
    })
    expect(model.$options.primaryKey).toBe('name')
  })
})

