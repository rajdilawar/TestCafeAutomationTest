## Readme file for Automation using Page object model

## **Install TestCafe**

You can install TestCafe from npm globally or locally in your project.

## **Pre Requirements:** 

```
brew update
brew install node
node -v
npm -v
```

## **Global Installation**
`npm install -g testcafe`

After that, use the testcafe command to run TestCafe from the command line.
`testcafe chrome tests/`

## **Test Data:** 
Test data is stored in separate data.js file in form of `"key":"value"`

## **How to run the tests:** 
To run single test execute following command
```testcafe chrome tests/<nameOfTest>.js```


## **To Run all tests:**
Following command can be executed from terminal 
```npm run test:runAllTests```

#**To Run all tests but on different browser instances:**
```npm run test:runAllTestsMultipleBrowsers```




## **About Design Pattern:** 
I used Page object model pattern, Page Model is a test automation pattern that allows you to create an abstraction of the tested page and use it in test code to refer to page elements.

This means there are separate packages for pages /PageObjectRepository and tests /tests
Selectors are defined in each <>Page.js class constructor. Each page is been called to access its selector which makes the code highly maintainable. Beside this each page contains action methods which has to be performed on the page. Test can iterate through these methods for each page. 
Assertion and verification are usually done at tests level. 

This design pattern is useful in reducing code duplication and improves test case maintenance.


## **Tests:** 
__I have written following test cases which covers positive scenarios__ : 
1. Navigating to Rediff Mail client login page 
2. Logging into Rediff Mail client
3. Verifying if the user is logged in 
4. After successful logging verifying dashboard page 
5. Navigating to News section and verifying if at correct page (Verification happening both url level and checking the selector on particular page)
6. Navigating to Business section 
7. And Subscribing to business newsletters and verifying if the subscription message appears on page. 

## **Results:**


<pre>[git-branch: main] npm run test:runAllTests

> testcafe@1.0.0 test:runAllTests
> testcafe chrome tests/*.js

 Running tests in:
 - Chrome 93.0.4577.82 / macOS 10.15.7

 Login and Navigate to Business Page
 ✓ Subscribe to business newsletters

 Dashboard Page
 ✓ Loading Dashboard Page
 ✓ Navigate to News
 ✓ Navigate to Business

 Login Page
 ✓ Loading Login Page
 ✓ FORM - Successfully Login


 6 passed (28s)
</pre>


