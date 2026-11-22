# Oral Dez Odontologia

Página institucional da clínica em Vilhena, RO. Os dados de contato, horários e a biografia vêm do arquivo `Informações`. O retrato do crachá e a foto da fachada são do acervo original. As imagens de objetos odontológicos são ilustrações produzidas para os tratamentos.

## Desenvolvimento

Use Node.js 22.12 ou superior. Instale as dependências com `npm ci` e execute `npm run dev`. A página usa React, Vite e os efeitos DriftWall, ScrollStack e Lanyard adaptados das referências React Bits fornecidas.

## Publicação estática na Hostinger

Execute `npm run build`. Envie o **conteúdo** de `dist/` para o diretório público do domínio (normalmente `public_html/`). O arquivo `index.html` deve ficar diretamente nesse diretório. O site também funciona em uma subpasta. A hospedagem serve arquivos estáticos e o pacote 3D é carregado quando a seção do doutor se aproxima da tela.

Para revisar o build localmente, use `npm run preview`.
