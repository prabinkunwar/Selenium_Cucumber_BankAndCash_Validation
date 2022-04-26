package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabasePage {

	Connection connection = null;
	Statement statement = null;
	ResultSet resultSet = null;
	String columnValue = null;

	public String getData(String columnName) {

//		setting the properties for mysql
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String sqlUrl = "jdbc:mysql://localhost:3306/october2021";
			String username = "root";
			String password = "root";
			String query = "select * from users";

//			Create connection to local Database
			connection = DriverManager.getConnection(sqlUrl, username, password);

//			Empower connecting reference variable to execute query
			statement = connection.createStatement();

//			Deliver the query
			resultSet = statement.executeQuery(query);
			while (resultSet.next()) {
				columnValue = resultSet.getString(columnName);
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (resultSet != null) {
				try {
					resultSet.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return columnValue;

	}
}
