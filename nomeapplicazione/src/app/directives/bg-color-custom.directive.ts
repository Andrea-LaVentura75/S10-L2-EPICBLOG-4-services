import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgColorCustom]',
})
export class BgColorCustomDirective {
  constructor(private ref: ElementRef) {
    const randomColor = this.getRandomColor();
    this.ref.nativeElement.style.backgroundColor = randomColor;
    console.log(`Background color set to: ${randomColor}`);
  }

  generateRandomColors(count: number = 10): string[] {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
      colors.push(this.getRandomColor());
    }
    return colors;
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
