export type ModalBlockType = {
  active: boolean;
  setActive: (active: boolean) => void;
  titleValue: string;
  onClickEvent: (value: string) => void;
  valueFirstButton: string;
  valueSecondButton: string;
};
