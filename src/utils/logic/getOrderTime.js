function GetOrderTime(dateApi) {

    function addDay(day) {
        const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
        const date = new Date(dateApi);
        const newDate = new Date(date.setDate(date.getDate() + day));
        return `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
    }

    const orderDate = new Date(dateApi);
    const jam = orderDate.getHours();
    if (jam < 20) {
        return addDay(1);
    } else {
        return addDay(2);
    }


}

export default GetOrderTime;