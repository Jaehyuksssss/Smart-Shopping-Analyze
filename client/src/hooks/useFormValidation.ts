import { ShoppingState } from '../utils/@types';

export const useFormValidation = (shoppingValue: ShoppingState['value']) => {
  for (const [key, item] of Object.entries(shoppingValue)) {
    console.log(shoppingValue);
    if (!item) {
      switch (key) {
        case 'datePicker':
          alert('날짜를 선택해주세요.');
          break;
        case 'category':
          alert('카테고리를 선택해주세요.');
          break;
        case 'input':
          alert('키워드를 입력해주세요.');
          break;
        case 'timeunit':
          alert('시간대를 선택해주세요.');
          break;
        case 'gender':
          alert('성별을 선택해주세요.');
          break;
        case 'device':
          alert('장치를 선택해주세요.');
          break;
      }
      return false;
    }
  }
  return true;
};
