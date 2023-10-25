import {defineStore} from 'pinia';
import {APiInstance} from '@/store/api/config';
import {MoksData} from '@/store/mocks/mockData';


export const useDataStore = defineStore('dataStore',{

    state: () => ({
        titles:[],
        imageCards:[],
        imageGalary:{},
        imageBackground:[],
        cart:[],
        icons: [],
        commentsList:[],
        categories:[],
        errors: [],
        statusCode: 0
    }),
    actions:{
        async getTitleASync(){
            return MoksData.getTitles();
        },
        async getCardASync(){
            return MoksData.getCard();
        },
        async getImagBgASync(){
            return MoksData.getImagBg();
        },
        async getImageGalaryASync(){
            return MoksData.getImageGalary();
        },
        async getArticlesASync(){
            return MoksData.getArticles();
        },
        async getIconsASync(){
            return MoksData.getIconsData();
        },
    },
})