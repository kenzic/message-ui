# Message UI

> This project is still in development and is not ready for production use. Use at your own risk :)

Message UI is designed to be a simple, easy to use, easy to compose and modify UI library for building chat applications. It is built on top of [React](https://reactjs.org/), [Styled-Components](https://styled-components.com/) and [TypeScript](https://www.typescriptlang.org/).

## Installation
Yarn

```
$ yarn add message-ui styled-components
```


NPM

```
$ npm install message-ui styled-components
```

Finally, import into your project and have fun!

```tsx
import { ComposePanel } from "message-ui";

```

## Usage

### Simple App

```js

import React from "react";
import { ChatWindow, ChatList, BubbleMessage, ComposePanel } from "message-ui";

const ChatApp = () => {
  // useChatAPI is not a real hook, but you get the idea
  // it's a stand in for your integration with a server that supports messages
  const { messages, input, setInput, append, reload, isLoading } = useChatAPI();

  return (
    <>
      <ChatWindow>
        {messages.length ? (
          <ChatList>
            {messages.map((message, index) =>
              <BubbleMessage message={message} key={index} />
            )}
          </ChatList>
        ) : null}
      </ChatWindow>
      <ComposePanel
        input={input}
        onSend={append}
        onReload={reload}
        disabled={isLoading}
        onInputChange={setInput} />
    </>
  );
};
```

### Customizing Components

Message UI is designed to be easy to customize. All components are built using styled-components, so you can easily override the styles of any component. For example, if you wanted to change the style of the chat bubble `BubbleMessage` component, you could do the following:

```tsx
import { BubbleMessage } from "message-ui";

const MyBubbleMessage = styled(BubbleMessage)`
    font-size: 1.5rem;
    color: ${(props) => (props.role === "user" ? "green" : "yellow")};
    background-color: ${(props) => (props.role === "user" ? "yellow" : "green")};
`;

```

### Validating Input

To validate the users input before sending use `validate` function. This function takes in a string and returns a `boolean` or object matching `Validation` type. By default, the input validates that theres at least one character in the string (`return value.trim() !== ""`), but the requirements of your app may require stricter validation. To do this, pass in a function to the `validate`:

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
then pass it to the `validate` prop, which is accessible via the `ComposeForm` or `ComposePanel` components depending on your level of customization. For most cases, the `ComposePanel` component will be sufficient.

```tsx
<ComposePanel validate={myValidationFunction} {...otherProps} />
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
