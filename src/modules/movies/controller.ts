import { Router } from 'express'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import buildRespository from './repository'

export default (db: Database) => {
  const messages = buildRespository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req) => {
      const { id, title } = req.query as { id: string; title: string }

      if (id) {
        const ids = id.split(',').map(Number)
        const movies = await messages.findByIds(ids)
        return movies
      }

      if (title) {
        const titles = title!.split(',')
        const movies = await messages.findByTitles(titles)
        return movies
      }

      return messages.findAll()
    })
  )

  return router
}
