# Demo Feature-Sliced Design Structure

`fsd/example` демонструє мінімальний застосунок магазину, який зібраний за принципами Feature-Sliced Design. 
Код поділено на шари (shared → entities → features → pages → app), а внутрішні залежності йдуть виключно зверху донизу.

## Дерево Каталогу
```
src
├── app            # ініціалізація застосунку, роутер та провайдери
├── pages          # збірка сторінок з фіч та сутностей
├── features       # завершені бізнес-дії (add-to-cart, auth/session)
├── entities       # бізнес-сутності (product, cart, user)
└── shared         # інфраструктура, утиліти, ui-kit
```

Основні файли:
- `shared/api/client.ts` — єдина точка доступу до API/моків.
- `entities/product` — модель та UI картки продукту + хук `useProducts`.
- `entities/cart` — стан кошика через `CartProvider`.
- `entities/user` — модель користувача та `UserProvider` з login/logout.
- `features/add-to-cart` — інкапсулює бізнес-дію додавання в кошик.
- `features/auth/session` — відповідає за login/logout через `AuthPanel`.
- `pages/catalog` та `pages/cart` — комбінують фічі/сутності для сторінок.
- `app/router` + `app/providers` — оболонка застосунку, що керує сторінками та провайдерами.
- `src/index.tsx` — точка входу, що монтує `App`.

## Як читати приклад
1. Починайте зі `src/app/index.tsx` і рухайтесь углиб, щоб побачити як `App` збирає сторінки через провайдери.
2. Відкрийте `pages/catalog/ui/CatalogPage.tsx`, щоб побачити зв'язку сторінки з фічами (AddToCart) та сутностями (ProductCard).
3. Перейдіть у `entities` та `shared`, аби розглянути як виділяються бізнес-дані й загальні сервіси.

## Як запустити у браузері
У репозиторії є кілька архітектурних прикладів, тому кожен з них (у тому числі `fsd/example`) має свій ізольований Vite-проєкт. Щоб підняти тільки цей приклад:

1. `cd fsd/example`
2. Встановіть залежності: `npm install` (або `pnpm install`, `yarn install`)
3. Запустіть дев-сервер: `npm run dev` і відкрийте URL, який покаже Vite (`http://localhost:5173` за замовчуванням)

Додатково доступні команди:
- `npm run build` — зібрати production-бандл
- `npm run preview` — підняти локальний сервер на основі зібраного бандла

Приклад можна розширювати, додаючи нові slices (`orders`, `profile` тощо), дотримуючись того ж принципу: спочатку визначити бізнес-домен → шар → код.
