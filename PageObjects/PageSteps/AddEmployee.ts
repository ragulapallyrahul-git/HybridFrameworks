import {Page} from '@playwright/test'
import {Webpage} from '../../Commons/uidata/uicommon'
import Emppage from '../PageElements/AddEmployee.json'

class Emppageclass
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
        this.web.checkVisible(Emppage.XAddEmployeeLink);
    }
    async EnterIdunderframe()
    {
        this.web.myFrameEnterDataEle(Emppage.XFrame,Emppage.XID,"2256609");
    }
    async EnterLastunderframe()
    {
        this.web.myFrameEnterDataEle(Emppage.XFrame,Emppage.XLAST,"Rahul");
    }
    async EnterFirstunderframe()
    {
        this.web.myFrameEnterDataEle(Emppage.XFrame,Emppage.XFIRST,"Mr");
    }
    async EnterMiddleunderframe()
    {
        this.web.myFrameEnterDataEle(Emppage.XFrame,Emppage.XMIDDLE,"Ragulapally");
    }
    async EnterNickunderframe()
    {
        this.web.myFrameEnterDataEle(Emppage.XFrame,Emppage.XNICK,"Nani");
    }
    async UploadPhoto()
    {
        this.web.myFrameUpload(Emppage.XFrame,Emppage.XPHOTO, "./EmpPhotos.TCS.jpg");
    }
   async ClickOnSave()
   {
       this.web.myFrameDataClick(Emppage.XFrame,Emppage.XSAVE);
   }

}   


