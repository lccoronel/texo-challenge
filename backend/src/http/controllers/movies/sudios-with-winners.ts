import { FastifyReply, FastifyRequest } from 'fastify'
import { makeStudiosWithWinners } from './factories/make-studios-with-winners'

export async function studiosWithWinners(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const StudiosWithWinnersUseCase = makeStudiosWithWinners()

  const response = await StudiosWithWinnersUseCase.execute()

  return reply.status(201).send({ studios: response })
}
