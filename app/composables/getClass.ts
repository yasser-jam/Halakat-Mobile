export function getClass(classNumber: any) {
  if (typeof classNumber == 'string')
    return classNumber
  if (classNumber == 1) {
    return 'الصف الأول'
  }
  else if (classNumber == 2) {
    return 'الصف الثاني'
  }
  else if (classNumber == 3) {
    return 'الصف الثالث'
  }
  else if (classNumber == 4) {
    return 'الصف الرابع'
  }
  else if (classNumber == 5) {
    return 'الصف الخامس'
  }
  else if (classNumber == 6) {
    return 'الصف السادس'
  }
  else if (classNumber == 7) {
    return 'الصف السابع'
  }
  else if (classNumber == 8) {
    return 'السف الثامن'
  }
  else if (classNumber == 9) {
    return 'الصف التاسع'
  }
  else if (classNumber == 10) {
    return 'الصف العاشر'
  }
  else if (classNumber == 11) {
    return 'الصف الحادي عشر'
  }
  else if (classNumber == 12) {
    return 'بكالوريا'
  }
  else if (classNumber > 12) {
    return 'طالب جامعي'
  }
  else {
    return 'غير محدد'
  }
}
