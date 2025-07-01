# 🍕 DevPizza – Backend

API RESTful desenvolvida em Node.js com Express, Prisma e PostgreSQL para gerenciar pedidos, usuários e o fluxo operacional interno de uma pizzaria.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Bcrypt.js (criptografia de senhas)
- JSON Web Token (autenticação via token)
- TypeScript

---

## 🧠 Funcionalidades da API

### ✅ Autenticação e Usuários
- Cadastro de funcionários com:
  - Verificação de e-mail duplicado
  - Senha criptografada com `bcrypt`
- Login com:
  - Validação de e-mail e senha
  - Retorno de **token JWT** para autenticação em rotas protegidas
- Middleware de proteção para rotas privadas usando token

### ✅ Pedidos
- Criação de pedidos com nome do cliente, número da mesa e produtos
- Status inicial do pedido como rascunho (`draft = true`)
- Ao confirmar o pedido, `draft` é alterado para `false`, tornando-o visível para a cozinha
- A cozinha marca o pedido como finalizado (`status = true`) após o preparo
- O gerente pode consultar pedidos finalizados para realizar a cobrança

