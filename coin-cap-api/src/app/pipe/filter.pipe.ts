import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string= '') {
    var upperLetter = filterString.toUpperCase();
    if (!value){
      return null;
    } 
    if (!filterString || filterString === ''){
      return value;
    } 
    return value.filter((list: any) => 
      list['name']?.toUpperCase()?.startsWith(upperLetter));
  }
}
