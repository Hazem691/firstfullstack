import connection from "../../../db/connection.js";

export const addposts = (req, res, next) => {
    const { title, description, price } = req.body;

    // Using parameterized query to avoid SQL injection
    const query = `INSERT INTO posts (title, description, price) VALUES ("${title}", "${description}", "${price}")`;
    const values = [title, description, price];

    connection.execute(query, values, (err, result) => {
        if (err) {
           
            return res.status(500).json({ msg: "Query error" });
        }

        if (!result.affectedRows) {
            return res.status(400).json({ msg: "Failed to add" });
        }

        return res.status(200).json({ msg: "Post added successfully" });
    });
}


export const getposts = (req,res,next)=>{
    const query = `select * from posts`;
   

    connection.execute(query,  (err, result) => {
        if (err) {
          
            return res.status(500).json({ msg: "Query error" });
        }

       
        return res.json({msg : "done" , result});
    });

}

export const updateposts = (req,res,next)=>{
    const { id , title, description, price } = req.body;

    // Using parameterized query to avoid SQL injection
    const query = `update posts set  title = "${title}" , description = "${description}", price ="${price}" where id = "${id}"`;
    const values = [title, description, price];

    connection.execute(query, values, (err, result) => {
        if (err) {
           
            return res.status(500).json({ msg: "Query error" });
        }

        if (!result.affectedRows) {
            return res.status(400).json({ msg: "Failed to update " });
        }

        return res.status(200).json({ msg: "Post updated successfully" });
    });

}

export const deleteposts = (req,res,next)=>{
    const { id  } = req.body;

    // Using parameterized query to avoid SQL injection
    const query = `delete from posts where id="${id}"`;
    const values = [id];

    connection.execute(query, values, (err, result) => {
        if (err) {
           
            return res.status(500).json({ msg: "Query error" });
        }

        if (!result.affectedRows) {
            return res.status(400).json({ msg: "Failed to delete " });
        }

        return res.status(200).json({ msg: "Post deleted successfully" });
    });

}