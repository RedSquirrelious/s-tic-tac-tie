// import Spaces from 'app/collections/board_collection';
// import Space from 'app/models/space_model';

// describe( "Spaces", function() { 
//   var board;

//   beforeEach(  function() { 
//     var spaces = [ { row: 'x', col: 'y' }, { row: 'z', col: 'a' } ];
//     board = new Board( spaces );
//    } );

//   it( 'should create a board object', function() { 
//     expect( board.length ).toEqual( 2 );
//    } );

//   it( 'should have models inside', function() { 
//     expect( board.model ).toBeDefined();
//    } );

//   it( 'should access the ids of its spaces', function() { 
//     expect( board.first().id ).toEqual( 'rowxcoly' );
//     expect( board.at( 1 ).id ).toEqual( 'rowzcola' );
//    } )
//  } );