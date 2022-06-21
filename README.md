# Reproduction of pnpm and nested tsconfig extends

1. pnpm i
2. pnpm lint
    - Parsing error: File '@vue/tsconfig/tsconfig.json' not found
3. pnpm type-check
    - Successful

Note: The root `tsconfig.json` extends `@my/tsconfig`, which is installed from `my-tsconfig-0.0.1.tgz`, which is packed from `./my-tsconfig` directory, which depends on `@vue/tsconfig`.
