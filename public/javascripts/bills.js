'use strict';

function deleteBill( billId ) {
	$.ajax({
		url: '/bill-' + billId + '/delete_bill',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JSON.stringify( { billId } ),
		type: 'POST',
		success: ( ( res ) => {
			//Replace follow button with unfollow
			console.log( "Result: ", res )
			$( "#" + billId ).remove();
		}),
		error: ( ( error ) => {
			console.log( "Error: ", error );
		})
	});
}