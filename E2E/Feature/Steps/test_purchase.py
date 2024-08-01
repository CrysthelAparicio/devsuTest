import Page.Parameters as Pam
from Utility.Utils import Utils
from Page.Login.LoginPage import Login
from Page.Purchase.PurchasePage import Purchase
from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

#global variables
user = Pam.User
password = Pam.Pass
pageLogin = Login()
pagePurchase = Purchase()

@given('A user are logged in')
def step_impl(context):
    options = Options()
    context.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    context.driver.implicitly_wait(10)
    context.driver.maximize_window()
    context.utils = Utils(context.driver)
    context.driver.get(Pam.Url)
    context.utils.sendKey(context.utils.getElementById(pageLogin.inputUserName), user)
    context.utils.sendKey(context.utils.getElementById(pageLogin.inputPassword), password)
    context.utils.click(context.utils.getElementById(pageLogin.btnLogin))
    context.utils.isDisplayed(context.utils.getElementByClassName(pageLogin.headerContainer))

@when('A user adds "{number}" products to cart')
def step_impl(context, number):
    elements = context.utils.getElementsByXpath(pagePurchase.listBtnAddToCart)
    for i in range(0, len(number) + 1):
        context.utils.click(elements[i])
        
@when('A user clicks on shopping cart button')
def step_impl(context):
    context.utils.click(context.utils.getElementById(pagePurchase.btnShoppingCart))

@when('A user clicks on checkout button')
def step_impl(context):
    context.utils.click(context.utils.getElementById(pagePurchase.btnCheckout))

@when('A user fills purchase form')
def step_impl(context):
    context.utils.sendKey(context.utils.getElementById(pagePurchase.btnCheckout))

@when('user enters "{firstName}" on first name input')
def step_impl(context, firstName):
    context.utils.sendKey(context.utils.getElementById(pagePurchase.inputFirstName), firstName)

@when('user enters "{lastName}" on last name input')
def step_impl(context, lastName):
    context.utils.sendKey(context.utils.getElementById(pagePurchase.inputLastName), lastName)

@when('user enters "{postalCode}" on postal code input')
def step_impl(context, postalCode):
    context.utils.sendKey(context.utils.getElementById(pagePurchase.inputPostalCode), postalCode)

@when('A user clicks on continue button')
def step_impl(context):
    context.utils.click(context.utils.getElementById(pagePurchase.btnContinue))

@when('A user clicks on finish button')
def step_impl(context):
    context.utils.click(context.utils.getElementById(pagePurchase.btnFinish))

@then('A user sees "{message}" text')
def step_impl(context, message):
    context.utils.assertEqual(context.utils.getElementByClassName(pagePurchase.lbMessage), message)