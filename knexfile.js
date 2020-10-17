module.exports={
    client:"sqlite3", //specify the DBMS
    useNullAsDefault:true,//a flag required for sqlite
    connection:{
        filename:"./data/produce.db3",//location of the database file
    }
}

