$(function(){

	window._tMethods = {
		get_database: function() {
			return JSON.parse(window.localStorage.database);
		},
		update_store: function(arr) {
			return window.localStorage.setItem('database', JSON.stringify(arr));
		},
		database_length: function(){
			return this.get_database().length;
		},
		database_isHave: function() {
			return !!window.localStorage.database;
		},
		database: function() {
			if(this.database_isHave() && this.database_length())return 'is filled';
			this.update_store([
		        {
		            "_id": 0,
		            "isActive": false,
		            "balance": "$2,890.89",
		            "picture": "http://placehold.it/32x32",
		            "age": 37,
		            "eyeColor": "blue",
		            "name": "Reyna Levy",
		            "gender": "female",
		            "company": "ULTRASURE",
		            "email": "reynalevy@ultrasure.com",
		            "phone": "+1 (851) 487-3864",
		            "address": "904 Halleck Street, Accoville, Louisiana, 9042",
		            "tags": ["ut", "laborum", "quis", "officia", "est", "et", "sit"],
		            "friends": [
		                {
		                    "id": 0,
		                    "name": "Mallory Mathis"
		                },
		                {
		                    "id": 1,
		                    "name": "Whitney Williamson"
		                },
		                {
		                    "id": 2,
		                    "name": "Jeanette Waters"
		                }
		            ],
		            "greeting": "Hello, Reyna Levy! You have 10 unread messages."
		        },
		        {
		            "_id": 1,
		            "isActive": false,
		            "balance": "$3,576.16",
		            "picture": "http://placehold.it/32x32",
		            "age": 26,
		            "eyeColor": "black",
		            "name": "Casey Mcfarland",
		            "gender": "male",
		            "company": "AQUAFIRE",
		            "email": "caseymcfarland@aquafire.com",
		            "phone": "+1 (886) 467-2772",
		            "address": "870 Caton Avenue, Blandburg, New Hampshire, 5905",
		            "tags": ["pariatur", "occaecat", "veniam", "consequat", "ut", "id", "enim"],
		            "friends": [
		                {
		                    "id": 0,
		                    "name": "Goldie Solis"
		                },
		                {
		                    "id": 1,
		                    "name": "Lilian Bray"
		                },
		                {
		                    "id": 2,
		                    "name": "Allen David"
		                }
		            ],
		            "greeting": "Hello, Casey Mcfarland! You have 2 unread messages."
		        },
		        {
		            "_id": 2,
		            "isActive": true,
		            "balance": "$1,867.17",
		            "picture": "http://placehold.it/32x32",
		            "age": 37,
		            "eyeColor": "brown",
		            "name": "Oneal Nelson",
		            "gender": "male",
		            "company": "ACCUFARM",
		            "email": "onealnelson@accufarm.com",
		            "phone": "+1 (995) 454-2758",
		            "address": "205 Withers Street, Elizaville, New York, 7457",
		            "tags": ["aliqua", "minim", "ipsum", "aliquip", "laborum", "excepteur", "qui"],
		            "friends": [
		                {
		                    "id": 0,
		                    "name": "Autumn Bird"
		                },
		                {
		                    "id": 1,
		                    "name": "Wallace Madden"
		                },
		                {
		                    "id": 2,
		                    "name": "Selma Cook"
		                }
		            ],
		            "greeting": "Hello, Oneal Nelson! You have 5 unread messages."
		        },
		        {
		            "_id": 3,
		            "isActive": false,
		            "balance": "$3,844.02",
		            "picture": "http://placehold.it/32x32",
		            "age": 36,
		            "eyeColor": "blue",
		            "name": "Katharine Swanson",
		            "gender": "female",
		            "company": "COSMETEX",
		            "email": "katharineswanson@cosmetex.com",
		            "phone": "+1 (956) 419-3233",
		            "address": "723 Woods Place, Levant, Connecticut, 4898",
		            "tags": ["cillum", "nostrud", "laboris", "veniam", "laborum", "nulla", "pariatur"],
		            "friends": [
		                {
		                    "id": 0,
		                    "name": "Martina Patrick"
		                },
		                {
		                    "id": 1,
		                    "name": "Rhea Stanley"
		                },
		                {
		                    "id": 2,
		                    "name": "Natalie Odonnell"
		                }
		            ],
		            "greeting": "Hello, Katharine Swanson! You have 5 unread messages."
		        },
		        {
		            "_id": 4,
		            "isActive": false,
		            "balance": "$3,085.45",
		            "picture": "http://placehold.it/32x32",
		            "age": 21,
		            "eyeColor": "brown",
		            "name": "Kasey Le",
		            "gender": "female",
		            "company": "COSMOSIS",
		            "email": "kaseyle@cosmosis.com",
		            "phone": "+1 (977) 505-3543",
		            "address": "105 Chester Avenue, Belgreen, Vermont, 6456",
		            "tags": ["Lorem", "sunt", "excepteur", "sunt", "eiusmod", "dolore", "id"
		            ],
		            "friends": [
		                {
		                    "id": 0,
		                    "name": "Park Warner"
		                },
		                {
		                    "id": 1,
		                    "name": "Leanne Hickman"
		                },
		                {
		                    "id": 2,
		                    "name": "Frazier Vang"
		                }
		            ],
		            "greeting": "Hello, Kasey Le! You have 4 unread messages."
		        }]);
			return true;
		},
		_editFunc: function(){
	        let cl = $(this).parent().data('id');
	        let el = $(`.edits${cl}`);
	        if($(this).hasClass('act')){
	            let arr = [];
	            el.each(function(){ arr.push($(this).text()) })
	            arr.push($(`input[name='active${cl}']:checked`).val())
	            data.forEach((v,i) => {
	                if(v['_id'] === cl){
	                    data[i].name = arr[0];
	                    data[i].balance = arr[1];
	                    data[i].email = arr[2];
	                    data[i].phone = arr[3];
	                    data[i].address = arr[4];
	                    data[i].age = +arr[5];
	                    data[i].eyeColor = arr[6];
	                    data[i].gender = arr[7];
	                    data[i].company = arr[8];
	                    data[i].tags = arr[9].split(",");
	                    data[i].friends[0].name = arr[10];
	                    data[i].friends[1].name = arr[11];
	                    data[i].friends[2].name = arr[12];
	                    data[i].isActive = !!+arr[13];
	                }
	            });
	            $(this).removeClass('act').css('color', '#777');
	            el.removeAttr('contenteditable');
	            $(`.lab${cl}`).children().css('visibility', 'hidden')
	            if(!!+arr[arr.length-1]){
	                $(`.lab${cl}`).last().addClass('not')
	            }else{
	                $(`.lab${cl}`).first().addClass('not')
	            }
	            _tMethods.update_store(data);
	            return "User's parametr was successfully edits"
	        }else{
	            $(this).addClass('act').css('color', 'red');
	            el.attr('contenteditable', 'true');
	            $(`.lab${cl}`).removeClass('not').children().css('visibility', 'visible');
	        }
	        return 'Started';
	    },
		_copyFunc: function(){
	        let v = data.filter(v => v['_id'] === $(this).parent().data('id'))[0];
	        if(v){
	        	data.push({
		            "_id": data.length,
		            "isActive": v.isActive,
		            "balance": v.balance,
		            "picture": v.picture,
		            "age": v.age,
		            "eyeColor": v.eyeColor,
		            "name": v.name,
		            "gender": v.gender,
		            "company": v.company,
		            "email": v.email,
		            "phone": v.phone,
		            "address": v.address,
		            "tags": v.tags,
		            "friends": v.friends,
		            "greeting": v.greeting
		        });
	        }
	        _tMethods.update_store(data);
	        _tMethods._get_new_user();
	        return 'User was successfully copy!';
    	},
		_delFunc: function(){
	        let par = $(this).parent();
	        data.forEach((v,i) => {
	            if(v['_id'] === par.data('id'))data.splice(i,1);
	        })
	        par.remove();
	        _tMethods.update_store(data)
	        if(!_tMethods.get_database().length)alert('empty');
	        return 'User was successfully delete!';
	    },
		_get_new_user: function(){
			let n = _tMethods.get_database();
			$('.container-box').append(_tMethods._createUser(n[n.length-1]));
			return 'New user was successfully add!';
		},
		_createUser: function(data){
	        let item = $('<div class="u-item"></div>');
	        let top = $(`<div class="top">
	                         <div class="avatar"><img src="${data.picture}" alt=""></div>
	                         <div>
	                            <h2 class="edits${data['_id']}">${data.name}</h2>
	                            <hr>
	                            <div>
	                                <label class="lab${data['_id']} ${data.isActive ? "" : "not"}" for=""><input ${data.isActive ? "checked" : ""} type="radio" value="1" name="active${data._id}">Active</label>
	                                <label class="lab${data['_id']} ${data.isActive ? "not" : ""}" for=""><input ${data.isActive ? "" : "checked"} type="radio" value="0" name="active${data._id}">Not active</label>
	                            </div> 
	                            <div class="balance">
	                                <small>Balance:</small>
	                                <span class="edits${data['_id']}">${data.balance}</span>
	                            </div>
	                         </div>
	                    </div>`);
	        let info = $(`<div class="info-box">
	                         <div class="info">
	                             <div>
	                                <div>Email: </div>    
	                                <div class="edits${data['_id']}">${data.email}</div>    
	                             </div>
	                             <div>
	                                <div>Phone: </div>    
	                                <div class="edits${data['_id']}">${data.phone}</div>    
	                             </div>
	                             <div>
	                                <div>Address: </div>    
	                                <div class="edits${data['_id']}">${data.address}</div>    
	                             </div>
	                             <div>
	                                <div>Age: </div>    
	                                <div class="edits${data['_id']}">${data.age}</div>    
	                             </div>
	                             <div>
	                                <div>Eye color: </div>    
	                                <div class="edits${data['_id']}">${data.eyeColor}</div>    
	                             </div>
	                             <div>
	                                <div>Gender: </div>    
	                                <div class="edits${data['_id']}">${data.gender}</div>    
	                             </div>
	                             <div>
	                                <div>Company: </div>    
	                                <div class="edits${data['_id']}">${data.company}</div>    
	                             </div>
	                         </div>
	                         <div class="tags">
	                            <div><strong>Tags:</strong> </div>
	                            <div class="edits${data['_id']}">${data.tags.map(v=>("<span>" + v + "</span>")).join(', ')}</div>
	                            <div><strong>Friends:</strong> </div>
	                            <div>${data.friends.map(v=>(`<p class="edits${data['_id']}">${v.name}</p>`)).join(' ')}</div>
	                         </div>
	                    </div>`);
	        let greating = $(`<h3>${data.greeting}</h3>`);
	        let copy = $('<i class="far fa-copy"></i>');
	        let edit = $('<i class="far fa-edit"></i>');
	        let del = $('<i class="fas fa-trash-alt"></i>');
	        copy.click(_tMethods._copyFunc);
	        edit.click(_tMethods._editFunc);
	        del.click(_tMethods._delFunc)
	        item.append(top, info, greating, copy, edit, del);
	        item.data('id', data['_id'])
	        return item;
	    }
	}

	_tMethods.database()
	let data = _tMethods.get_database();

	data.forEach(v => {
		$('.container-box').append(_tMethods._createUser(v));
	});

});
