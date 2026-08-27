# Site Dra. Mel Salves

Esta pasta contém a entrega completa em duas versões:

- `codigo-fonte/`: projeto Next.js/TypeScript editável e compatível com Vercel.
- `site-estatico/`: arquivos compilados prontos para hospedagem estática.

## Desenvolvimento local

```bash
cd codigo-fonte
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

O resultado será gerado em `codigo-fonte/out`.

## Publicação

- Vercel: importe a pasta `codigo-fonte` como projeto Next.js.
- Hospedagem estática: publique o conteúdo de `site-estatico` na raiz do domínio.
