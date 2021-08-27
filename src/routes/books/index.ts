import { FastifyPluginAsync } from "fastify";

const books: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("/", async function () {
    return await fastify.prisma.book.findMany();
  });
  fastify.get<{ Params: { id: string } }>("/:id", async function (request) {
    const book_id = request.params.id;
    return await fastify.prisma.book.findUnique({ where: { book_id } });
  });
};

export default books;
