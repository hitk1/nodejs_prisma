import { PrismaClient } from '@prisma/client'

(async () => {
    const prisma = new PrismaClient()

    const result = await prisma.courses.create({
        data: {
            name: "Curso de JS",
            duration: 560,
            description: "Curso de Javascript atualizado",
            teacher: {
                //connect: "" ==> Esta opção indica que o id de relacionamento existe (quando há certeza disso),
                connectOrCreate: {      //Esta opção faz uma verificação nas condições [where], se existir um dado com tais condições, então só é feito um link, caso contrário o novo dado de relacionamento é criado
                    where: {
                        name: "Luis Paulo",
                    },
                    create: {
                        name: "Hitk1 dev"
                    }
                }
            }
        }
    })

    console.log(result)
})()