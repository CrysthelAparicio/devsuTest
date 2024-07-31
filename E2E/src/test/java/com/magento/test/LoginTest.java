package com.magento.test;

import static org.testng.Assert.assertEquals;
import org.testng.annotations.Test;
import com.magento.util.BaseTest;


public class LoginTest extends BaseTest {

    @Test (priority = 1, groups = "Functional")
    public void doLogin() {
        loginPageCommerce.signIn();
        assertEquals(loginPageCommerce.verifyProductDashboardLogin(),"Products");
    }


}