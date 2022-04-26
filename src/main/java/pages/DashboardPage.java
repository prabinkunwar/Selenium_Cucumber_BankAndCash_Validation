package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

	WebDriver driver;

	public DashboardPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//h2[contains(text(), 'Dashboard ')]")
	WebElement DASHBOARD_HEADER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//h2[contains(text(), 'Accounts')]")
	WebElement NEW_ACCOUNT_HEADER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//h5[contains(text(),'Manage Accounts')]")
	WebElement ACCOUNT_SUCCESSFULLY_CREATION_ELEMENT;
	

	public void verifyDashboardPage() {
		Assert.assertEquals("Dashboard", DASHBOARD_HEADER_ELEMENT.getText());
	}

	public void verifyNewAccountPage() {
		Assert.assertEquals("Accounts", NEW_ACCOUNT_HEADER_ELEMENT.getText());
	}

	public void verifyCreatedAccountPage() {
		Assert.assertEquals("Manage Accounts", ACCOUNT_SUCCESSFULLY_CREATION_ELEMENT.getText());
		System.out.println("New Account Successfully Created");
	}
}
