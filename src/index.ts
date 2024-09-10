import Print from './print';

interface Options {
  noPrint?: string[];
  documentTitle?: string;
  style?: string;
  wrapClass?: string;
  processor?: (el: HTMLElement) => HTMLElement;
  onPrintDialogClose?: () => void;
}

interface PrintDOM {
  (el: HTMLElement, options?: Options): void;
}

const printDOM: PrintDOM = (el, options) => new Print(el, options) && undefined;

export default printDOM;
