import { PrismaMoviesRepository } from '@/repositories/movies/prisma-movies-repository'
import { ListYearsWithMultipleWinnersUseCase } from '@/use-cases/list-years-with-multiple-winners-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listYearsWithMultipleWinners(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const moviesRepository = new PrismaMoviesRepository()
  const listYearsWithMultipleWinnersUseCase =
    new ListYearsWithMultipleWinnersUseCase(moviesRepository)

  const response = await listYearsWithMultipleWinnersUseCase.execute()

  return reply.status(201).send({ years: response })
}
