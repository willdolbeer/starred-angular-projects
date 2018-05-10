import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
        
    // Filter project list by search term in the specified field
    transform(list: any, field: string, search: string){
        if(!list){
            return null;
        }
        return list.filter(item => item[field].toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
}