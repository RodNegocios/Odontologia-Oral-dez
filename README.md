# Oral Dez Odontologia

Página institucional da clínica em Vilhena, RO. Os dados de contato, horários e a biografia vêm do arquivo `Informações`. O retrato do crachá e a foto da fachada são do acervo original. As imagens de objetos odontológicos são ilustrações produzidas para os tratamentos.

## Arquivo pronto para hospedagem

[Baixar o site para a Hostinger](https://raw.githubusercontent.com/RodNegocios/Odontologia-Oral-dez/main/publicacao/Oral-Dez-Hostinger.zip)

O ZIP contém a página e os recursos do site. No gerenciador de arquivos da Hostinger, abra a pasta pública do domínio (geralmente `public_html/`) e extraia o ZIP ali. O arquivo `index.html`, as pastas `assets/` e `media/` devem ficar diretamente dentro dessa pasta. O pacote já está compilado.

## Desenvolvimento

Use Node.js 22.12 ou superior. Instale as dependências com `npm ci` e execute `npm run dev`. A página usa React, Vite e os efeitos DriftWall, ScrollStack e Lanyard adaptados das referências React Bits fornecidas.

## Atualizar o pacote de publicação

Depois de editar o site, execute `npm run build`. Para atualizar o ZIP do repositório, compacte o **conteúdo** de `dist/` com `index.html` na raiz. Em sistemas com `zip` instalado, execute esta linha na raiz do projeto.

```sh
(cd dist && zip -q -r -FS ../publicacao/Oral-Dez-Hostinger.zip .)
```

Para revisar o build localmente, use `npm run preview`.
