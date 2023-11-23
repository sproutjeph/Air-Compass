interface ISubMenu {
  href: string;
  title: string;
}

export interface ILandingMenuLink {
  id: number;
  title: string;
  href: string;
  Icon: any;
  subMenu?: ISubMenu[];
}

export interface ITech {
  id: number;
  title: string;
  src: string;
  alt: string;
  addjust?: boolean;
}

export interface IChild {
  title: string;
  href: string;
  Icon: any;
  subMenu?: ISubMenu[];
}
export interface IMenuLink {
  group: string;
  children: IChild[];
}
