Template.submitArticle.events({
  'submit #submit-article': function (e, t) {
    e.preventDefault();
    var title = t.$('#title').val();
    var body = t.$('#body').val();
    if (title !== null && body !== null) {
      Meteor.call('submitArticle', title, body, function (err, res) {
        if (!err) {
          console.log(res);
        } else console.log(err);
      });
    } else console.log('Error, yo');
  }
});
