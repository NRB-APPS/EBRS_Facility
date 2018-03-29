sample = {
	'birth_date' : "1983-05-05",
	'cell_phone_number' : null,
	'citizenship' : "Malawi",
	'country_of_residence' : "Malawi",
	'current_district' : "Thyolo",
	'current_ta' : null,
	'current_village' : "Conforzi Estate Chipiloni Lines",
	'first_name' : "Mary",
	'gender' : "F",
	'home_district' : "Thyolo",
	'home_ta' : "Nchilamwela",
	'home_village' : "Conforzi Estate Chipiloni Lines",
	'last_name' : "Nampinga",
	'middle_name' : null
};

iTable = {
	init: function(hash, parent){
		var table = document.createElement("table");
		table.style.border = '2px black solid';
		table.style.width = '95%';

		var caption = document.createElement("caption");
		var number_of_records = hash.length;
		caption.innerHTML = (number_of_records===1?number_of_records+' record found':number_of_records + ' records found');
		table.appendChild(caption);

		for(var key in hash){

			// Create Main Row for Record
			var person_row = document.createElement("tr");
			table.appendChild(person_row);

			// Create Column 1 to hold Table Headers
			var person_header_td = document.createElement("td");
			person_row.appendChild(person_header_td);

			// -- row 1
			var person_header_first_name_row = document.createElement("tr");
			person_header_td.appendChild(person_header_first_name_row);

			var person_header_first_name = document.createElement("td");
			person_header_first_name.innerHTML = 'First Name';
			person_header_first_name_row.appendChild(person_header_first_name);

			// -- row 2
			var person_header_last_name_row = document.createElement("tr");
			person_header_td.appendChild(person_header_last_name_row);

			var person_header_last_name = document.createElement("td");
			person_header_last_name.innerHTML = 'Last Name';
			person_header_last_name_row.appendChild(person_header_last_name);

			// -- row 3
			var person_header_gender_row = document.createElement("tr");
			person_header_td.appendChild(person_header_gender_row);

			var person_header_gender = document.createElement("td");
			person_header_gender.innerHTML = 'Gender';
			person_header_gender_row.appendChild(person_header_gender);

			// -- row 4
			var person_header_birthdate_row = document.createElement("tr");
			person_header_td.appendChild(person_header_birthdate_row);

			var person_header_birthdate = document.createElement("td");
			person_header_birthdate.innerHTML = 'Birthdate';
			person_header_birthdate_row.appendChild(person_header_birthdate);

			// -- row 5
			var person_header_home_address_row = document.createElement("tr");
			person_header_td.appendChild(person_header_home_address_row);

			var person_header_home_address = document.createElement("td");
			person_header_home_address.innerHTML = 'Home Address';
			person_header_home_address_row.appendChild(person_header_home_address);

			// -- row 6
			var person_header_current_address_row = document.createElement("tr");
			person_header_td.appendChild(person_header_current_address_row);

			var person_header_current_address = document.createElement("td");
			person_header_current_address.innerHTML = 'Current Address';
			person_header_current_address_row.appendChild(person_header_current_address);

			// ----------- end of column 1 (person headers)

			// Create column 2 to hold Table Description
			var person_details_td = document.createElement("td");
			person_row.appendChild(person_details_td);

			// -- row 1
			var person_details_first_name_row = document.createElement("td");
			person_details_td.appendChild(person_details_first_name_row);

			var person_details_first_name = document.createElement("td");
			person_details_first_name.innerHTML = hash[0]['first_name'];
			person_details_first_name_row.appendChild(person_details_first_name);

			// -- row 2
			var person_details_last_name_row = document.createElement("td");
			person_details_td.appendChild(person_details_last_name_row);

			var person_details_last_name = document.createElement("td");
			person_details_last_name.innerHTML = hash[0]['last_name'];
			person_details_last_name_row.appendChild(person_details_last_name);

			// -- row 3
			var person_details_gender_row = document.createElement("td");
			person_details_td.appendChild(person_details_gender_row);

			var person_details_gender = document.createElement("td");
			person_details_gender.innerHTML = hash[0]['gender'];
			person_details_gender_row.appendChild(person_details_gender);

			// -- row 4
			var person_details_birthdate_row = document.createElement("td");
			person_details_td.appendChild(person_details_birthdate_row);

			var person_details_birthdate = document.createElement("td");
			person_details_birthdate.innerHTML = hash[0]['birth_date'];
			person_details_birthdate_row.appendChild(person_details_birthdate);

			// -- row 5
			var person_details_home_address_row = document.createElement("td");
			person_details_td.appendChild(person_details_home_address_row);

			var person_details_home_address = document.createElement("td");
			person_details_home_address.innerHTML = hash[0]['home_village'] + ',' + hash[0]['home_ta'] + ',' + hash[0]['home_district'];
			person_details_home_address_row.appendChild(person_details_home_address);

			// -- row 6
			var person_details_current_address_row = document.createElement("td");
			person_details_td.appendChild(person_details_current_address_row);

			var person_details_current_address = document.createElement("td");
			person_details_current_address.innerHTML = hash[0]['current_village'] + ',' + hash[0]['current_ta'] + ',' + hash[0]['current_district'];
			person_details_current_address_row.appendChild(person_details_current_address);

			// ----------- end of column 2 (person details)

			// Create column 3 to hold Action Buttons
			var person_action_td = document.createElement("td");
			person_row.appendChild(person_action_td);

			var person_action_td_row = document.createElement("tr");
			person_action_td.appendChild(person_action_td_row);

			var person_action_td_row_td = document.createElement("td");
			person_action_td_row.appendChild(person_action_td_row_td);

			var person_action_select_button = document.createElement("button");
			var person_action_select_button_text = document.createTextNode("Select");
			person_action_select_button.appendChild(person_action_select_button_text);
			person_action_select_button.onclick = function() {
				getDataAndStore(hash[0]);
			};
			person_action_td_row_td.appendChild(person_action_select_button);

			var person_action_select_and_edit_button = document.createElement("button");
			var person_action_select_and_edit_button_text = document.createTextNode("Select & Edit");
			person_action_select_and_edit_button.appendChild(person_action_select_and_edit_button_text);
			person_action_select_and_edit_button.onclick = function() {
				getDataAndStore(hash[0]);
			};
			person_action_td_row_td.appendChild(person_action_select_and_edit_button);

			// ----------- end of column 3 (action buttons)
		}
		parent.append(table);
		return table;
	}
};

function getDataAndStore(hash_params) {
	console.log(JSON.parse(hash_params));
}
