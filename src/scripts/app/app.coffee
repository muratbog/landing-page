# For now.
SIGNUP_SERVICE_URI = 'http://signup.services.42debut.com'


initEmailForm = ->
  $emailForm = $('#email-form')

  $emailForm.submit (event) ->

    email = $('#signup-email').val()
    deferred = $.post "#{SIGNUP_SERVICE_URI}/signups", {email}

    deferred.success ->
      console.log "Successfully signed up `#{email}`."
      $('.thanks').show()
      $emailForm.hide()

    deferred.error ->
      console.error "Could not signup `#{email}`:"
      console.error arguments

    return false


$ ->
  initEmailForm()
