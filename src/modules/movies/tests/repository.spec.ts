import createTestDatabase from '@tests/utils/createTestDatabase'
import { createFor } from '@tests/utils/records'
import buildRepository from '../repository'

const db = await createTestDatabase()
const repository = buildRepository(db)
const createMovies = createFor(db, 'movies')

beforeEach(async () => {
  await db.deleteFrom('movies').execute()
})

describe('findAll', () => {
  it('should return existing movies', async () => {
    await createMovies([
      {
        id: 1,
        title: 'Sherlock Holmes',
        year: 2009,
      },
    ])

    const movies = await repository.findAll()

    expect(movies).toEqual([
      {
        id: expect.any(Number),
        title: 'Sherlock Holmes',
        year: 2009,
      },
    ])
  })

  it('should return empty array if there are no movies', async () => {
    const movies = await repository.findAll()

    expect(movies).toEqual([])
  })
})

describe('findByIds', () => {
  it('should return a list of movies by their ID', async () => {
    await createMovies([
      {
        id: 22,
        title: 'The Dark Knight',
        year: 2008,
      },
      {
        id: 234,
        title: 'Sherlock Holmes',
        year: 2009,
      },
      {
        id: 4153,
        title: 'Inception',
        year: 2010,
      },
    ])

    const movies = await repository.findByIds([234, 4153])

    expect(movies).toHaveLength(2)
    expect(movies).toEqual([
      {
        id: 234,
        title: 'Sherlock Holmes',
        year: 2009,
      },
      {
        id: 4153,
        title: 'Inception',
        year: 2010,
      },
    ])
  })

  it('should return empty array if movies with given ids dont exist', async () => {
    await createMovies([
      {
        id: 234,
        title: 'Sherlock Holmes',
        year: 2009,
      },
      {
        id: 4153,
        title: 'Inception',
        year: 2010,
      },
    ])

    const movies = await repository.findByIds([1, 2])

    expect(movies).toEqual([])
  })

  it('should return empty array if ids were not provided', async () => {
    const movies = await repository.findByIds([])

    expect(movies).toEqual([])
  })
})
