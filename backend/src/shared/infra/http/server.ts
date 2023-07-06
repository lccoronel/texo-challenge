import { app } from './app'
import { env } from '@/shared/infra/env'

app.listen(3333, () => console.log(`Server is running on ${env.PORT} 🚀`))
