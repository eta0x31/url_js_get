function get(index){

	var url = window.location.href;
	var name_index_output = [];
	var data_output = [];
	var split_char = ["?","=","&"];
	var empty = false;
	var return_get = false;

	try {
    	var get_meta_data = url.split(split_char[0])[1];
    	var name_index = get_meta_data.split(split_char[1]);
    	empty = true;
	}catch(err){}
	
	if(empty == true){

	for (var i = name_index.length - 2; i >= 1; i--)name_index[i] = name_index[i].split(split_char[2])[1];
		
		var data = get_meta_data.split(split_char[1]);

		for (var i = data.length - 1; i >= 1; i--)data[i] = data[i].split(split_char[2])[0];

			var c = 0;
			for (var i = 0; i < name_index.length - 1; i++) {
				name_index_output[c] = name_index[i];
				c++; 
			};

			c = 0;
			for (var i = 1; i < data.length; i++) {
				data_output[c] = data[i];
				c++; 
			};

			for (var i = 0; i < name_index_output.length; i++) {
				if(name_index_output[i] == index){
					return_get = data_output[i];
					break;
				}
			};
		}

			return decodeURI(return_get);
		}