const mysql = require("mysql2/promise")
const connection = mysql.createPool(process.env.CONNECTION_STRING);

async function getBanner() {
    const result = await connection.query("SELECT * FROM banner;")
    return  result [0]
};

async function insertBanner(banner) {
    const values = [banner.name, banner.year, banner.url_image]
    await connection.query("INSERT INTO banner(name,year,url_image) VALUES(?,?,?);", values)
};

async function deleteBanner(id) {
    const values = [id]
    await connection.query("DELETE FROM banner WHERE id=?;", values)
    
};


module.exports = {
    insertBanner,
    deleteBanner,
    getBanner
}