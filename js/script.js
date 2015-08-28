

$(document).ready(function(){

	function addItemToList(item){
		var li = DOM.buildNode({
			el: 'li',
			kids: [{
				_className: 'row',
				kids: [
					{
						_className: 'col-xs-8',
						kids: [{
							el: 'label',
							kids: [
								{
									el: 'input',
									type: 'checkbox'
								},
								item
							]
						}]
					},
					{
						_className: 'col-xs-4',
						kids: [{
							el: 'button',
							_className: 'delete btn btn-warning btn-xs',
							kids: ['Delete']
						}]
					}
				]
			}]
		});
		$("#list").append(li);
	}

	$(".addition").submit(function(event){
		addItemToList($(".fooditem").val())
		event.preventDefault();
	});

	$(".delete").click(function(){
		$(li).remove();
		// event.preventDefualt isn't needed 'cause this button doesn't submit a form
	});
});






// create a list item in js and set the text to the list item
// $('<li/>')
// how to create li in jq
// append li to ul...?
