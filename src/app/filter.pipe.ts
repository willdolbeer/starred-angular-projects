import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(list: any, field: string, search: string){
        if(!list){
            return null;
        }
        return list.filter(item => item[field].toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
}