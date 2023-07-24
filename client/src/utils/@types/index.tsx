import { ReactNode } from 'react';

export interface LayoutDefaultProps {
  children?: ReactNode;
}

export interface SelectCategoryProps {
  options: { key: string; label: string }[];
}

export interface RadioButtonProps {
  options: { key: string; label: string }[];
}
