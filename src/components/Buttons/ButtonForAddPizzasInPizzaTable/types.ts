import { FunctionComponent, SVGProps } from 'react';

export type ButtonForAddPizzasInPizzaTableType = {
  Logo: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  onClick: () => void;
};
