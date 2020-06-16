import DialogStore from 'store/DialogStore';

// ------------------- //
//  STORE INTERFACES  //
// ----------------  //

export interface IDialogStore {
  dialog?: DialogStore;
}

// --------------------- //
//  CONTENT INTERFACES  //
// ------------------  //

export interface IContent {
  navbar: INavbarContent;
  banner: IBannerContent;
  sections: ISection[];
  footer: IFooterContent;
}

export interface INavbarContent {
  logoUrl: string;
  logoAlt: string;
  links: Array<ILinkContent>;
}

export interface ILinkContent {
  to: string;
  text: string;
}

export interface IBannerContent {
  id?: string;
  url: string;
  text: string;
  buttonText: string;
  buttonTo: string;
}

export interface ISection {
  id: string;
  columns: Array<ISectionColumn>;
}

export interface ISectionColumn {
  background: boolean;
  mobile: boolean;
  elements: Array<ISectionElement>;
}

export interface ISectionElement {
  type: string;
  text?: string;
  url?: string;
  alt?: string;
  variants?: object;
  cards?: ICard[];
  icons?: IIcon[];
  buttonText?: string;
  formSections?: IFormSection[];
  messages?: IMessages;
  markers?: IMarker[];
}

export interface ICard {
  url: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface IIcon {
  name: string;
  caption: string;
}

export interface IFormSection {
  name: string;
  title: string;
  subtitle?: string;
  expandable: boolean;
  inputs: IInput[];
}

export interface IMessages {
  success: IMessage;
  error: IMessage;
  loading: IMessage;
}

export interface IMessage {
  title: string;
  text: string;
}

export interface IInput {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: IOption[];
  rules?: IRules;
  conditions?: ICondition[];
  register?: any;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IRules {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  size?: number;
  fileType?: string | string[];
}

export interface ICondition {
  name: string;
  value: string;
}

export interface IFileInfo {
  name: string;
  size: number;
  url: string | ArrayBuffer;
}

export interface IMarker {
  title: string;
  text: string;
  x: number;
  y: number;
}

export interface IFooterContent {
  logoUrl: string;
  logoAlt?: string;
  email: string;
  phone: string;
  facebook: string;
}
