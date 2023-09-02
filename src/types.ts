export interface Message {
  id: string
  createdAt?: Date
  content: string
  role: 'user' | 'assistant'
  name?: string
}

export interface ChatListProps {
  autoScroll?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface BubbleMessageProps {
  message: Message
}

export interface HeaderProps {
  className?: string;
  children: React.ReactNode;
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
}

export interface Validation {
  valid: boolean;
  message: string;
}
export interface ComposeProps {
  disabled: boolean;
  input: string;
  onSend?: (value: Message) => Promise<void>;
  onSubmit?: (value: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onReload?: () => void;
  onInputChange: (input: string) => void;
  onError?: (error: string) => void;
  validate?: (value: string) => boolean | Validation;
}

export interface ChatPanelProps extends ComposeProps {
  id?: string;
  stop?: () => void;
  onReload?: () => void;
}
