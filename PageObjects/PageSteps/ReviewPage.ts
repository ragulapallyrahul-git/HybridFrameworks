import {Page} from '@playwright/test'
import {Webpage} from '../../Commons/uidata/uicommon'
import Rpage from '../PageElements/ReviewPage.json'

class ReviewPageclass
{
    page: Page;
    web: Webpage;

    constructor(page: Page)
    {
      this.page = page; //intializing page
      this.web = new Webpage(page); //intializing common methods & functions
    }
    async checkOrangeLink()
    {
        this.web.checkVisible(Rpage.XAddEmployeeLink);
    }
    async clickOnBack()
    {
        this.web.myFrameDataClick(Rpage.XFrame,Rpage.XBack);
    }
      
}  

