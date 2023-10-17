export interface Title {
  title: string;
}

export interface NavLinkParams {
  href: string;
  key: string;
  label: string;
}

export interface FeatureParams extends Title {
  icon: string;
  variant: string;
  description: string;
}

export interface CommonLinkParams extends Title {
  links: string[];
}

export interface FooterContactParams extends Title {
  links: { label: string; value: string }[];
}
