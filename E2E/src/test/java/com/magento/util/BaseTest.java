package com.magento.util;

import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;
import com.magento.page.LoginPage;

public class BaseTest {

    protected WebDriver driver;
    private String BASE_URL;
    private FileReader reader;
    private Properties props;
    protected LoginPage loginPageCommerce;


    @BeforeTest
    public void loadSettings() throws IOException {
        reader = new FileReader(System.getProperty("user.dir")+"/src/test/resources/config.properties");
        props = new Properties();
        props.load(reader);
        BASE_URL = props.getProperty("url");
    }

    @BeforeMethod
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
        driver = new ChromeDriver(); // unica inicializacion para todas las clases
        driver.manage().window().maximize();
        driver.get(BASE_URL);
        loginPageCommerce = new LoginPage(driver);
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }

}
