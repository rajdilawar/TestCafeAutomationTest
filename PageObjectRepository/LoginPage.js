import {Selector, t} from 'testcafe';

 class LoginPage{


    constructor() {
        this.loginName = Selector('input[id="txtlogin"]')
        this.password = Selector('input[id="pass_box"]')
        this.loginButton = Selector('input[type="submit"]')
        //this selector can be use if want to logout
        this.logOutButton = Selector('span[id="username"]')
    }

    async setUserName(userName){
        await t
            .typeText(this.loginName, userName)
    }

    async setPassword(password){
        await t
            .typeText(this.password, password);
    }

    async clickOnLoginButton(){
        await t
            .click(this.loginButton);
    }

}
export default new LoginPage();