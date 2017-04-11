Start server:

    meteor --settings settings.json --port $IP:$PORT
    
Make sure a settings.json file exists:

    {
      "public" : {
        "filepicker":{
          "key":"<API KEY HERE>"
        }
      }
    }

Files to style:

* ui/body.html: Overall layout
* ui/leftover.html: Individual leftover
* client/main.css: CSS

TODO (HREFNA)

* Represent images as boxes
* Accept audio and video
* When you click a box, show the image (or audio or video)
* Show plates in the background
* When you press "Like" on an image, tag it as "mutual" in the database.
* Leftovers tagged as "mutual" in the database, shouldn't appear on Hrefna's page.

OTHER ACCOUNTS

[X] A username called "hrefna" must exist within the application

[X] Filepicker (under Hrefna's Yale Google account)

[ ] MongoLab: We should get an account for a free shared Mongo database, instead of 
    the database within each workspace
