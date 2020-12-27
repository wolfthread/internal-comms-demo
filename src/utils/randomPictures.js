import dpt1 from '../img/departments/1.jpg';
import dpt2 from '../img/departments/2.jpg';
import dpt3 from '../img/departments/3.jpg';
import dpt4 from '../img/departments/4.jpg';
import dpt5 from '../img/departments/5.jpg';
import dpt6 from '../img/departments/6.jpg';
import dpt7 from '../img/departments/7.jpg';
import dpt8 from '../img/departments/8.jpg';
import dpt9 from '../img/departments/9.jpg';

export const generateRandomPicture = (type, gender) => {
  const allDpts = [dpt1, dpt2, dpt3, dpt4, dpt5, dpt6, dpt7, dpt8, dpt9];
  switch (type) {
    case 'business':
      const randomPicture = Math.floor(Math.random() * allDpts.length);
      return allDpts[randomPicture];
    case 'user':
      return `https://randomuser.me/api/portraits/${
        gender === 'Female' ? 'women' : 'men'
      }/${60 + Math.floor(Math.random() * 30)}.jpg`;
    default:
      return 'https://source.unsplash.com/random/800x600';
  }
};
