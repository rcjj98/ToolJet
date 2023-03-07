/** {@link NbTextbox} */
export interface NbTextboxProps {
  /** The value entered in the textbox */
  value: string;
  /** The caption/heading of the textbox */
  caption?: string;
  /** The name attribute for the input tag in the textbox */
  name: string;
  /** The size of the textbox */
  size?: "large" | "extra-large";
  /** A boolean to disable the textbox. true for disable, else false */
  disabled?: boolean;
  /** The placeholder value for the textbox */
  placeholder?: string;
  /** A boolean to display error in the textbox. true for indicating error, else false */
  error?: boolean;
  /** A boolean to display success in the textbox. true for indicating success, else false */
  success?: boolean;
  /** An icon to be put at the start of the textbox */
  startIcon?: string;
  /** An icon to be put at the end of the textbox */
  endIcon?: string;
  /** An icons array to be put at the end of the textbox */
  endIcons?: any[];
  /**
   * @method onChange
   * @param data a object containing two keys 1) "name" - name prop 2) "value" - value entered in the textbox
   * @returns void
   */
  onChange?: (data: any) => void;
  /** Validations array for the value entered in the textbox  */
  validations?: any[];
  /** classname of the textbox */
  className?: string;
  /** A boolean to hide the label of the textbox. true to hide it, else false */
  hideCaption?: boolean;
  /** helpTask */
  helpTask?: any;
  /** A boolean for visibility of the textbox. true to make it visible, else false */
  visibility?: boolean;
    /** style for the textbox */
  style?: any;
  /** unique id for the textbox */
  id?: string;
  mandatory?: boolean;
  onTask?: (data: any) => void;
  variant?: "standard" | "material" | "label-left";
  color?: string;
  captionId?: string;
  fieldId?: string;
  helpTaskId?: string;
  iconId?: string;
  uiTask?:boolean;
}
