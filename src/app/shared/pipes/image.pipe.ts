import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true,
})
export class ImagePipe implements PipeTransform {
  transform(imageUrl: string, placeholder: string = 'assets/placeholder.png'): string {
    return imageUrl ? imageUrl : placeholder;
  }
}