import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restrictStr'
})
export class RestrictStrPipe implements PipeTransform {

  transform(value: String, ...args: any[]): String {
    let result;
    result = value;
    if(value.length > 40){
      result= value.substring(0,40)+"...";
    }
    return result;
  }

}
