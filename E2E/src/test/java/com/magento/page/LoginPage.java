package com.magento.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.magento.util.BasePage;

public class LoginPage extends BasePage {


    By email = By.xpath("//input[@id='user-name']");
    By password = By.xpath("//input[@id='password']");
    By login = By.xpath("//input[@id='login-button']");
    By productDashboard = By.xpath("//span[contains(text(),'Products')]");

    public LoginPage(WebDriver driver) {
        super(driver);
    }

    public LoginPage(WebDriver driver, int timeoutSec) {
        this(driver);
    }

    public void signIn() {
        type(email, "standard_user");
        type(password, "secret_sauce");
        click(login);
    }


    public String verifyProductDashboardLogin() {

        if (isDisplayed(productDashboard)) {
            return text(productDashboard);
        }
        return null;
    }


}
