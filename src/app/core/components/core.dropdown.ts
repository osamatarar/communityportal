import { Component, EventEmitter, Input, Output, OnInit, forwardRef, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectModule } from 'primeng/select';
import { APIResponse, GenericHttpService } from '@/services/genericHttpSerivce';

@Component({
  selector: 'core-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, ProgressSpinnerModule],
  template: `
    @if(label) {  <label>{{ label }}</label>  }
    <div class="relative">
      <p-select
        [options]="options"
        [ngModel]="innerValue"
        (ngModelChange)="onValueChange($event)"
        optionLabel="name"
        optionValue="code"
        [placeholder]="placeholder"
        [filter]="filter"
        [disabled]="disabled"
        (onChange)="onSelectionChange($event)"
        appendTo="body"
      >
      </p-select>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CoreDropdownComponent),
      multi: true,
    },
  ]
})
export class CoreDropdownComponent implements OnInit , ControlValueAccessor {
  @Input() url: string ='';
  @Input() label: string = '';
  @Input() optionLabel: string = 'Name';
  @Input() optionValue: string = 'Id';
  @Input() placeholder: string = 'Please Select';
  @Input() disabled: boolean = false;
  @Input() filter: boolean = true;
  @Input() skipLoader: boolean = false;
  @Output() selectedValueChange = new EventEmitter<any>();
  @Output() selectedObjectChange = new EventEmitter<any>();

  options: any[] = [];
  innerValue: any; // Internal value for form control

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(@Inject(GenericHttpService) private httpService: GenericHttpService) {}
   ngOnInit(): void {
    if (this.url) this.loadOptions();
  }

  private loadOptions(): void {
    this.httpService.getAll(this.url, { skipLoader: this.skipLoader }).subscribe((data: any) => {
      const response = data as APIResponse<any[]>;
      if (response && response.IsSuccess && Array.isArray(response.Result)) {
        this.options = response.Result.map(item => ({
          name: item[this.optionLabel],
          code: item[this.optionValue],
        }));
        // Ensure innerValue is still valid after options are loaded
        if (this.innerValue) {
          const validOption = this.options.find(option => option.code === this.innerValue);
          if (!validOption) {
            this.innerValue = null; // Reset if the current value is invalid
            this.onChange(null);
          }
        }
      }
    });
  }

  onValueChange(value: any): void {
    this.innerValue = value;
    this.onChange(value); // Notify form control of value change
    this.onTouched(); // Mark as touched
    this.onSelectionChange({ value }); // Maintain existing event emission
  }

  onSelectionChange(event: any): void {
    this.selectedValueChange.emit(event.value);
    const fullObject = this.options.find(o => o.code === event.value);
    this.selectedObjectChange.emit(fullObject);
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.innerValue = value; // Set value from form control
  }

  registerOnChange(fn: any): void {
    this.onChange = fn; // Register callback for value changes
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Register callback for touch events
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled; // Update disabled state
  }
}