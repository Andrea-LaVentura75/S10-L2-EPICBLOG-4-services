import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold',
})
export class BoldPipe implements PipeTransform {
  transform(value: string | string[]): string {
    if (Array.isArray(value)) {
      return value.map((tag) => tag.toUpperCase()).join(', ');
    }
    return value.toUpperCase();
  }
}
