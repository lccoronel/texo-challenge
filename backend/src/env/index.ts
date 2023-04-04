import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  const envError = 'Invalid enviroment variables'

  console.log(envError, _env.error.format())

  throw new Error(envError)
}

export const env = _env.data
