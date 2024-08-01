import Page.Parameters as Pam
from Utility.Utils import Utils
from Page.Login.LoginPage import Login
from Page.Purchase.PurchasePage import Purchase
from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

#variables globales
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
    context.utils.send_key(context.utils.get_element_by_id(pageLogin.inputUserName), user)
    context.utils.send_key(context.utils.get_element_by_id(pageLogin.inputPassword), password)
    context.utils.click(context.utils.get_element_by_id(pageLogin.btnLogin))
    context.utils.is_displayed(context.utils.get_element_by_class_name(pageLogin.headerContainer))

@when('A user adds "{number}" products to cart')
def step_impl(context, number):
    elements = context.utils.get_elements_by_xpath(pagePurchase.listBtnAddToCart)
    for i in range(1, len(number) + 1):
        context.utils.click(elements[i])

@when('A user clicks on shopping cart button')
def step_impl(context):
    context.utils.click(context.utils.get_element_by_id(pagePurchase.btnShoppingCart))

@when('A user clicks on checkout button')
def step_impl(context):
    context.utils.click(context.utils.get_element_by_id(pagePurchase.btnCheckout))

@when('A user fills purchase form')
def step_impl(context):
    context.utils.send_key(context.utils.get_element_by_id(pagePurchase.btnCheckout))

@when('user enters "{firstName}" on first name input')
def step_impl(context, firstName):
    context.utils.send_key(context.utils.get_element_by_id(pagePurchase.inputFirstName), firstName)

@when('user enters "{lastName}" on last name input')
def step_impl(context, lastName):
    context.utils.send_key(context.utils.get_element_by_id(pagePurchase.inputLastName), lastName)

@when('user enters "{postalCode}" on postal code input')
def step_impl(context, postalCode):
    context.utils.send_key(context.utils.get_element_by_id(pagePurchase.inputPostalCode), postalCode)

@when('A user clicks on continue button')
def step_impl(context):
    context.utils.click(context.utils.get_element_by_id(pagePurchase.btnContinue))

@when('A user clicks on finish button')
def step_impl(context):
    context.utils.click(context.utils.get_element_by_id(pagePurchase.btnFinish))

@then('A user sees "{message}" text')
def step_impl(context, message):
    context.utils.assert_equal(context.utils.get_element_by_class_name(pagePurchase.lbMessage), message)