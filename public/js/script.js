$(document).ready(function() {
  // all custom jQuery will go here
  $('.ui.selection.dropdown').dropdown();

  $('.ui.form')
    .form({
      fields: {
        name: {
          identifier: 'name',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a name for the dog'
            }
          ]
        },
        breed: {
          identifier: 'breed',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a breed for the dog'
            }
          ]
        },
        image: {
          identifier: 'image',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please provide an image'
            }
          ]
        },
        age: {
          identifier: 'age',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please provide an age for the dog'
            },
            {
              type   : 'maxLength[2]',
              prompt : 'The dogs age should not be more than two digits'
            }
          ]
        },
        status: {
          identifier: 'status',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please select a status for the dog'
            }
          ]
        },
        description: {
          identifier: 'description',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please provide a description for the dog'
            }
          ]
        },
      }
    });

});

