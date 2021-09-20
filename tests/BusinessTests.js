import {ClientFunction} from "testcafe";
import DashboardPage from "../PageObjectRepository/DashboardPage";
import LoginPage from "../PageObjectRepository/LoginPage";
import BusinessPage from "../PageObjectRepository/BusinessPage";
import {dataSet} from '../Data/data';

const businessUrl = 'https://www.rediff.com/business'
const loginUrl = 'https://mypage.rediff.com/login/dologin'

const getUrl = ClientFunction(() => window.location.href);

fixture('Login and Navigate to Business Page')
    .page(loginUrl)
    .beforeEach(async t =>{
        await LoginPage.setUserName(dataSet.userName);
        await LoginPage.setPassword(dataSet.password);
        await LoginPage.clickOnLoginButton()
        await DashboardPage.navigateToBusiness()
        //verifying if navigated to at business page
        await t.expect(BusinessPage.businessTitle.innerText).contains('BUSINESS');
    });

test('Subscribe to business newsletters', async t => {
    await t
        .expect(getUrl()).contains(businessUrl)
        await BusinessPage.subscribeToBusiness(dataSet.subscriptionEmail)
        //verifying the subscription success message
        await t.expect(BusinessPage.subscribedSuccessMessage.innerText).contains('Thank you for subscribing !');

});
