import { FastifyPluginAsync } from "fastify";

const books: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    return { title: "this is the books api" };
  });
};

export default books;
