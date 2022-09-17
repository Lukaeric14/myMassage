const axios = require("axios");
module.exports = {
  getHolidays: async () => {
    const res = await axios.get(
      "https://date.nager.at/api/v3/PublicHolidays/2022/US"
    );
    return res.data.map((holiday) => {
      return { date: holiday.date, name: holiday.name };
    });
  },
};
