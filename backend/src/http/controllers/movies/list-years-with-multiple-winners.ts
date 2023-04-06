import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListYearsWithMultiplesWinners } from './factories/make-list-years-with-multiples-winners'

export async function listYearsWithMultipleWinners(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listYearsWithMultipleWinnersUseCase =
    makeListYearsWithMultiplesWinners()

  const response = await listYearsWithMultipleWinnersUseCase.execute()

  return reply.status(201).send({ years: response })
}
