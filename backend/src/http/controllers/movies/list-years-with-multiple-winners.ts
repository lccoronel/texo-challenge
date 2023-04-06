import { FastifyReply, FastifyRequest } from 'fastify'

export async function listYearsWithMultipleWinners(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  return reply.status(201).send()
}
