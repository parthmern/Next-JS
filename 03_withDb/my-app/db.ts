/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

console.log("inside db.ts");

const prismaClientSingleton = () => {
  console.log("prisma client instantiated");
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton> 
}

const prisma = globalThis.prisma || prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

// Singleton Pattern for PrismaClient
// Re-initializing PrismaClient on every request can result in too many connections to the database, leading to performance issues or connection limits being reached.
// The globalThis.prisma pattern ensures that a single instance of PrismaClient is reused across requests in development and serverless environments.
// this mainly for developer mode bcz in production mode you are not going to do hot reload