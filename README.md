# Message UI

> This project is still in development and is not ready for production use. Use at your own risk :)

Message UI is designed to be a simple, easy to use, easy to compose and modify UI library for building chat applications. It is built on top of [React](https://reactjs.org/), [Styled-Components](https://styled-components.com/) and [TypeScript](https://www.typescriptlang.org/).

## Installation
Yarn

```
$ yarn add message-ui
```


NPM

```
$ npm install message-ui
```

Finally, import into your project and have fun!

```tsx
import { ComposePanel } from "message-ui";

```

## Usage

### Validating Input

To validate the users input before sending use `isValid` function. This function takes in a string and returns a boolean or object matching `ValidationReturn` type. By default, the input validates that there is at least one character in the string (`return value.trim() !== ""`), but the requirements of your app may require strictor validation. To do this, pass in a function to the `isValid` prop that returns a boolean or `ValidationReturn` object.

```ts

function myValidationFunction(value: string) {
    if (value.length < 5) {
        return false;
    }

    return true;
}

// or

function myValidationFunction(value: string) {
    if (value.length < 5) {
        return {
            valid: false,
            message: "Must be at least 5 characters long"
        }
    }

    return {
        valid: true,
    }
}
```

then pass it to the isValid prop, which is accessible via the `ComposeForm` or `ComposePanel` components depending on your level of customization. For most cases, the `ComposePanel` component will be sufficient.

```tsx
<ComposePanel isValid={myValidationFunction} {...otherProps} />

```
## Development

Please feel free to contribute to this project. If you have any questions, please feel free to open an [issue](https://github.com/kenzic/message-ui/issues/new). Message UI is intended to be just that, a UI library, so integrations with message, or chat APIs is not on the roadmap. However, if you have a suggestion for a feature, please open an issue and I will be happy to discuss it with you.

### Get Started

```bash
$ git clone git://github.com/kenzic/message-ui.git
$ cd message-ui
$ yarn install
$ yarn storybook
```
