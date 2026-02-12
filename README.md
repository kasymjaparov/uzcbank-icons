# @kasymjaparov/uzcbank-icons

Легкая коллекция SVG иконок для UZCNACBANK

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
|-----------------------|----------------------------------|
| `analytics`           | Аналитика                        |
| `app`                 | Приложение                       |
| `arrowDown`           | Стрелка вниз                     |
| `arrowRight`          | Стрелка вправо                   |
| `arrowUp`             | Стрелка вверх                    |
| `asterisk`            | Звёздочка                        |
| `bell`                | Уведомления                      |
| `calendar`            | Календарь                        |
| `calendarClock`       | Календарь с часами               |
| `calendarMini`        | Маленький календарь              |
| `checkBold`           | Галочка жирная                   |
| `checkDouble`         | Двойная галочка                  |
| `checkMini`           | Маленькая галочка                |
| `checkbox_filled`     | Чекбокс выбран                   |
| `checkbox_outline`    | Чекбокс пустой                   |
| `chevronDown`         | Стрелка вниз                     |
| `chevronRight`        | Стрелка вправо                   |
| `clockRefresh`        | Часы с обновлением               |
| `clockSeven`          | Часы семь                        |
| `clockZero`           | Часы ноль                        |
| `close`               | Крестик                          |
| `close_filled`        | Крестик (заливка)                |
| `cloudUpload`         | Загрузка в облако                |
| `copy`                | Копировать                       |
| `dashboard`           | Дашборд                          |
| `documentCertificate` | Документ сертификат              |
| `dotsHorizontalBold`  | Три точки (жирные)               |
| `download`            | Скачать                          |
| `edit`                | Редактирование                   |
| `eyeClose`            | Глаз закрыт                      |
| `eyeOpen`             | Глаз открыт                      |
| `facebook`            | Facebook                         |
| `file_csv`            | Файл CSV                         |
| `file_pdf`            | Файл PDF                         |
| `file_xls`            | Файл XLS                         |
| `fullscreen`          | Полный экран                     |
| `golf`                | Гольф                            |
| `growth`              | Рост / график                    |
| `info`                | Информация                       |
| `info_filled`         | Информация (заливка)             |
| `instagram`           | Instagram                        |
| `like`                | Лайк                             |
| `link`                | Ссылка                           |
| `medal`               | Медаль                           |
| `menu`                | Меню                             |
| `pencil`              | Карандаш                         |
| `phone`               | Телефон                          |
| `plus`                | Плюс                             |
| `plus_filled`         | Плюс (заливка)                   |
| `refresh`             | Обновить                         |
| `search`              | Поиск                            |
| `settings_adjust`     | Настройки / регулировка          |
| `telegram`            | Telegram                         |
| `trash`               | Корзина                          |
| `user`                | Пользователь                     |
| `wallet`              | Кошелёк                          |
| `warningTriangle`     | Треугольный восклицательный знак |
| `warning_outline`     | Предупреждение (контур)          |
| `youtube`             | YouTube                          |
| `lock`                | Замок                            |
| `unlock`              | Замок 2                          |



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