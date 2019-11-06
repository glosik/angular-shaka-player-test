import { Pipe, PipeTransform } from '@angular/core';
/*
 * Strip snake case
 * Usage:
 *   value | rawcase
 * Example:
 *   {{ snake_case | rawcase }}
 *   formats to: snake case
*/

@Pipe({
  name: 'rawcase'
})
export class RawcasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('_').join(' ');
  }

}