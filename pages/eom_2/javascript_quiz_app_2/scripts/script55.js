var item1 = document.getElementById('0');
var item2 = document.getElementById('1');
var item3 = document.getElementById('2');
var arr = [item1,item2,item3,];

for (i of arr){
	console.log(i)
	new Sortable(i, {
		swap: true,
	    group: 'shared4',
		animation: 150,
	});
}