
SIGNUP_SERVICE_URI = 'http://signup.services.42debut.com'


app.controller 'SignupController', ($scope, $http) ->

    $scope.signup = (email) ->
        emailInputValue = $scope.form.email.$viewValue
        invalidEmail    = not email

        if invalidEmail then return alert do ->
            if not emailInputValue then 'Please enter an email address :)' \
                                   else 'Please enter a valid email address :)'

        $scope.signupDone = true
        deferred = $http.post "#{SIGNUP_SERVICE_URI}/signups", {email}

        deferred.success ->
            console.log "Successfully signed up `#{email}`."

        deferred.error ->
            console.error "Could not signup `#{email}`:"
            console.error arguments

        return false
