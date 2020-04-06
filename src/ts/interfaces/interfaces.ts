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
  imgUrl: string;
  imgAlt?: string;
  text: string;
  buttonText: string;
}
