import { Pipe, PipeTransform } from '@angular/core';
import { MobileServices } from './mobile-data.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor(private Data: MobileServices){}

  transform(value: any, filterData: string, search: boolean) {

    if (filterData.length < 2) {
      this.Data.searchCount.next(value.length);
      return value;
    }

    

    if(search){
      filterData = filterData.replace(' ','').toLowerCase();
      const resultArray = [];
      for (const item of value) {
        const name = item.model ? item.model.toLowerCase() : item.name.toLowerCase();
        if (name.search(filterData) >= 0) resultArray.push(item);
      }
      this.Data.searchCount.next(resultArray.length);
      return resultArray;
    }
    this.Data.searchCount.next(value.length);
    return value;
  }

}