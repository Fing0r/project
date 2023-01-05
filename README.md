## Запуск проекта

`npm install` - установка зависимостей

`npm run start:dev` или `npm run start:dev:vite` - Запуск frontend проекта на webpack dev server или vite + backend

---

## Скрипты

- `npm run start`: Запуск frontend проекта на webpack dev server
- `npm run start:dev`: Запуск frontend проекта на webpack dev server + backend
- `npm run start:vite`: Запуск frontend проекта на vite
- `npm run start:dev:vite`: Запуск frontend проекта на vite + backend
- `npm run start:dev:server`: Запуск backend сервера
- `npm run build:dev`: Сборка в dev режиме (не минимизирован)
- `npm run build:prod`: Сборка в prod режиме
- `npm run analyze:dev`: Запуск анализатора бандла в dev режиме
- `npm run analyze:prod`: Запуск анализатора бандла в prod режиме
- `npm run lint:ts`: Проверка ts файлов линтером
- `npm run lint:ts:without-warning`: Проверка ts файлов линтером без warning
- `npm run lint:ts:fix`: Исправление ts файлов линтером
- `npm run lint:scss`: Проверка scss файлов style линтером 
- `npm run lint:scss:fix`: Исправление scss файлов style линтером
- `npm run test:unit`: Запуск unit тестов с jest
- `npm run test:ui`: Запуск скриншотных тестов с loki
- `npm run test:ui:ok`: Подтверждение новых скриншотов
- `npm run test:ui:ci`: Запуск скриншотных тестов в CI
- `npm run test:ui:json`: Генерация json отчета для скриншотных тестов
- `npm run test:ui:html`: Генерация HTML отчета для скриншотных тестов
- `npm run test:ui:report`: Генерация полного отчета для скриншотных тестов
- `npm run test:e2e`: Запуск Cypress тестов
- `npm run storybook`: Запуск Storybook
- `npm run storybook:build`: Сборка storybook билда
- `npm run saveReport`: Сохранение отчета для скриншотных тестов в отдельную ветку report и push их в репозиторий
- `npm run prepare`: Прекоммит хуки
- `npm run generate:slice`: Скрипт для генерации FSD слайсов

---

## Архитектура

Проект написан в соответствии с методологией Feature-Sliced Design

Документация методологии [Feature-Sliced Design](https://feature-sliced.design/docs)

---

## Переводы

Для переводов в проекте используется библиотека i18next.
Файлы переводов хранятся в папке public/locales.

Для комфортной работы рекомендуется установить плагин для вашей IDE
Для webstorm - [I18n Support](https://plugins.jetbrains.com/plugin/12981-i18n-support)

Документация библиотеки [react-i18next](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов: 
- unit тестирование на jest - `npm run test:unit`
- тестирование компонентов с React testing library - `npm run test:unit`
- скриншотное тестирование с loki - `npm run test:ui`
- e2e тестирование с Cypress - `npm run test:e2e`
 
[Документация тестирования](/docs/tests.md)

---

## Линтинг

Для проверки кода в проетке используется:
- для typescript - eslint

    `npm run lint:ts`: - Проверка ts файлов линтером

    `npm run lint:ts:without-warning`: - Проверка ts файлов линтером без warning

    `npm run lint:ts:fix`: - Исправление ts файлов линтером
- для стилей - stylelint

    `npm run lint:scss`: - Проверка scss файлов style линтером
    
    `npm run lint:scss:fix`: - Исправление scss файлов style линтером

Также для контроля за архитектурными принципами используется самописный eslint plugin *eslint-plugin-check-paths-for-fsd-methodology*.
Правила плагина:
- **absolute-and-relative-path-checker** - запрещает использовать абсолютные импорты в рамках одного модуля
- **public-api-imports** - проверяет корректность использования слоев с точки зрения FSD 
    (слой может использовать только нижележащие слои)
- **layer-imports** - разрешает импорт других модулей только из public api. Имеет auto fix

---

## Storybook

Для каждого компонента описываются стори кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Стори кейсы создаются рядом с файлом компонента с расширением *.stories.tsx

Пример:

```typescript jsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextTheme } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'Shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
    text: 'Тест',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Тест',
    text: 'Тест',
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
```

Запуск Storybook: `npm run storybook`

Документация [Storybook.](https://storybook.js.org/docs/react/get-started/introduction)
Подробнее о [Storybook](/docs/storybook.md) в проекте.

---

## Конфигурация

В проекте используется два конфига:
- Webpack - ./config/build
- Vite - vite.config.ts

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука
  
В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов, автоматического создания документации на слои и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
Там где это необходимо, переиспользуемые сущности нужно нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[useDynamicModule](src/shared/lib/hooks/useDynamicModule.ts)

---

## Сущности (entities)

- [Article](src/entities/Article/README.md)
- [Comment](src/entities/Comment/README.md)
- [Country](src/entities/Country/README.md)
- [Currency](src/entities/Currency/README.md)
- [Notification](src/entities/Notification/README.md)
- [Profile](src/entities/Profile/README.md)
- [Rating](src/entities/Rating/README.md)
- [User](src/entities/User/README.md)

## Фичи (features)

- [AddCommentForm](src/features/AddCommentForm/README.md)
- [ArticleCommentList](src/features/ArticleCommentList/README.md)
- [ArticleRating](src/features/ArticleRating/README.md)
- [ArticleRecommendationsList](src/features/ArticleRecommendationsList/README.md)
- [AuthByUsername](src/features/AuthByUsername/README.md)
- [DropdownAvatar](src/features/DropdownAvatar/README.md)
- [EditableProfileCard](src/features/EditableProfileCard/README.md)
- [LangSwitcher](src/features/LangSwitcher/README.md)
- [NotificationsButton](src/features/NotificationsButton/README.md)
- [ProfileRating](src/features/ProfileRating/README.md)
- [ThemeSwitcher](src/features/ThemeSwitcher/README.md)

## Виджеты (widgets)

- [Navbar](src/widgets/Navbar/README.md)
- [Page](src/widgets/Page/README.md)
- [PageError](src/widgets/PageError/README.md)
- [PageLoader](src/widgets/PageLoader/README.md)
- [Sidebar](src/widgets/Sidebar/README.md)

## Страницы (page

- [AboutPage](src/pages/AboutPage/README.md)
- [AdminPanelPage](src/pages/AdminPanelPage/README.md)
- [ArticleDetailPage](src/pages/ArticleDetailPage/README.md)
- [ArticleEditPage](src/pages/ArticleEditPage/README.md)
- [ArticlesPage](src/pages/ArticlesPage/README.md)
- [ForbidenPage](src/pages/ForbidenPage/README.md)
- [MainPage](src/pages/MainPage/README.md)
- [NotFoundPage](src/pages/NotFoundPage/README.md)
- [ProfilePage](src/pages/ProfilePage/README.md)
