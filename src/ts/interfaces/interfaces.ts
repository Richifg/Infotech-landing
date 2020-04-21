// content interfaces
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
  formSections?: IFormSection[];
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

export interface IInput {
  name: string;
  type: string;
  label: string;
  rules?: IRules;
  register?: any;
}

export interface IRules {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  size?: number;
  fileType?: string;
}

export interface IFileInfo {
  name: string;
  size: number;
  url: string | ArrayBuffer;
}

export function isFileInfo(data: any): data is IFileInfo {
  return !!(data.name && data.size && data.url);
}
