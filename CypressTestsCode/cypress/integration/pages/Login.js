class Login{

    getEmail()
    {
        return cy.get("input[name='email']");
    }

    getPassword()
    {
        return cy.get("input[name='password']");
    }

    getLoginBtn()
    {
        return cy.get("button[type='submit']");
    }

    getLoginMobileBtn()
    {
        return cy.get("span[kind='transparent-black']");
    }

    getLoginError()
    {
        return cy.get("div[data-testid='login_form_error-message']", {timeout:8000});
    }

}

export default Login;