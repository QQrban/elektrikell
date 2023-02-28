
const apiUrl = 'https://dashboard.elering.ee/api';
const country = 'EE';

export async function getPriceData({ start, end }) {


    const params = new URLSearchParams({ start, end });

    const response = await fetch(`${apiUrl}/nps/price?${params}`);
    return response.json();
}

export async function getCurrentPrice() {
    const response = await fetch(`${apiUrl}/nps/price/${country}/current`);
    return response.json();
}

export const currentPrice = (func, setData, setErrorMessage) => {
    func()
        .then(({ success, data, messages }) => {
            if (!success) {
                throw new Error(messages[0])
            }
            setData(+((data[0].price) / 10 * 1.2).toFixed(2))
        })
        .catch(err => {
            setErrorMessage(err.toString());
        })
}
// currentPrice(getCurrentPrice, setData, setErrorMessage)