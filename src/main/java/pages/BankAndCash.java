package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCash extends TestBase {
	
	WebDriver driver;
	
	public BankAndCash(WebDriver driver) {
		this.driver =  driver;
	}
	
	// Element Library
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Bank & Cash')]") WebElement BANK_CASH_BUTTON;
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'New Account')]") WebElement NEW_ACCOUNT_BUTTON;
	@FindBy(how = How.XPATH, using = "//input[@id='account']") WebElement ACCOUNT_TITLE;
	@FindBy(how = How.XPATH, using = "//input[@id='description']") WebElement ACCOUNT_DESCRIPTION;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']") WebElement ACCOUNT_BALANCE;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']") WebElement ACCOUNT_NUMBER;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']") WebElement CONTACT_PERSON;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']") WebElement PHONE;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']") WebElement BANL_URL;
	@FindBy(how = How.XPATH, using = "//div[@class='ibox-content']/form/button") WebElement SUBMIT_BUTTON;
	
	
	public void clickBankAndCashButton() {
		BANK_CASH_BUTTON.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickNewAccountButton() {
		NEW_ACCOUNT_BUTTON.click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterAccountTitle(String title) {
		ACCOUNT_TITLE.sendKeys(title + generateRandom(99));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterAccountDescription(String description) {
		ACCOUNT_DESCRIPTION.sendKeys(description + generateRandom(99));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterAccountBalance(String balance) {
		ACCOUNT_BALANCE.sendKeys(balance);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER.sendKeys(accountNumber + generateRandom(999));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterContactPerson(String contactPerson) {
		CONTACT_PERSON.sendKeys(contactPerson + generateRandom(999));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterPhoneNumber(String phoneNumber) {
		PHONE.sendKeys(phoneNumber + generateRandom(9999));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterBankURL(String url) {
		BANL_URL.sendKeys(url);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickSubmit() {
		SUBMIT_BUTTON.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}
