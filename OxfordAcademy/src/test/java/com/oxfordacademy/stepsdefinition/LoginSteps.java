package com.oxfordacademy.stepsdefinition;




import com.excel.excel;
import com.oxfordacademy.pageobject.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginSteps {
	 
	 LoginPage validlog = new LoginPage();
	 excel ec=new excel();

	@Given("^the user launch chrome$")
	public void the_user_launch_chrome() throws Throwable 
	{
		validlog.launchBrowser("chrome");
	}

	@Then("^the user opens website$")
	public void the_user_opens_website() throws Throwable 
	{
	  validlog.oxfordHomepage();
	}

	@Then("^The user login using valid and invalid details$")
	public void the_user_login_using_valid_and_invalid_details() throws Throwable {

		Thread.sleep(3000);
		validlog.oxfordDetails(ec.excel_emailid(1), ec.excel_password(1));
		Thread.sleep(3000);
		//validlog.logout();
		Thread.sleep(3000);
		validlog.oxfordClose();
		
		int count=ec.row_count();
		for(int i=2;i<=count;i++)
		{
			validlog.launchBrowser("chrome");
			validlog.oxfordHomepage();
			validlog.oxfordDetails(ec.excel_emailid(i), ec.excel_password(i));
			Thread.sleep(3000);
			
			
				validlog.oxfordClose();
		
 }
	}
	
	@Then("^the user closes the browser$")
	public void the_user_closes_the_browser() throws Throwable
	{
	   validlog.oxfordClose();
	}
}
