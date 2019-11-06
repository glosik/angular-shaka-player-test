import { Pipe, PipeTransform } from '@angular/core';
/*
 * Strip snake case
 * Usage:
 *   value | keyword
 * Example:
 *   {{ snake_case | keyword }}
 *   formats to: snake case
*/

@Pipe({
  name: 'rawcase'
})
export class KeywordPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('_').join(' ');
  }

}