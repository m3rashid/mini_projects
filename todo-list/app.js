const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const { static } = require("express");
const e = require("express");
const dayDate = require(__dirname + "/my_packages/day_date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));


let day = dayDate.getDate();

mongoose.connect("mongodb://localhost:27017/todolist", { useNewUrlParser: true, useUnifiedTopology: true });

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Item = new mongoose.model("Item", itemsSchema);

const listSchema = {
    name: {
        type: String,
        required: true
    },
    items: [itemsSchema]
};
const List = new mongoose.model("List", listSchema);



app.get("/", function (req, res) {
    Item.find({}, function (err, items) {
        if (err) {
            console.log(err);
        } else {
            res.render('list', {
                listTitle: day,
                newTodo: items
            });
        }
    });
});

app.post("/", function (req, res) {
    const todo = req.body.newItem;
    const listName = req.body.list;
    const item = new Item({
        name: todo
    });

    List.findOne({ name: listName }, function (err, foundList) {
        if (err) {
            console.log(err);
        } else {
            if (foundList) {
                foundList.items.push(item);
                foundList.save();
                res.redirect("/" + listName);
            } else {
                item.save();
                res.redirect("/");
            }
        }
    });
});



app.post("/delete", function (req, res) {
    const id = req.body.delete;
    const listName = req.body.listName;
    console.log(listName);

    if (listName === day) {
        Item.findByIdAndRemove(id, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully Deleted !");
            }
        });
        res.redirect("/");
    } else {
        // List.items.findByIdAndRemove(id, checkDeleteError);
        List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: id } } }, function (err, found) {
            if (!err) {
                res.redirect("/" + listName);
            } else {
                console.log(err);
            }
        });
    }
});

app.get("/:name", function (req, res) {
    const query = _.capitalize(req.params.name);
    List.findOne({ name: query }, function (err, result) {
        if (!err) {
            if (!result) {
                // Make a new list as it doesnt exist
                const list = new List({
                    name: query,
                    items: []
                });
                list.save();
                res.redirect("/" + query);
            } else {
                // Render the found list
                res.render('list', {
                    listTitle: result.name,
                    newTodo: result.items
                });
            }
        }
    });
});

app.listen(3000, function () {
    console.log("server is up and running on port 3000");
})