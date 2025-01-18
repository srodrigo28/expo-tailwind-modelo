# Esse repositorio é de um modelo de projeto onde configuramos o Tailwind (Para React Native)

## Linguagens:

![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Como ficou no o Projeto:

**1° Passo:** Crie um projeto em Expo
```
npx create-expo-app@latest --template
```

**2° Passo:** Instale as depedências do NativeWind(Tailwind para React Native)
```
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```
**3° Passo:** Configuração Tailwind CSS
 - Primeiro crie o arquivo `tailwind.config.ts`
    ```
    npx tailwindcss init
    ```

 - No arquivo: `tailwind.config.ts`
    ```
        /** @type {import('tailwindcss').Config} */
        module.exports = {.
            content: ["./src/**/*.{js,jsx,ts,tsx}"],
            presets: [require("nativewind/preset")],
            theme: {
                extend: {},
            },
            plugins: [],
        }
    ```

**4° Passo:** Configurando o NativeWind no arquivo `./src/styles/global.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
**5° Passo:** Configuração do arquivo `./babel.config.js`

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

> NÃO SE ESQUEÇA QUE O ARQUIVO `babel.config.js` DEVE SER CRIADO NO DIRETÓRIO RAÍZ

**6° Passo:** Crie e Modifique o arquivo `./metro.config.js`

```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
```

**7° Passo:** Crie o arquivo: `src/app/_layout.tsx`
```
  import '../styles/global.css'
  import { Slot } from 'expo-router'

  export default function Layout(){
    return <Slot />
  }
```

**8 Passo:** Crie o arquivo `src/app/index.tsx`
```
  import '../styles/global.css'
  import { View, Text, Touchable, TouchableOpacity } from 'react-native'

  export default function index() {
    return (
      <View className='bg-zinc-800 w-screen h-screen gap-4 flex flex-col items-center justify-center'>
          <Text className='font-bold text-xl text-indigo-700'>Olá, Mundo!</Text>

          <TouchableOpacity className='bg-gradient-to-r from-indigo-700 to-indigo-900 w-[100px] h-[30px] rounded'>
            <Text className="text-white font-medium h-full mt-1 text-center">Teste Botão</Text>
          </TouchableOpacity>
      </View>
    )
  }
```

**9° Passo:** Rodando o projeto
 - Caso tenha baixado do git instale as dependências:
    ```
      npm i
          ou
      npm install
    ```

  - Agora é só rodar o projeto
    ```
      npm start
          ou
      npx expo start
    ```

### Link da Documentação:
https://www.nativewind.dev/getting-started/expo-router
