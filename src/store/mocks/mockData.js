import Titles from '@/store/mocks/titlesData.json'
import Cards from '@/store/mocks/cardsData.json'
import ImageBg from '@/store/mocks/imageBgData.json'
import ImageGalary from '@/store/mocks/imageGalary.json'
import ArticlesData from '@/store/mocks/articlesData.json' 
import headerData from '@/store/mocks/headerData.json' 
import IconsData from '@/store/mocks/iconsData.json' 
export const MoksData = {

     getTitles: async() => {
        return  await Titles;
     }, 
     getCard: async() => {
        return  await Cards;
     }, 
     getImagBg: async() => {
        return  await ImageBg;
     }, 
     getImageGalary: async() => {
        return  await ImageGalary;
     },
     getArticles: async() => {
        return  await ArticlesData;
     },
     getHeaderSectionData: async() => {
        return  await headerData;
     },
     getIconsData: async() => {
      return  await IconsData;
   },
}