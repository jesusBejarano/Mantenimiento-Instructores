import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'glxDefaultImg'
})
export class GlxDefaultImgPipe implements PipeTransform {

  transform(url: string): string {
    return url ? url : 'assets/img-not-found.png';
  }

}
