package com.magento.test;

import com.magento.util.BaseTest;
import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;


public class BuyProductTest extends BaseTest {

    @Test (priority = 1, groups = "Functional")
    public void doBuy() {
        System.out.println("welcome");
    }


}