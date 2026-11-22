# Oral Dez Odontologia

Site da Clínica Oral Dez, em Vilhena (RO). A raiz da branch `main` contém a página compilada, pronta para hospedagem estática.

## Integração Git na Hostinger

Use a branch `main` deste repositório, sem subdiretório. Ao implantar essa branch no diretório público do domínio, a Hostinger recebe `index.html`, `assets/` e `media/` prontos para o navegador. Quando a implantação automática estiver desativada, use a opção de implantar a versão mais recente no painel Git da hospedagem.

## Instalação por ZIP

[Baixar o site para a Hostinger](https://raw.githubusercontent.com/RodNegocios/Odontologia-Oral-dez/main/publicacao/Oral-Dez-Hostinger.zip)

Extraia o conteúdo do ZIP na pasta pública do domínio (geralmente `public_html/`), com `index.html` diretamente nessa pasta. Este pacote contém os mesmos arquivos do site servido pela integração Git.

## Desenvolvimento e atualização

Os arquivos editáveis ficam em `app/`. Use Node.js 22.12 ou superior e execute `npm ci` e `npm run dev`. Para gerar a produção, execute `npm run build`. A saída fica em `dist/` e pode ser revisada com `npm run preview`.

Depois de validar um novo build, execute `python3 scripts/publicar.py` na raiz do projeto. O script atualiza os arquivos estáticos da raiz e o ZIP a partir da mesma compilação. Inclua as mudanças no mesmo commit da atualização do código.

Os dados de contato, horários e a biografia vêm do arquivo `Informações`. O retrato do crachá e a foto da fachada são do acervo original. As imagens de objetos odontológicos são ilustrativas.
