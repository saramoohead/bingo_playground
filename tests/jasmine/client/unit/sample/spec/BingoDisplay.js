/* globals Player: false, Song: false */

describe('calling an animal', function() {

  // beforeEach(function() {
  // });

  it('clicking the button calls an animal', function() {
      // click the button
      $('button#callAnimal').click();

      // //
      $currentAnimal = $('div.widget');

      // assert the identity of the current animal
      expect(currentAnimal.length).toEqual(1);
  });

  // describe('when song has been paused', function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it('should indicate that the song is currently paused', function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it('should be possible to resume', function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it('tells the current song if the user has made it a favorite', function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
});
