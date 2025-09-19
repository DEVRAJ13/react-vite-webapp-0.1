export default function getNameFromEmail(email) {
    if (email) {
        const username = email.split('@')[0];
        const clean = username.replace(/[^a-zA-Z]/g, '');
        let firstName = '';
        let lastName = '';
        if (clean.length > 6) {
            const mid = Math.floor(clean.length / 2);
            firstName = clean.slice(0, mid);
            lastName = clean.slice(mid);
        } else {
            firstName = clean;
        }
        const format = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        if (lastName) {
            return `${format(firstName)} ${format(lastName)}`;
        }
        return format(firstName);
    }
    return '';
}