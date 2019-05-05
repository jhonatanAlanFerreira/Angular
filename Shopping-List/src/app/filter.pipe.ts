import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(names:string[], busca: string) {
    if(!names || !busca) return names;
    return names.filter(name => name.toLowerCase().indexOf(busca.toLowerCase()) !== -1);
  }
}
