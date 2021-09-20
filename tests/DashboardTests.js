import {ClientFunction} from "testcafe";
import DashboardPage from "../PageObjectRepository/DashboardPage";
import LoginPage from "../PageObjectRepository/LoginPage";
import {dataSet} from '../Data/data';
import NewsPage from "../PageObjectRepository/NewsPage";

const dashboardUrl = 'https://www.rediff.com/'
const loginUrl = 'https://mypage.rediff.com/login/dologin'


const getUrl = ClientFunction(() => window.location.href);

fixture('Dashboard Page')
    .page(loginUrl)
    .beforeEach(async t =>{
            await LoginPage.setUserName(dataSet.userName);
            await LoginPage.setPassword(dataSet.password);
            await LoginPage.clickOnLoginButton()
    });

test('Loading Dashboard Page', async t => {
    await t
        .expect(getUrl()).contains(dashboardUrl)
        await t.expect(DashboardPage.userNameLoginUser.innerText).contains('Rajdilawar Singh');
});

test('Navigate to News', async t => {
    await t
        .expect(getUrl()).contains(dashboardUrl)
        await DashboardPage.navigateToNews()
      await t.expect(NewsPage.newsTitle.innerText).contains('NEWS');
});

test('Navigate to Business', async t => {
    await t
        .expect(getUrl()).contains(dashboardUrl)
         await DashboardPage.navigateToBusiness()
});