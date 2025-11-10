# @kasymjaparov/uzcbank-icons

Легкая коллекция SVG иконок для React приложений экосистемы "Бакай банк"

## Установка

```bash
npm install @kasymjaparov/uzcbank-icons
```

## Использование

### Базовое использование

```jsx
import {IconProvider, Icon, ICON_TYPES} from '@kasymjaparov/bakai-icons';

function App() {
    return (
        <div>
            <IconProvider/>
            <Icon type={ICON_TYPES.arrowLeft}/>
            <Icon type={ICON_TYPES.settings}/>
            <Icon type={ICON_TYPES.check}/>
        </div>
    );
}
```

### С дополнительными параметрами

```jsx
import {Icon, IconProvider, ICON_TYPES} from '@kasymjaparov/bakai-icons';

function App() {
    return (
        <div>
            <IconProvider/>
            <Icon
                type={ICON_TYPES.star}
                size={24}
                color="#007bff"
                className="custom-icon"
            />
        </div>
    )
        ;
}
```

## Доступные иконки

Пакет включает следующие иконки:


| Тип иконки            | Описание                         |
| --------------------- | -------------------------------- |
| `chevronDown`         | Стрелка вниз                     |
| `chevronRight`        | Стрелка вправо                   |
| `plus`                | Плюс                             |
| `eyeClose`            | Глаз закрыт                      |
| `eyeOpen`             | Глаз открыт                      |
| `info_filled`         | Информация (заливка)             |
| `info`                | Информация                       |
| `warning`             | Предупреждение                   |
| `checkbox_filled`     | Чекбокс выбран                   |
| `checkbox_outline`    | Чекбокс пустой                   |
| `arrowUp`             | Стрелка вверх                    |
| `plus_filled`         | Плюс (заливка)                   |
| `close_filled`        | Крестик (заливка)                |
| `close`               | Крестик                          |
| `asterisk`            | Звёздочка                        |
| `warning_outline`     | Предупреждение (контур)          |
| `file_csv`            | Файл CSV                         |
| `file_pdf`            | Файл PDF                         |
| `file_xls`            | Файл XLS                         |
| `settings_adjust`     | Настройки / регулировка          |
| `arrowRight`          | Стрелка вправо                   |
| `dotsHorizontal`      | Три точки (горизонтально)        |
| `dotsHorizontalBold`  | Три точки (жирные)               |
| `analytics`           | Аналитика                        |
| `dashboard`           | Дашборд                          |
| `search`              | Поиск                            |
| `link`                | Ссылка                           |
| `refresh`             | Обновить                         |
| `checkBold`           | Галочка жирная                   |
| `check`               | Галочка                          |
| `trash`               | Корзина                          |
| `checkDouble`         | Двойная галочка                  |
| `closeLarge`          | Большой крестик                  |
| `closeMedium`         | Средний крестик                  |
| `closeSmall`          | Малый крестик                    |
| `closeThin`           | Тонкий крестик                   |
| `download`            | Скачать                          |
| `fullscreen`          | Полный экран                     |
| `arrowDown`           | Стрелка вниз                     |
| `checkMini`           | Маленькая галочка                |
| `clockBold`           | Часы (жирные)                    |
| `clockSmall`          | Часы маленькие                   |
| `clockRefresh`        | Часы с обновлением               |
| `play`                | Воспроизведение                  |
| `instagram`           | Instagram                        |
| `facebook`            | Facebook                         |
| `bell`                | Уведомления                      |
| `user`                | Пользователь                     |
| `walletCheck`         | Кошелёк с галочкой               |
| `documentCertificate` | Документ сертификат              |
| `calendarClock`       | Календарь с часами               |
| `like`                | Лайк                             |
| `phone`               | Телефон                          |
| `calendarMini`        | Маленький календарь              |
| `medal`               | Медаль                           |
| `cloudUpload`         | Загрузка в облако                |
| `calendar`            | Календарь                        |
| `pencil`              | Карандаш                         |
| `warningTriangle`     | Треугольный восклицательный знак |
| `growth`              | Рост / график                    |
| `edit`                | Редактирование                   |
| `flag`                | Флаг                             |
| `copy`                | Копировать                       |
| `grid`                | Сетка                            |
| `menu`                | Меню                             |
| `telegram`            | Telegram                         |


## Справочник API

### Компонент Icon

#### Параметры

| Параметр    | Тип         | По умолчанию     | Описание                  |
|-------------|-------------|------------------|---------------------------|
| `type`      | `TIconType` | **обязательный** | Тип отображаемой иконки   |
| `size`      | `number`    | `16`             | Размер иконки в пикселях  |
| `color`     | `string`    | `"currentColor"` | Цвет иконки               |
| `className` | `string`    | `""`             | Дополнительные CSS классы |

## Поддержка TypeScript

Пакет включает определения TypeScript. Константа `ICON_TYPES` обеспечивает типобезопасный доступ ко всем доступным
иконкам:

```typescript
import {ICON_TYPES, TIconType} from '@kasymjaparov/bakai-icons';

// Типобезопасное использование иконок
const iconType: TIconType = ICON_TYPES.settings;
```

## Требования

- React 16.8+ (поддержка хуков)
- Включена поддержка TypeScript

## Лицензия

Лицензия MIT - см. файл LICENSE для подробностей.

## Автор

Kasymjaparov Adilet