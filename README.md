
# Vite로 생성된 프로젝트에서 vite-plugin-svgr 을 이용하여 SVG를 가져오는 셋팅 샘플

### 관련 링크

---

[GitHub - pd4d10/vite-plugin-svgr: Vite plugin to transform SVGs into React components](https://github.com/pd4d10/vite-plugin-svgr#options)

### 설명

---

- Vite로 생성된 프로젝트에서 vite-plugin-svgr 을 이용하여 SVG를 가져오는 방법
- CRA로 만든 프로젝트와 다르게 svg 를 ReactComponet로 호출하는데 문제가 있어 문서로 남긴다.
- 구글링 결과로 찾은 방식을 적용하더라도 빌드시 아래와 같은 오류가 발생한다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c657c363-a545-46af-be0b-552597cbc785/9d345faf-6bc8-4207-9ae6-aa99b93c24be/Untitled.png)

### 적용방법

---

1. 자신이 사용하는 패키지 매니저에 맞게 vite-plugin-svgr를 설치해준다.

```jsx
# npm
npm install --save-dev vite-plugin-svgr

# yarn
yarn add -D vite-plugin-svgr

# pnpm
pnpm add -D vite-plugin-svgr
```

1. vite.config.ts 에서 해당 플러그인을 추가해준다.

```jsx
// vite.config.ts

import svgr from "vite-plugin-svgr";

export default {
  plugins: [svgr()],
};
```

1. 타입 스크립트 에서 vite-plugin-svgr를 인식 시키기 위하여 vite-env.d.ts와 tsconfig.json를 수정해준다.

```jsx
//vite-env.d.ts

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```

```jsx
//tsconfig.json

{
  "compilerOptions": {
		/*svg*/
    "types": ["vite-plugin-svgr/client"]
  },
	"include": ["images.d.ts"],
}
```

1. SVG를 호출한다. 이때 확장자를 .svg?react로 설정하게 된다.
.svg?react 으로 호출시 vite-plugin-svgr에서 정의한 React.ComponentProps<"svg"> 타입으로 가져오고
.svg 로 호출시 nodemoudule에서 정의한 string 타입으로 가져오게된다.

```jsx
import SvgLogo from "./assets/vite.svg?react";
import SvgTitle from "./assets/vite.svg";
import JpgLogo from "./assets/vite.jpg";
import PngLogo from "./assets/vite.png";
```
