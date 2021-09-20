import {Selector, t} from 'testcafe';


class BusinessPage{
    constructor() {
        this.businessTitle = Selector('h3')
        this.inputEmail = Selector('input[id="sub_email_in_top"]')
        this.keepMeUpdateBtn = Selector('input[id="subscribe_btn_in_top"]')
        this.subscribedSuccessMessage = Selector('.bold.f17.grey2')
    }

    async subscribeToBusiness(subscriptionEmail){
        await t
            .typeText(this.inputEmail, subscriptionEmail)
            .click(this.keepMeUpdateBtn());
    }
}

export default new BusinessPage();