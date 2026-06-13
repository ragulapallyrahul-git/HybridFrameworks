import {Page} from '@playwright/test'
import {Webpage} from '../../Commons/uidata/uicommon'
import hpage from '../PageElements/HomePage.json'
import logindata from '../../Config/Uiconfig/ApplicationData.json'

class homepageclass
{
    page: Page;
    web: Webpage;

    constructor(page: Page)
    {
      this.page = page; //intializing page
      this.web = new Webpage(page); //intializing common methods & functions
    }
    async myAppURL()
    {
        await this.web.launchApp(logindata.uidata.url,logindata.uidata.title);
    }
    async checkHomeLogo()
    {
        await this.web.checkVisible(hpage.XHomeLogo);
    }
    async checkEmplogo()
    {
        await this.web.checkVisible(hpage.XEmpLogo);
    }
    async checkHometext()
    {
        await this.web.EleText(hpage.XHomeText);
    }
    async checkLoginText()
    {
        await this.web.EleText(hpage.XLoginText);
    }
    async checkPasswordText()
    {
        await this.web.EleText(hpage.XPasswordText);
    }
    async checkOrangeLink()
    {
        await this.web.checkVisible(hpage.XOrangeHRMLINK);
    }
    async EnterUserName()
    {
        await this.web.enterDataEle(hpage.XLogin, logindata.uidata.Username);
    }
    async EnterPassword()
    {
        await this.web.enterDataEle(hpage.XPassword, logindata.uidata.password);
    }
    async clickonLogin()
    {
        await this.web.clickonEle(hpage.XLogin);
    }

}   


