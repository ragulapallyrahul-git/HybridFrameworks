import {Page} from '@playwright/test'
import {Webpage} from '../../Commons/uidata/uicommon'
import Ppage from '../PageElements/PimPage.json'

class Pimpageclass
{
    page: Page;
    web: Webpage;

    constructor(page: Page)
    {
      this.page = page; //intializing page
      this.web = new Webpage(page); //intializing common methods & functions
    }
    async checkAfterLoginLogo()
    {
        this.web.checkVisible(Ppage.XAfterLoginLogo);
    }
    async checkAfterLoginText()
    {
        this.web.EleText(Ppage.XAfterLoginText);
    }
    async PimHover()
    {
        this.web.hoverOnEle(Ppage.XPIM);
    }
    async ClickonAddEmployee()
    {
        this.web.clickonEle(Ppage.XADD);
    }

}   


