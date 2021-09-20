import {Selector} from 'testcafe';


class NewsPage{
    constructor() {
        this.newsTitle = Selector('h3')
    }
}
export default new NewsPage();