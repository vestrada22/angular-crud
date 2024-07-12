import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true,
})

export class ImagePipe implements PipeTransform {
  defaultImage: string = 'https://t3.ftcdn.net/jpg/02/35/35/40/360_F_235354051_yz3envzxnH9dulycguP6l4Bh3Xx0BPZ0.jpg'
  transform(imageUrl: string, placeholder: string = this.defaultImage): string {
    return imageUrl ? imageUrl : placeholder;
  }
}