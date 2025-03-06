# Exercicio 07
## Sistema de Notificações
User Story:
Como um usuário de um aplicativo, eu quero receber notificações por diferentes canais (e-mail, SMS, push notification), para que eu possa me manter informado sobre atividades importantes.

### Requisitos:
Crie uma interface Notificacao com o método:
- enviar(mensagem: string): void - Deve enviar uma notificação.

Implemente a interface em três classes:
- EmailNotificacao: Envia a mensagem por e-mail (exiba no console: "Enviando e-mail: [mensagem]").
- SmsNotificacao: Envia a mensagem por SMS (exiba no console: "Enviando SMS: [mensagem]").
- PushNotificacao: Envia a mensagem por push notification (exiba no console: "Enviando push notification: [mensagem]").

Crie uma classe Usuario com o atributo:
- nome (string)
- E um método receberNotificacao(notificacao: Notificacao, mensagem: string) que usa a interface para enviar uma notificação.

Teste o sistema criando um usuário e enviando notificações por diferentes canais.