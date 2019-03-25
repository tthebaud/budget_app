'use strict';

function deleteIncome( incomeId ) {
    $.ajax({
        url: '/income-' + incomeId + '/delete_income',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify( { incomeId } ),
        type: 'POST',
        success: ( ( res ) => {
            //Replace follow button with unfollow
            console.log( "Result: ", res )
            $( "#" + incomeId ).remove();
        }),
        error: ( ( error ) => {
            console.log( "Error: ", error );
        })
    });
}