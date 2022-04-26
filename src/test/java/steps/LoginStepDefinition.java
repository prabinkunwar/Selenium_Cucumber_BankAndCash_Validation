package steps;

import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BankAndCash;
import pages.DashboardPage;
import pages.DatabasePage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {

	DatabasePage databasePage;
	LoginPage loginPage;
	BankAndCash bankCashPage;
	DashboardPage dashboardPage;

	@Before
	public void beforeMethod() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		databasePage = new DatabasePage();
		bankCashPage = PageFactory.initElements(driver, BankAndCash.class);
		dashboardPage =  PageFactory.initElements(driver, DashboardPage.class);
	}
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() throws Throwable {
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		loginPage.enterUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
		loginPage.enterPassword(password);
	}
	
	@When("^User clicks on \"([^\"]*)\" button$")
	public void user_clicks_on_button(String button) throws Throwable {
		switch (button) {
		case "SignIn":
			loginPage.clickSignInButton();
			break;
			
		case "bank&Cash":
			bankCashPage.clickBankAndCashButton();
			break;
			
		case "newAccount":
			bankCashPage.clickNewAccountButton();
			break;
			
		case "submit":
			bankCashPage.clickSubmit();
			break;
			
		default:	
			System.out.println("Invalid Button!");
		}
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		dashboardPage.verifyDashboardPage();
	}

	@Then("^User should land on the new account page$")
	public void user_should_land_on_the_new_account_page() {
		dashboardPage.verifyNewAccountPage();
	}

	@Then("^User enters account title as \"([^\"]*)\" in accounts page$")
	public void user_enters_account_title_as_in_accounts_page(String title) {
		bankCashPage.enterAccountTitle(title);
	}

	@Then("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description) {
		bankCashPage.enterAccountDescription(description);
	}

	@Then("^User enters initial balance as \"([^\"]*)\" in accounts page$")
	public void user_enters_initial_balance_as_in_accounts_page(String initialBalance) {
		bankCashPage.enterAccountBalance(initialBalance);
	}

	@Then("^User enters account number as \"([^\"]*)\" in accounts page$")
	public void user_enters_account_number_as_in_accounts_page(String accountNumber) {
		bankCashPage.enterAccountNumber(accountNumber);
	}

	@Then("^User enters contact person as \"([^\"]*)\" in accounts page$")
	public void user_enters_contact_person_as_in_accounts_page(String contactPerson) {
		bankCashPage.enterContactPerson(contactPerson);
	}

	@Then("^User enters phone number as \"([^\"]*)\" in accounts page$")
	public void user_enters_phone_number_as_in_accounts_page(String phone) {
		bankCashPage.enterPhoneNumber(phone);
	}

	@Then("^User enters internet banking URL as \"([^\"]*)\" in accounts page$")
	public void user_enters_internet_banking_URL_as_in_accounts_page(String url) {
		bankCashPage.enterBankURL(url);
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		dashboardPage.verifyCreatedAccountPage();
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
