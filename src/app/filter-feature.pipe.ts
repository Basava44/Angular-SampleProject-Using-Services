import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFeature',
  pure: false,  
})
export class FilterFeaturePipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    console.log(value);
    console.log(args);
    return value;
  }

}
