const user = new User();
const metaConnector = new MetaConnector();
const loginContainer = document.getElementById('login-container');

function changeLanguage() {
    const selectElement = document.getElementById('change-language');
    const event = new Event('change');
    selectElement.dispatchEvent(event);
}

window.fbAsyncInit = async function () {
    FB.init({
        appId: '719051660093443',
        xfbml: true,
        version: 'v19.0'
    });
    loginContainer.innerHTML = await user.getButton(metaConnector);
    changeLanguage();
    function reloadButton() {
        const loginButton = document.getElementsByClassName('login-button');
        for (let i = 0; i < loginButton.length; i++) {
            loginButton[i].addEventListener('click', async () => {
                await user.login(metaConnector);
                loginContainer.innerHTML = await user.getButton(metaConnector);
                changeLanguage();
                reloadButton()
            });
        }

        const logoutButton = document.getElementsByClassName('logout-button');
        for (let i = 0; i < logoutButton.length; i++) {
            logoutButton[i].addEventListener('click', async () => {
                await user.logout(metaConnector);
                loginContainer.innerHTML = await user.getButton(metaConnector);
                changeLanguage();
                reloadButton()
            });
        }
    }
    reloadButton()
};