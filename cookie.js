const getCookie = name => {
    const cookies = document.cookie;
    const allCookie = cookies.split("; ");
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        // "country=US"
        const cookieNameValue = findCookie.split("=");
        return cookieNameValue[1];
    }
}