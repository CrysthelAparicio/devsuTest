import Page.Parameters as Pam
from Utility.Utils import Utils
from Page.Login.LoginPage import Login
from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

#variables globales
user = Pam.User
password = Pam.Pass
pageLogin = Login()

@given('A user goes to visit web site')
def step_impl(context):
    options = Options()
    context.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    context.driver.implicitly_wait(10)
    context.driver.maximize_window()
    context.utils = Utils(context.driver)
    context.driver.get(Pam.Url)

@when('A user enters a username')
def step_impl(context):
    context.utils.sendKey(context.utils.getElementById(pageLogin.inputUserName), user)

@when('A user enters a password')
def step_impl(context):
    context.utils.sendKey(context.utils.getElementById(pageLogin.inputPassword), password)

@when('A user clicks on login button')
def step_impl(context):
    context.utils.click(context.utils.getElementById(pageLogin.btnLogin))
    
@then('A user sees swag labs title')
def step_impl(context):
    context.utils.isDisplayed(context.utils.getElementByClassName(pageLogin.headerContainer))

#------------------------------------------------------------------------------------------------------------------
