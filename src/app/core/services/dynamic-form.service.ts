import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { FormConfig, FieldConfig } from '../models/dynamic-field.model'


@Injectable({ providedIn: 'root' })
export class DynamicFormService {

    buildForm(config: FormConfig): FormGroup {
        const group: { [key: string]: FormControl } = {};
        group["ID"] = new FormControl(null);
        config.controls.forEach(field => {
        const control = new FormControl(field.value, this.mapValidators(field.validators));
        group[field.name] = control;
        });
        return new FormGroup(group);
    }


    private mapValidators(validators?: any) {
        const arr: ValidatorFn[] = [];
        if (!validators) return arr;
        if (validators.required) arr.push(Validators.required);
        if (validators.minLength) arr.push(Validators.minLength(validators.minLength));
        if (validators.maxLength) arr.push(Validators.maxLength(validators.maxLength));
        if (validators.email) arr.push(Validators.email);
        if (validators.min !== undefined) arr.push(Validators.min(validators.min));
        if (validators.max !== undefined) arr.push(Validators.max(validators.max));
        if (validators.pattern) arr.push(Validators.pattern(validators.pattern));
        return arr.length ? arr : null;
    }
}