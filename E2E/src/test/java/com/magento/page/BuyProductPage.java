package com.magento.page;

import com.magento.util.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class BuyProductPage extends BasePage {
    By firtsProductToAdd = By.xpath("(//button[@id='add-to-cart-sauce-labs-backpack'])[1]");
    By secondProductToAdd = By.xpath("(//button[contains(@class,'btn btn_primary')])[2]");
    By btnCarInDashboard = By.xpath("//a[@class='shopping_cart_link']");
    By firstRemoveProductButton = By.xpath("(//button[contains(@class,'btn btn_secondary')])[1]");

    public BuyProductPage(WebDriver driver) {
        super(driver);
    }


    public void clickfirtsProductToAdd() {
        click(firtsProductToAdd);
    }

    public void clickSecondProductToAdd() {
        click(secondProductToAdd);
    }
    public void clickbtnCarInDashboard() {
        click(btnCarInDashboard);
    }

    public String verifyfirstRemoveProductButton() {

        if (isDisplayed(firstRemoveProductButton)) {
            return text(firstRemoveProductButton);
        }
        return null;
    }
}
