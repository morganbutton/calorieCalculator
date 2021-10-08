$(function() {


$('#veggie').on('submit', function(evnt){
  //keeps page from reloading
  evnt.preventDefault();
  //stores food value clicked in calorie counter
  let vegetable = $('#vegetable').val();
  //Gives the ability to retrieve data from .json file
  let request = $.ajax({
        method: 'GET',
        url: 'vegetable.json',
        dataType: 'json',
    });
 
  //Fetches calorie data from .json file, outputs to box
  request.done(function(data) {

    if (vegetable === 'beef'){
       document.getElementById("result-one").innerHTML = vegetable + ':'; 
       document.getElementById("result-two").innerHTML = data[0].calorie + ' calories';  
    }else if (vegetable === 'chicken'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[1].calorie + ' calories';  
    }else if (vegetable === 'ham'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[2].calorie + ' calories';  
    }else if (vegetable === 'pork'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[3].calorie + ' calories';  

	}else if (vegetable === 'turkey'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[4].calorie + ' calories';  

  }else if (vegetable === 'apple'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[5].calorie + ' calories';  

  }else if (vegetable === 'avocado'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[6].calorie + ' calories';  

  }else if (vegetable === 'banana'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[7].calorie + ' calories';  

  }else if (vegetable === 'blueberries'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[8].calorie + ' calories';  

  }else if (vegetable === 'dates'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[9].calorie + ' calories';  

  }else if (vegetable === 'guava'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[10].calorie + ' calories';  

  }else if (vegetable === 'lemon'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[11].calorie + ' calories';  

  }else if (vegetable === 'mango'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[12].calorie + ' calories';  

  }else if (vegetable === 'peach'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[13].calorie + ' calories';  

  }else if (vegetable === 'pineapple'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[14].calorie + ' calories';  

  }else if (vegetable === 'plum'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[15].calorie + ' calories';  

  }else if (vegetable === 'raisins'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[16].calorie + ' calories';  
  }else if (vegetable === 'arugula'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[17].calorie + ' calories';  

  }else if (vegetable === 'artichoke'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[18].calorie + ' calories';  

  }else if (vegetable === 'asparagus'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[19].calorie + ' calories';  

  }else if (vegetable === 'broccoli'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[20].calorie + ' calories';  

  }else if (vegetable === 'cabbage'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[21].calorie + ' calories';  

  }else if (vegetable === 'carrot'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[22].calorie + ' calories';  

  }else if (vegetable === 'cauliflower'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[23].calorie + ' calories';  

  }else if (vegetable === 'mushrooms'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[24].calorie + ' calories';  

  }else if (vegetable === 'okra'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[25].calorie + ' calories';  

  }else if (vegetable === 'onion'){
        document.getElementById("result-one").innerHTML = vegetable + ':'; 
        document.getElementById("result-two").innerHTML = data[26].calorie + ' calories';  

  };


    });

    request.fail(function(response) {
        console.log('ERROR:' + response.statusText);
    });
	});
});



 







