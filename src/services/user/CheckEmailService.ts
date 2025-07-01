import prismaClient from "../../prisma";

interface CheckRequest {
  email: string;
}

export default async function CheckEmailService({ email }: CheckRequest) {
  if (!email) {
    throw new Error("Email incorrect");
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  return { exists: !!user };
}
