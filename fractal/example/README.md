# Demo Fractal Architecture

`fractal/example` — це той самий мінімальний магазин, але зібраний за принципами фрактальної архітектури.  
Кожен елемент (кнопка, модуль, застосунок) має однакову внутрішню структуру: власний `index.ts`, директорії `ui/`, `model/`, `lib/`, тому його можна переносити та розвивати ізольовано.

## Дерево Каталогу
```
src
├── app/             # застосунок як окремий фрактал (model + ui)
├── modules/         # домени/фічі (cart, catalog, product, user, auth-panel, add-to-cart)
│   └── */           # кожен модуль: index.ts + піддиректорії ui/, model/, styles
├── shared/          # повторно використовувані блоки (button, api, hooks, config, types)
└── index.tsx        # точка входу, що монтує App
```

Ключові блоки:
- `modules/cart` — модель кошика (`CartProvider`, `useCartStore`), типи та UI сторінки.
- `modules/catalog` — сторінка каталогу, яка збирає `ProductCard`, `AddToCartButton` та `useProducts`.
- `modules/product` — хук для отримання продуктів, типи й UI картки.
- `modules/user` — модель користувача (login/logout) + віджет `UserBadge`.
- `modules/add-to-cart` та `modules/auth-panel` — окремі фрактали для бізнес-дій.
- `shared/button`, `shared/hooks`, `shared/api`, `shared/config`, `shared/types` — повторюють ті ж правила (index + підкаталоги).

Щоб побачити фрактальність у дії:
1. Почніть із `src/app/ui/App.tsx` — у верхнього рівня теж є `model/` (провайдери) та `ui/`.
2. Спустіться до `modules/catalog` → `modules/product` → `shared` і зверніть увагу, що структура всюди однакова.
3. Усі імпорти йдуть тільки через `index.ts`, тому кожен блок виглядає як міні-проєкт із публічним API.

## Як запустити приклад
1. `cd fractal/example`
2. Встановіть залежності: `npm install` (або `pnpm install`, `yarn install`)
3. Запустіть дев-сервер: `npm run dev` і відкрийте адресу від Vite (`http://localhost:5173` за замовчуванням)

Додатково:
- `npm run build` — зібрати production-бандл
- `npm run preview` — локально переглянути зібраний бандл

Щоб додати новий фрактал, просто створіть папку з `index.ts`, додайте `ui/`, `model/`, `lib/` і експортуйте тільки те, що формує публічний API модуля.
