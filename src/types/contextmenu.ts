export interface ContextmenuItem {
  text?: string;
  subtext?: string;
  divider?: boolean;
  hide?: boolean;
  children?: ContextmenuItem[];
  handler?: (el: HTMLElement) => void;
}
