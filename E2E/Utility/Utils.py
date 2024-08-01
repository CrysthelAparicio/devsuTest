from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC


class Utils():
   
    def __init__(self,driver):
       self.driver=driver
       self.wait = WebDriverWait(self.driver, 30)

    #locator strategy
    def getElementByXpath(self, xpath):
      try: 
        return self.wait.until(EC.visibility_of_element_located((By.XPATH, xpath))) 
      except TimeoutException as ex:
        print(ex.msg)
    
    def getElementsByXpath(self, xpath):
      try: 
        return self.wait.until(EC.visibility_of_all_elements_located((By.XPATH, xpath))) 
      except TimeoutException as ex:
        print(ex.msg)

    def getElementByName(self, name):
      try: 
        return self.wait.until(EC.visibility_of_element_located((By.NAME, name))) 
      except TimeoutException as ex:
        print(ex.msg)

    def getElementById(self, id):
      try: 
        return self.wait.until(EC.visibility_of_element_located((By.ID, id))) 
      except TimeoutException as ex:
        print(ex.msg)
    
    def getElementByClassName(self, class_name):
      try: 
        return self.wait.until(EC.visibility_of_element_located((By.CLASS_NAME, class_name))) 
      except TimeoutException as ex:
        print(ex.msg)

    def getElementByCssSelector(self, css_selector):
      try: 
        return self.wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, css_selector))) 
      except TimeoutException as ex:
        print(ex.msg)

    #click
    def click(self, element):
      try:
         element.click()
      except TimeoutException as ex:
         print(ex.msg)

    #send key
    def sendKey(self, element, text):
      try: 
        element.clear()
        element.send_keys(text)
      except TimeoutException as ex:
        print(ex.msg)

    #asserts
    def isDisplayed(self, element):
      assert element.is_displayed(), 'Element is not present.'

    def assertEqual(self, element, text):    
      assert element.text == text, f'The text is not equal' 
