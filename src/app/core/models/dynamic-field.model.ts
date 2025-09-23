export type FieldType = 'text'|'email'|'number'|'date'|'select'|'radio'|'checkbox'|'textarea' | 'file';


export interface FieldOption {
label: string;
value: any;
}


export interface FieldValidatorConfig {
required?: boolean;
minLength?: number;
maxLength?: number;
min?: number;
max?: number;
email?: boolean;
pattern?: string;
}


export interface FieldConfig {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  options?: { label: string; value: any }[];
  validators?: any;
  fullWidth?: boolean;   
  group?: string;
  hidden?: boolean;
  requiredSymbol?: boolean;
  url?:string; 
  readonly?:boolean; 
  value?:string;     
  timeOnly? : boolean;
}


export interface FormConfig {
formName?: string;
controls: FieldConfig[];
}

export interface TableAction {
  icon: string;                 
  severity?: string;           
  action: string;               
  handler?: (row: any) => void;    
}
