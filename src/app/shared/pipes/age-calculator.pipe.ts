import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalculator',
})
export class AgeCalculatorPipe implements PipeTransform {
  transform(birthDate: string | Date): number {
    if (!birthDate) return 0;

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();

    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
}
