import { PrismaClient } from '@prisma/client'


const createData = async () => {
    const prisma = new PrismaClient()

    const result = await prisma.courses.create({
        data: {
            name: 'NodeJS-Prisma IO',
            duration: 200,
            description: 'Curso do ORM Prisma com NodeJS'
        }
    })

    console.log(result)
}

const findOneSample = async () => {
    const prisma = new PrismaClient()

    const result = await prisma.courses.findMany({})

    console.log(result)
}

const update = async () => {
    const prisma = new PrismaClient()

    const single = await prisma.courses.findFirst()

    const result = await prisma.courses.update({
        where: {
            id: single?.id
        },
        data: {
            name: 'updated name'
        }
    })

    console.log(result)
}

(async () => {
    //await createData()
    // await findOneSample()
    await update()
})()