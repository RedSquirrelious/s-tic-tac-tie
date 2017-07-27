// import Space from 'app/models/space_model';

// describe("Space", function() {
//   var space;

//   beforeEach(function() {
//     var spaceInfo = {row: 'x', col: 'y'};
//     space = new Space(spaceInfo);
//   });

//   it('should not have a mark unless the mark is set', function() {
//     expect(space.get('mark')).toEqual(null);
//   })

//   it('should have a mark attribute once set', function() {
//      space.setMark('abc');
//     expect(space.get('mark')).toBeDefined();
//   });

//   it('should have the right mark', function() {
//      space.setMark('abc');
//     expect(space.get('mark')).toEqual('abc');
//   });

//   it('should not have the wrong mark', function() {
//      space.setMark('abc');
//     expect(space.get('mark')).not.toEqual('xyz');
//   })

// });