import {Selector, t} from 'testcafe';

class DashboardPage{


    constructor() {
        this.userNameLoginUser = Selector('span[id="username"]')
        this.newsMenuLink = Selector('body > div.navbar:nth-child(7) > ul.navbarul:nth-child(1) > li.news:nth-child(2)')
        this.businessMenuLink = Selector('body > div.navbar:nth-child(7) > ul.navbarul:nth-child(1) > li.business:nth-child(3) > a')
    }

    async navigateToNews(){
        await t
            .click(this.newsMenuLink());
    }

    async navigateToBusiness(){
        await t
            .click(this.businessMenuLink());
    }

}
export default new DashboardPage();