import Space from 'app/models/space_model';

describe("Space", function() {
  var space;

  beforeEach(function() {
    var spaceInfo = {row: 'x', col: 'y'};
    space = new Space(spaceInfo);
    space.setMark('abc');
  });

  it('should have a mark attribute once set', function() {
    expect(space.mark).toBeDefined();
  });

  it('should have the right mark', function() {
    expect(space.mark).toEqual('abc');
  });

  it('should not have the wrong mark', function() {
    expect(space.mark).not.toEqual('xyz');
  })

});