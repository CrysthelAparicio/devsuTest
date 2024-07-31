package com.magento.page;

import com.magento.util.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class BuyProductPage extends BasePage {


    public BuyProductPage(WebDriver driver) {
        super(driver);
    }

    public BuyProductPage(WebDriver driver, int timeoutSec) {
        this(driver);
    }


}
