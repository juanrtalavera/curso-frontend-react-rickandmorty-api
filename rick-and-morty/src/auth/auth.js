const access = [{
        email: "rick@upgrade-hub.com",
        password: "morty",
        username: "Rick from UpgradeHub"
    }];

export const login = ({email, password}) => {
    const user = access.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error("Meh, invalid credentials");
    return user;
};
