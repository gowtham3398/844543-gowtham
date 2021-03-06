


	package com.oxfordacademy.pageobject;

	
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


	public class CountSubscriptionPage {
	
		WebDriver driver;
		public void launchBrowser(String browser) //Launch url
		{
			try
			{
				if(browser.equalsIgnoreCase("firefox"))
				{
					System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Driver\\geckodriver.exe");
					driver = new FirefoxDriver();
				}
				else if(browser.equalsIgnoreCase("chrome"))
				{
					System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
					driver = new ChromeDriver();
				}
				else if(browser.equalsIgnoreCase("Internet Explore"))
				{
					System.setProperty("webdriver.ie.driver","src\\test\\resources\\Driver\\IEDriverServer.exe");
					driver = new InternetExplorerDriver();
				}
			
			
			
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
			}
			catch(WebDriverException e)
			{
				System.out.println("Browser could not be launched");
			}
			
	}
		
		public void oxfordHomepage() throws InterruptedException //sign in
		{
			driver.get("https://academic.oup.com/journals");//Launching the website
			driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();
			driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys("gowtham19980303@gmail.com");
			driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys("Gowtham@98");
			driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
			Thread.sleep(5000);
			
		}

		public void countSubscription() throws InterruptedException
		{
			
			driver.findElement(By.id("header-account-info-user-fullname")).click();
			
			driver.findElement(By.xpath("/html/body/div[3]/section/div/div[2]/div/ul/li[4]/div/div/div[1]/a[2]")).click();
			Thread.sleep(5000);
			List<WebElement> links = driver.findElements(By.xpath("//*[@id=\"myaccount-tabs-content\"]/div"));
			int linkCount=links.size();//counting the number of links
			System.out.println("The total number of subscriptions are="+(linkCount-1));
		}
		
		public void close() throws IOException
		{
			
			driver.close();
		}

	}


