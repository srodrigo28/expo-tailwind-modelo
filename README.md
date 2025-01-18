
### Página padrão criada

<img src="" alt="não carregou imagem">

### Especial Instalando Expo Native Wild

#### 0. Link
```
https://www.nativewind.dev/getting-started/expo-router
```

#### 1. Crie um projeto Install NativeWind
* Criando projeto
```
npx create-expo-app@latest --template
```

* Instalando depedência Tailwind Native
```
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

#### 3. Setup Tailwind CSS
```
npx tailwindcss init
```

* no arquivo: tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* no arquivo global.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 4.  Add the Babel preset
* Criar o no raiz arquivo: babel.config.js
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

#### 5. Modify your metro.config.js
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
```

#### 6. nata src/app/_layout.tsx
```
import "../styles/global.css"
import { Slot } from "expo-router";

export default function RootLayout(){
    return <Slot/>
}
```

### 7. Rodando o projeto
* caso baixe do git  :: instalar as dependências
```
yarn add expo
```

* agora só rodar o projeto
```
npx expo start
```
