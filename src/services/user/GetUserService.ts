import prismaClient from "../../prisma";

export default async function GetUserService() {
  try {
    const users = await prismaClient.user.findMany();
    return {
      ok: true,
      total: users.length,
      users,
    };
  } catch (error) {
    console.error("Erro ao acessar o banco:", error);
    return {
      ok: false,
      message: "Erro ao acessar o banco de dados",
      error: String(error),
    };
  }
}
