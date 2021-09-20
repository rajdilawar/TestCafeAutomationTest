import {ClientFunction} from "testcafe";
import LoginPage from "../PageObjectRepository/LoginPage";
import DashboardPage from "../PageObjectRepository/DashboardPage";
import {dataSet} from '../Data/data';

const url = 'https://mypage.rediff.com/login/dologin'
const getUrl = ClientFunction(() => window.location.href);

fixture('Login Page')
    .page(url)

test('Loading Login Page', async t => {

    await t
        .expect(getUrl()).contains(url)
        .expect(LoginPage.loginButton().exists).ok();
});


    test('FORM - Successfully Login', async t => {
        await LoginPage.setUserName(dataSet.userName);
        await LoginPage.setPassword(dataSet.password);
        await LoginPage.clickOnLoginButton()
        //verifying the user name of logged user
        await t.expect(DashboardPage.userNameLoginUser.innerText).contains('Rajdilawar Singh');

    });
