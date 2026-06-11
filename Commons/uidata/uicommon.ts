import{expect , Page , Locator} from '@playwright/test'
class Webpage{
    page : Page;
    constructor(page : Page)
    {
      this.page = page; //intializing the page in the constructor
    }
 //Element identified based on locator
    element(loc:string):Locator
    {
       return this.page.locator(loc);
    }
 //Launch the application
    async launchApp(url:string , title:string)
    {
       await this.page.waitForTimeout(2000);
       await this.page.goto(url);
       expect(this.page).toHaveTitle(title); //Validating the title
    }
    //clear data in the textbox(which is not under frame)
    async clearDataEle(loc:string)
    {
        await this.element(loc).clear();
    }
    //Enter data into text box(which is not under frame)
    async enterDataEle(loc : string , text : string)
    {
        await this.clearDataEle(loc);
        await this.element(loc).fill(text);
    }
    //click on element(which is not under frame)
    async clickonEle(loc:string)
    {
        await this.element(loc).click();
    }
    //mouse hover on element
    async hoverOnEle(loc:string)
    {
        await this.element(loc).hover();
    }
    //Select the dropdown element
    async dropdown(loc : string , opt : string)
    {
        await this.element(loc).selectOption(opt);
    }
    //get the text the element
    async EleText(loc : string)
    {
       console.log(this.element(loc).textContent());
    }
    //check the Visibility of the elements
    async checkVisible(loc:string)
    {
        await expect(this.element(loc)).toBeVisible();
    }
    //under the frame , clear data and refill data in the textbox
    async myFrameEnterDataEle(floc:string , loc:string , text:string)
    {
      await this.page.frameLocator(floc).locator(loc).fill(text);
    }
    //under the frame,click on an element
    async myFrameDataClick(floc:string , loc:string , text:string)
    {
        await this.page.frameLocator(floc).locator(loc).click();
    }
    //Under the frame,Upload file
    async myFrameUpload(floc:string , loc:string , text:string)
    {
        await this.page.frameLocator(floc).locator(loc).setInputFiles(text);
    }
    //Screenshots
    async screenshotData(text : string)
    {
      await this.page.screenshot({path:text});
    }

}