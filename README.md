# Dr. Carlos M. — Landing page

Página institucional de estudo sobre Direito do Trabalho. Os textos seguem o arquivo de copy e o caráter informativo do Provimento 205/2021 da OAB. Nome, inscrição, telefone e endereço são fictícios.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## O que trocar em um projeto real

- **WhatsApp:** copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_WHATSAPP_NUMBER` só com DDI e número, por exemplo `5571999999999`. A mensagem pré-preenchida está em `src/lib/config.ts`.
- **E-mail e redes:** `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_LINKEDIN_URL` e `NEXT_PUBLIC_FACEBOOK_URL` no `.env.local`.
- **Telefone exibido, inscrição na OAB e endereço:** `src/lib/content.ts`.
- **Foto do advogado:** substitua `public/images/advogado.jpg`.
- **Logo:** `public/images/logo-carlos-on-dark.png` (versão clara, usada no header e no rodapé, ambos sobre azul). A versão azul-marinho e dourado está em `public/images/logo-carlos.png`.
- **Formulário de contato:** visual apenas; o envio está desativado de propósito.
